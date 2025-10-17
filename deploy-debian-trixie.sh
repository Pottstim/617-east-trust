#!/usr/bin/env bash
################################################################################
# 617 East Trust - Production Deployment Script for Debian 13 Trixie
# 
# This script provides a hardened, production-ready deployment with:
# - Automatic security hardening
# - Database setup with backups
# - SSL/TLS with Let's Encrypt
# - PM2 process management
# - Nginx reverse proxy
# - Firewall configuration
# - Fail2Ban protection
#
# Usage: Run as root on a clean Debian Trixie server
#   chmod +x deploy-debian-trixie.sh
#   sudo ./deploy-debian-trixie.sh
################################################################################

set -euo pipefail

# Color output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

log_info() { echo -e "${BLUE}[INFO]${NC} $1"; }
log_success() { echo -e "${GREEN}[SUCCESS]${NC} $1"; }
log_warning() { echo -e "${YELLOW}[WARNING]${NC} $1"; }
log_error() { echo -e "${RED}[ERROR]${NC} $1"; }

################################################################################
# CONFIGURATION - EDIT THESE VALUES
################################################################################

export DOMAIN="617east.com"
export WWW_DOMAIN="www.617east.com"
export CONTACT_EMAIL="info@617east.com"  # Change this to your email
export REPO_URL="https://github.com/Pottstim/617-east-trust.git"

# App owner metadata
export OWNER_OPEN_ID="your_owner_id"  # Change this
export OWNER_NAME="617 East Trust"

# Database configuration
export DB_NAME="eastrust_db"
export DB_USER="eastrust_user"
export DB_PASS="$(openssl rand -base64 24)"
export JWT_SECRET="$(openssl rand -base64 48)"

# Node app port behind Nginx
export APP_PORT="3000"

# System user and app path
export APP_USER="eastrust"
export APP_DIR="/var/www/617east"

################################################################################
# SYSTEM SETUP
################################################################################

log_info "Starting 617 East Trust deployment on Debian Trixie..."

# Check if running as root
if [ "$EUID" -ne 0 ]; then 
  log_error "Please run as root (use sudo)"
  exit 1
fi

log_info "Step 1/10: Creating dedicated app user and directories..."

# Create dedicated user
if ! id -u "$APP_USER" >/dev/null 2>&1; then
  adduser --system --group --home "$APP_DIR" "$APP_USER"
  log_success "Created user: $APP_USER"
else
  log_warning "User $APP_USER already exists"
fi

mkdir -p "$APP_DIR" && chown -R "$APP_USER:$APP_USER" "$APP_DIR"
mkdir -p /var/backups/mysql
log_success "Directories created"

log_info "Step 2/10: Installing system packages..."

# Update system
apt update && apt -y upgrade
apt install -y ca-certificates curl gnupg lsb-release

# Install Node.js from Debian repos
apt install -y nodejs npm
log_success "Node.js installed: $(node --version)"

# Install pnpm and PM2
npm i -g pnpm pm2
log_success "pnpm and PM2 installed"

# Configure PM2 log rotation
pm2 install pm2-logrotate
pm2 set pm2-logrotate:max_size 20M
pm2 set pm2-logrotate:retain 14
pm2 set pm2-logrotate:compress true
log_success "PM2 log rotation configured"

# Install web stack
apt install -y nginx certbot python3-certbot-nginx git
apt install -y mariadb-server
log_success "Web stack installed"

# Install security tools
apt install -y ufw fail2ban
log_success "Security tools installed"

################################################################################
# FIREWALL CONFIGURATION
################################################################################

log_info "Step 3/10: Configuring firewall..."

ufw --force enable
ufw allow 22/tcp   # SSH
ufw allow 80/tcp   # HTTP
ufw allow 443/tcp  # HTTPS
ufw deny 3306/tcp  # MySQL (deny external access)
log_success "Firewall configured"

################################################################################
# DATABASE SETUP
################################################################################

log_info "Step 4/10: Setting up MariaDB database..."

# Ensure DB running
systemctl enable --now mariadb || systemctl enable --now mysql

# Bind to localhost for security
if [ -f /etc/mysql/mariadb.conf.d/50-server.cnf ]; then
  sed -i 's/^\s*bind-address\s*=.*/bind-address = 127.0.0.1/' /etc/mysql/mariadb.conf.d/50-server.cnf || true
elif [ -f /etc/mysql/mysql.conf.d/mysqld.cnf ]; then
  sed -i 's/^\s*bind-address\s*=.*/bind-address = 127.0.0.1/' /etc/mysql/mysql.conf.d/mysqld.cnf || true
else
  printf "\n[mysqld]\nbind-address = 127.0.0.1\n" >> /etc/mysql/mariadb.conf.d/99-bind-local.cnf
fi
systemctl restart mariadb || systemctl restart mysql
log_success "MariaDB bound to localhost"

# Create database and user
log_info "Creating database and user..."
mysql <<SQL
CREATE DATABASE IF NOT EXISTS \`${DB_NAME}\` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER IF NOT EXISTS '${DB_USER}'@'localhost' IDENTIFIED BY '${DB_PASS}';
GRANT ALL PRIVILEGES ON \`${DB_NAME}\`.* TO '${DB_USER}'@'localhost';
FLUSH PRIVILEGES;
SQL
log_success "Database created: $DB_NAME"

# Create MySQL client config for backups
install -m 600 /dev/null /root/.my.cnf
cat >/root/.my.cnf <<EOF
[client]
user=${DB_USER}
password=${DB_PASS}
host=127.0.0.1
EOF
log_success "MySQL client config created"

################################################################################
# APPLICATION DEPLOYMENT
################################################################################

log_info "Step 5/10: Cloning repository and installing dependencies..."

# Clone repository
sudo -u "$APP_USER" bash -lc "
  set -euo pipefail
  if [ -z \"\$(ls -A $APP_DIR 2>/dev/null)\" ]; then
    git clone '$REPO_URL' '$APP_DIR'
  fi
  cd '$APP_DIR'
  pnpm install --frozen-lockfile || pnpm install
"
log_success "Repository cloned and dependencies installed"

log_info "Step 6/10: Creating production environment file..."

# Create .env file
sudo -u "$APP_USER" bash -lc "
  cat >'$APP_DIR/.env' <<ENV
# Database
DATABASE_URL=mysql://${DB_USER}:${DB_PASS}@localhost:3306/${DB_NAME}

# Server
NODE_ENV=production
PORT=${APP_PORT}

# Authentication
JWT_SECRET=${JWT_SECRET}
OAUTH_SERVER_URL=https://api.manus.im
OWNER_OPEN_ID=${OWNER_OPEN_ID}
OWNER_NAME=${OWNER_NAME}

# App Configuration
VITE_APP_ID=617-east-trust
VITE_APP_TITLE=617 East Trust
VITE_APP_LOGO=/logo-nc.png
VITE_OAUTH_PORTAL_URL=https://portal.manus.im

# Built-in Services
BUILT_IN_FORGE_API_KEY=
BUILT_IN_FORGE_API_URL=https://api.manus.im

# Optional Analytics
VITE_ANALYTICS_WEBSITE_ID=
VITE_ANALYTICS_ENDPOINT=
ENV
  chmod 600 '$APP_DIR/.env'
"
log_success "Environment file created"

log_info "Running database migrations and building application..."

# Migrate and build
sudo -u "$APP_USER" bash -lc "
  cd '$APP_DIR'
  pnpm db:push
  pnpm build
"
log_success "Application built successfully"

################################################################################
# PM2 PROCESS MANAGER
################################################################################

log_info "Step 7/10: Configuring PM2 process manager..."

# Create PM2 ecosystem config
cat >"$APP_DIR/ecosystem.config.js" <<'EOF'
module.exports = {
  apps: [{
    name: '617-east-trust',
    script: 'server/_core/index.ts',
    interpreter: 'node',
    interpreter_args: '--loader tsx',
    instances: 1,
    exec_mode: 'cluster',
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: process.env.PORT || 3000
    },
    error_file: './logs/err.log',
    out_file: './logs/out.log',
    log_file: './logs/combined.log',
    time: true
  }]
};
EOF
chown "$APP_USER:$APP_USER" "$APP_DIR/ecosystem.config.js"
sudo -u "$APP_USER" bash -lc "mkdir -p '$APP_DIR/logs'"

# Start application with PM2
sudo -u "$APP_USER" pm2 start "$APP_DIR/ecosystem.config.js"
pm2 save
eval "$(pm2 startup systemd -u "$APP_USER" --hp "$APP_DIR" | tail -n 1)"
log_success "PM2 configured and application started"

################################################################################
# NGINX REVERSE PROXY
################################################################################

log_info "Step 8/10: Configuring Nginx reverse proxy..."

cat >/etc/nginx/sites-available/${DOMAIN} <<NGINX
upstream app617east {
    server 127.0.0.1:${APP_PORT};
    keepalive 32;
}

server {
    listen 80;
    listen [::]:80;
    server_name ${DOMAIN} ${WWW_DOMAIN};

    # ACME challenges
    location ^~ /.well-known/acme-challenge/ { 
        root /var/www/html; 
    }

    location / {
        proxy_pass http://app617east;
        proxy_http_version 1.1;
        proxy_set_header Connection "";
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;

        proxy_read_timeout 60s;
        proxy_send_timeout 60s;
        proxy_connect_timeout 15s;

        add_header X-Frame-Options "SAMEORIGIN" always;
        add_header X-Content-Type-Options "nosniff" always;
        add_header X-XSS-Protection "1; mode=block" always;
    }

    # Static files caching
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2|ttf|eot)$ {
        proxy_pass http://app617east;
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    access_log /var/log/nginx/617east_access.log;
    error_log  /var/log/nginx/617east_error.log;

    client_max_body_size 10M;
}
NGINX

ln -sf /etc/nginx/sites-available/${DOMAIN} /etc/nginx/sites-enabled/${DOMAIN}
nginx -t && systemctl reload nginx
log_success "Nginx configured"

################################################################################
# DNS VERIFICATION
################################################################################

log_info "Step 9/10: Verifying DNS configuration..."

log_warning "Please ensure your DNS records are configured:"
log_warning "  A record: $DOMAIN -> $(curl -s ifconfig.me)"
log_warning "  A record: $WWW_DOMAIN -> $(curl -s ifconfig.me)"
echo ""
log_info "Checking DNS resolution..."
dig +short ${DOMAIN} A || log_warning "DNS not yet propagated for $DOMAIN"
dig +short ${WWW_DOMAIN} A || log_warning "DNS not yet propagated for $WWW_DOMAIN"

read -p "Press Enter when DNS is configured and propagated..."

################################################################################
# SSL/TLS WITH LET'S ENCRYPT
################################################################################

log_info "Step 10/10: Setting up SSL/TLS with Let's Encrypt..."

# Issue certificates
certbot --nginx -d "${DOMAIN}" -d "${WWW_DOMAIN}" --email "${CONTACT_EMAIL}" --agree-tos -n

# Add strict security headers
awk '
/server_name/ && /'"${DOMAIN//./\\.}"'/ && https==0 { https=1 }
https==1 && /^\s*listen\s+443/ { in443=1 }
in443==1 && /^\s*location\s+\// { 
  print
  print "        add_header Strict-Transport-Security \"max-age=31536000; includeSubDomains; preload\" always;";
  print "        add_header Referrer-Policy \"no-referrer-when-downgrade\" always;";
  print "        add_header Permissions-Policy \"geolocation=(), microphone=(), camera=()\" always;";
  in443=2; next
}
{ print }
' "/etc/nginx/sites-enabled/${DOMAIN}" >"/etc/nginx/sites-enabled/${DOMAIN}.tmp" && mv "/etc/nginx/sites-enabled/${DOMAIN}.tmp" "/etc/nginx/sites-enabled/${DOMAIN}"

nginx -t && systemctl reload nginx
log_success "SSL/TLS configured with strict security headers"

# Test certificate renewal
certbot renew --dry-run
log_success "Certificate auto-renewal tested"

################################################################################
# AUTOMATED BACKUPS
################################################################################

log_info "Setting up automated database backups..."

cat >/usr/local/bin/backup-eastrust-db <<'BASH'
#!/usr/bin/env bash
set -euo pipefail
BACKUP_DIR="/var/backups/mysql"
DATE="$(date +%Y%m%d_%H%M%S)"
DB_NAME="${DB_NAME:-eastrust_db}"
mkdir -p "$BACKUP_DIR"
mysqldump --single-transaction "$DB_NAME" | gzip > "${BACKUP_DIR}/${DB_NAME}_${DATE}.sql.gz"
find "$BACKUP_DIR" -name "*.sql.gz" -mtime +30 -delete
echo "Backup completed: ${BACKUP_DIR}/${DB_NAME}_${DATE}.sql.gz"
BASH
chmod +x /usr/local/bin/backup-eastrust-db

# Add to crontab (daily at 2 AM)
( crontab -l 2>/dev/null; echo "0 2 * * * DB_NAME=${DB_NAME} /usr/local/bin/backup-eastrust-db >>/var/log/mysql-backup.log 2>&1" ) | crontab -
log_success "Automated backups configured (daily at 2 AM)"

################################################################################
# FAIL2BAN CONFIGURATION
################################################################################

log_info "Configuring Fail2Ban..."

cat >/etc/fail2ban/jail.local <<'JAIL'
[sshd]
enabled = true
port    = ssh
logpath = %(sshd_log)s
maxretry = 6
bantime = 1h

[nginx-http-auth]
enabled = true

[nginx-botsearch]
enabled = true
JAIL

systemctl enable --now fail2ban
log_success "Fail2Ban configured"

################################################################################
# VERIFICATION
################################################################################

log_info "Running verification checks..."

echo ""
log_info "PM2 Status:"
pm2 status

echo ""
log_info "Application Health Check:"
curl -I http://127.0.0.1:${APP_PORT} || log_warning "App not responding on localhost"

echo ""
log_info "Nginx Status:"
nginx -t && systemctl status nginx --no-pager | head -n 5

echo ""
log_info "HTTPS Check:"
curl -I https://${DOMAIN} || log_warning "HTTPS not yet accessible"

echo ""
log_info "SSL Certificates:"
certbot certificates

################################################################################
# SAVE CREDENTIALS
################################################################################

log_info "Saving deployment credentials..."

cat >/root/617east-credentials.txt <<CREDS
================================================================================
617 East Trust - Deployment Credentials
Generated: $(date)
================================================================================

DOMAIN: ${DOMAIN}
WWW_DOMAIN: ${WWW_DOMAIN}

DATABASE:
  Name: ${DB_NAME}
  User: ${DB_USER}
  Password: ${DB_PASS}
  Connection: mysql://${DB_USER}:${DB_PASS}@localhost:3306/${DB_NAME}

JWT_SECRET: ${JWT_SECRET}

APPLICATION:
  Directory: ${APP_DIR}
  User: ${APP_USER}
  Port: ${APP_PORT}

IMPORTANT:
  - Keep this file secure and delete after saving credentials elsewhere
  - Database backups: /var/backups/mysql/
  - Application logs: ${APP_DIR}/logs/
  - Nginx logs: /var/log/nginx/

USEFUL COMMANDS:
  - View app status: pm2 status
  - View app logs: pm2 logs 617-east-trust
  - Restart app: pm2 restart 617-east-trust
  - Update app: cd ${APP_DIR} && git pull && pnpm install && pnpm build && pm2 reload 617-east-trust
  - Backup database: /usr/local/bin/backup-eastrust-db
  - View Nginx logs: tail -f /var/log/nginx/617east_access.log

================================================================================
CREDS

chmod 600 /root/617east-credentials.txt
log_success "Credentials saved to /root/617east-credentials.txt"

################################################################################
# COMPLETION
################################################################################

echo ""
echo "================================================================================"
log_success "🎉 617 East Trust deployment completed successfully!"
echo "================================================================================"
echo ""
log_info "Your website is now live at:"
echo "  https://${DOMAIN}"
echo "  https://${WWW_DOMAIN}"
echo ""
log_info "Next steps:"
echo "  1. Review credentials in /root/617east-credentials.txt"
echo "  2. Test your website thoroughly"
echo "  3. Set up monitoring (optional)"
echo "  4. Configure email notifications (optional)"
echo ""
log_warning "Security reminder:"
echo "  - Change default SSH port (optional but recommended)"
echo "  - Set up SSH key authentication"
echo "  - Disable root login via SSH"
echo "  - Keep system updated: apt update && apt upgrade"
echo ""
log_info "For updates, run:"
echo "  cd ${APP_DIR} && git pull && pnpm install && pnpm build && pm2 reload 617-east-trust"
echo ""
echo "================================================================================"

