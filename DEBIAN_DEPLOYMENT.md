# 617 East Trust - Debian Trixie Deployment Guide

## Quick Start

This guide provides a **single-script deployment** for your Debian 13 Trixie server with production-grade security and performance.

---

## Prerequisites

- **Fresh Debian 13 Trixie server** (VPS or dedicated)
- **Root access** via SSH
- **Domain configured** with DNS pointing to your server:
  - `617east.com` → Your Server IP
  - `www.617east.com` → Your Server IP

---

## One-Command Deployment

### Step 1: Download the Deployment Script

SSH into your Debian server and download the script:

```bash
# SSH into your server
ssh root@YOUR_SERVER_IP

# Download the deployment script
wget https://raw.githubusercontent.com/Pottstim/617-east-trust/master/deploy-debian-trixie.sh

# Or clone the entire repository
git clone https://github.com/Pottstim/617-east-trust.git
cd 617-east-trust
```

### Step 2: Edit Configuration (Important!)

Open the script and update these variables at the top:

```bash
nano deploy-debian-trixie.sh
```

**Required changes:**

```bash
export CONTACT_EMAIL="your-email@example.com"  # Your email for SSL certificates
export OWNER_OPEN_ID="your_owner_id"           # Your owner ID
```

**Optional changes:**

```bash
export DOMAIN="617east.com"                    # Your domain
export WWW_DOMAIN="www.617east.com"            # Your www subdomain
export DB_NAME="eastrust_db"                   # Database name
export DB_USER="eastrust_user"                 # Database user
```

Save and exit (Ctrl+X, Y, Enter)

### Step 3: Run the Deployment

```bash
chmod +x deploy-debian-trixie.sh
sudo ./deploy-debian-trixie.sh
```

The script will:
1. ✅ Create dedicated app user
2. ✅ Install Node.js, pnpm, PM2
3. ✅ Configure firewall (UFW)
4. ✅ Set up MariaDB database
5. ✅ Clone and build your application
6. ✅ Configure PM2 process manager
7. ✅ Set up Nginx reverse proxy
8. ✅ Issue SSL certificates (Let's Encrypt)
9. ✅ Configure automated backups
10. ✅ Set up Fail2Ban security

**Deployment time:** ~10-15 minutes

---

## What Gets Installed

### Software Stack

- **Node.js** - JavaScript runtime
- **pnpm** - Fast package manager
- **PM2** - Process manager with auto-restart
- **Nginx** - Web server and reverse proxy
- **MariaDB** - MySQL-compatible database
- **Certbot** - SSL certificate management
- **UFW** - Firewall
- **Fail2Ban** - Intrusion prevention

### Security Features

- ✅ Firewall configured (ports 22, 80, 443 only)
- ✅ Database bound to localhost only
- ✅ SSL/TLS with Let's Encrypt
- ✅ HSTS, CSP, and security headers
- ✅ Fail2Ban for brute-force protection
- ✅ Automated certificate renewal
- ✅ Daily database backups (30-day retention)

---

## Post-Deployment

### Access Your Credentials

After deployment, credentials are saved securely:

```bash
cat /root/617east-credentials.txt
```

**Save these credentials** and then delete the file:

```bash
rm /root/617east-credentials.txt
```

### Verify Deployment

```bash
# Check PM2 status
pm2 status

# View application logs
pm2 logs 617-east-trust

# Check Nginx status
systemctl status nginx

# View SSL certificates
certbot certificates

# Test your website
curl -I https://617east.com
```

### Access Your Website

Visit:
- https://617east.com
- https://www.617east.com

---

## Management Commands

### Application Management

```bash
# View status
pm2 status

# View logs (real-time)
pm2 logs 617-east-trust

# View logs (last 100 lines)
pm2 logs 617-east-trust --lines 100

# Restart application
pm2 restart 617-east-trust

# Stop application
pm2 stop 617-east-trust

# Start application
pm2 start 617-east-trust
```

### Update Application

```bash
# Pull latest code
cd /var/www/617east
sudo -u eastrust git pull origin master

# Install dependencies
sudo -u eastrust pnpm install

# Run migrations (if needed)
sudo -u eastrust pnpm db:push

# Build application
sudo -u eastrust pnpm build

# Reload with zero downtime
pm2 reload 617-east-trust

# View logs to verify
pm2 logs 617-east-trust --lines 50
```

### Database Management

```bash
# Connect to database
mysql -u eastrust_user -p eastrust_db

# Manual backup
/usr/local/bin/backup-eastrust-db

# View backups
ls -lh /var/backups/mysql/

# Restore from backup
gunzip < /var/backups/mysql/eastrust_db_YYYYMMDD_HHMMSS.sql.gz | mysql -u eastrust_user -p eastrust_db
```

### Nginx Management

```bash
# Test configuration
nginx -t

# Reload configuration
systemctl reload nginx

# Restart Nginx
systemctl restart nginx

# View access logs
tail -f /var/log/nginx/617east_access.log

# View error logs
tail -f /var/log/nginx/617east_error.log
```

### SSL Certificate Management

```bash
# View certificates
certbot certificates

# Renew certificates manually
certbot renew

# Test renewal
certbot renew --dry-run
```

---

## Automated Tasks

### Daily Database Backups

Backups run automatically at **2:00 AM daily**.

- **Location:** `/var/backups/mysql/`
- **Retention:** 30 days
- **Format:** Gzipped SQL dumps
- **Log:** `/var/log/mysql-backup.log`

View backup log:
```bash
tail -f /var/log/mysql-backup.log
```

### SSL Certificate Renewal

Certificates renew automatically **60 days before expiration**.

Certbot creates a systemd timer that runs twice daily.

### PM2 Log Rotation

Logs rotate automatically:
- **Max size:** 20 MB per file
- **Retention:** 14 days
- **Compression:** Enabled

---

## Monitoring

### System Resources

```bash
# CPU and memory usage
htop

# Disk usage
df -h

# Check application memory
pm2 monit
```

### Application Health

```bash
# Check if app is responding
curl -I http://localhost:3000

# Check HTTPS
curl -I https://617east.com

# View recent logs
pm2 logs 617-east-trust --lines 50 --timestamp
```

### Security Status

```bash
# Firewall status
ufw status

# Fail2Ban status
fail2ban-client status

# Check banned IPs
fail2ban-client status sshd
```

---

## Troubleshooting

### Application Won't Start

```bash
# Check PM2 logs
pm2 logs 617-east-trust --err

# Check if port is in use
netstat -tlnp | grep 3000

# Restart PM2
pm2 restart 617-east-trust

# If still failing, check environment
cd /var/www/617east
cat .env
```

### Database Connection Error

```bash
# Check if MariaDB is running
systemctl status mariadb

# Test database connection
mysql -u eastrust_user -p eastrust_db

# Check database logs
tail -f /var/log/mysql/error.log
```

### 502 Bad Gateway

```bash
# Check if app is running
pm2 status

# Check Nginx error logs
tail -f /var/log/nginx/617east_error.log

# Restart application
pm2 restart 617-east-trust

# Restart Nginx
systemctl restart nginx
```

### SSL Certificate Issues

```bash
# Check certificate status
certbot certificates

# Renew manually
certbot renew --force-renewal

# Check Nginx configuration
nginx -t
```

---

## Security Hardening (Optional)

### Change SSH Port

```bash
# Edit SSH config
nano /etc/ssh/sshd_config

# Change line:
# Port 22
# to:
# Port 2222

# Update firewall
ufw allow 2222/tcp
ufw delete allow 22/tcp

# Restart SSH
systemctl restart sshd
```

### Disable Root Login

```bash
# Edit SSH config
nano /etc/ssh/sshd_config

# Change line:
# PermitRootLogin yes
# to:
# PermitRootLogin no

# Restart SSH
systemctl restart sshd
```

### Set Up SSH Keys

```bash
# On your local machine
ssh-keygen -t ed25519

# Copy to server
ssh-copy-id root@YOUR_SERVER_IP

# Test key login
ssh root@YOUR_SERVER_IP

# Disable password authentication
nano /etc/ssh/sshd_config
# Set: PasswordAuthentication no
systemctl restart sshd
```

---

## Backup and Recovery

### Full System Backup

```bash
# Backup application files
tar -czf /root/617east-app-backup.tar.gz /var/www/617east

# Backup database
/usr/local/bin/backup-eastrust-db

# Backup Nginx config
tar -czf /root/617east-nginx-backup.tar.gz /etc/nginx/sites-available/617east.com

# Backup environment
cp /var/www/617east/.env /root/617east-env-backup
```

### Disaster Recovery

```bash
# Restore application
tar -xzf /root/617east-app-backup.tar.gz -C /

# Restore database
gunzip < /var/backups/mysql/eastrust_db_LATEST.sql.gz | mysql -u eastrust_user -p eastrust_db

# Restore Nginx config
tar -xzf /root/617east-nginx-backup.tar.gz -C /

# Restart services
pm2 restart 617-east-trust
systemctl restart nginx
```

---

## Performance Optimization

### Enable Nginx Caching

```bash
nano /etc/nginx/sites-available/617east.com
```

Add inside `server` block:
```nginx
# Cache configuration
proxy_cache_path /var/cache/nginx levels=1:2 keys_zone=my_cache:10m max_size=1g inactive=60m;
proxy_cache_key "$scheme$request_method$host$request_uri";

location / {
    proxy_cache my_cache;
    proxy_cache_valid 200 60m;
    proxy_cache_bypass $http_cache_control;
    # ... rest of proxy settings
}
```

### Optimize MariaDB

```bash
nano /etc/mysql/mariadb.conf.d/50-server.cnf
```

Add under `[mysqld]`:
```ini
innodb_buffer_pool_size = 1G
max_connections = 100
query_cache_size = 32M
```

Restart MariaDB:
```bash
systemctl restart mariadb
```

---

## Uninstall

If you need to completely remove the installation:

```bash
# Stop and remove PM2
pm2 stop 617-east-trust
pm2 delete 617-east-trust
pm2 save

# Remove application
rm -rf /var/www/617east

# Remove database
mysql -e "DROP DATABASE eastrust_db; DROP USER 'eastrust_user'@'localhost';"

# Remove Nginx config
rm /etc/nginx/sites-enabled/617east.com
rm /etc/nginx/sites-available/617east.com
systemctl reload nginx

# Remove SSL certificates
certbot delete --cert-name 617east.com

# Remove user
userdel -r eastrust
```

---

## Support

For issues or questions:

- **Email:** info@617east.com
- **Phone:** (910) 315-1800
- **GitHub:** https://github.com/Pottstim/617-east-trust

---

## Changelog

### Version 1.0 (October 2025)
- Initial production deployment script
- Automated security hardening
- Database backups and SSL/TLS
- PM2 process management
- Fail2Ban protection

---

**Deployment script created by:** Manus AI
**Last updated:** October 17, 2025

