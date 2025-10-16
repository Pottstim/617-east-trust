#!/bin/bash

# 617 East Trust - Database Backup Script
# This script creates automated backups of your MySQL database

BACKUP_DIR="/var/backups/mysql"
DATE=$(date +%Y%m%d_%H%M%S)
DB_NAME="eastrust_db"
DB_USER="eastrust_user"
DB_PASS="YOUR_PASSWORD_HERE"  # Change this to your actual password

# Create backup directory if it doesn't exist
mkdir -p $BACKUP_DIR

# Create backup
echo "Starting backup of $DB_NAME..."
mysqldump -u $DB_USER -p$DB_PASS $DB_NAME | gzip > $BACKUP_DIR/${DB_NAME}_${DATE}.sql.gz

# Check if backup was successful
if [ $? -eq 0 ]; then
    echo "Backup completed successfully: ${DB_NAME}_${DATE}.sql.gz"
    
    # Keep only last 30 days of backups
    find $BACKUP_DIR -name "*.sql.gz" -mtime +30 -delete
    echo "Old backups cleaned up (keeping last 30 days)"
else
    echo "Backup failed!"
    exit 1
fi

# Optional: Upload to cloud storage (uncomment and configure)
# aws s3 cp $BACKUP_DIR/${DB_NAME}_${DATE}.sql.gz s3://your-bucket/backups/

exit 0

