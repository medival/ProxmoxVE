#!/bin/bash
# 2FAuth Installation Script

# Update system packages
sudo apt update && sudo apt upgrade -y

# Install dependencies
sudo apt install -y git curl nginx php php-fpm php-mysql php-xml php-mbstring php-zip composer

# Clone 2FAuth repository
cd /var/www
sudo git clone https://github.com/Bubka/2FAuth.git
cd 2FAuth

# Install PHP dependencies
sudo composer install --no-dev --optimize-autoloader

# Configure environment
sudo cp .env.example .env
sudo php artisan key:generate

# Set permissions
sudo chown -R www-data:www-data /var/www/2FAuth
sudo chmod -R 755 /var/www/2FAuth

echo "2FAuth installation complete! Please configure your .env file and web server."
