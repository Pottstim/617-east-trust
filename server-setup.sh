#!/bin/bash

# 617 East Trust - Quick Server Setup Script
# Run this on your fresh Ubuntu 22.04 server to install all dependencies

set -e  # Exit on error

echo "========================================="
echo "617 East Trust - Server Setup"
echo "========================================="
echo ""

# Update system
echo "Step 1: Updating system packages..."
sudo apt update && sudo apt upgrade -y

# Install Node.js 22.x
echo ""
echo "Step 2: Installing Node.js 22.x..."
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt install -y nodejs

# Install pnpm
echo ""
echo "Step 3: Installing pnpm..."
sudo npm install -g pnpm

# Install MySQL
echo ""
echo "Step 4: Installing MySQL..."
sudo apt install -y mysql-server

# Install Nginx
echo ""
echo "Step 5: Installing Nginx..."
sudo apt install -y nginx

# Install Certbot
echo ""
echo "Step 6: Installing Certbot (for SSL)..."
sudo apt install -y certbot python3-certbot-nginx

# Install Git
echo ""
echo "Step 7: Installing Git..."
sudo apt install -y git

# Install PM2
echo ""
echo "Step 8: Installing PM2..."
sudo npm install -g pm2

# Install additional utilities
echo ""
echo "Step 9: Installing additional utilities..."
sudo apt install -y htop curl wget unzip

# Configure firewall
echo ""
echo "Step 10: Configuring firewall..."
sudo ufw --force enable
sudo ufw allow ssh
sudo ufw allow 22/tcp
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw deny 3306/tcp

echo ""
echo "========================================="
echo "Installation Complete!"
echo "========================================="
echo ""
echo "Next steps:"
echo "1. Secure MySQL: sudo mysql_secure_installation"
echo "2. Create database and user (see SELF_HOST_GUIDE.md)"
echo "3. Upload your application files to /var/www/617east"
echo "4. Configure environment variables (.env)"
echo "5. Install dependencies: pnpm install"
echo "6. Run migrations: pnpm db:push"
echo "7. Build application: pnpm build"
echo "8. Start with PM2: pm2 start ecosystem.config.js"
echo "9. Configure Nginx (see nginx.conf.template)"
echo "10. Set up SSL: sudo certbot --nginx -d 617east.com -d www.617east.com"
echo ""
echo "For detailed instructions, see SELF_HOST_GUIDE.md"
echo ""

