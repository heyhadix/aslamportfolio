#!/bin/bash
set -e

cd /home/forge/your-domain.com

echo "🚀 Starting deployment..."

# Pull latest code
git pull origin main

# Install dependencies
echo "📦 Installing dependencies..."
npm ci

# Build Next.js
echo "🔨 Building application..."
npm run build

# Restart PM2 process
echo "🔄 Restarting application..."
pm2 restart aslam-portfolio || pm2 start npm --name "aslam-portfolio" -- start

echo "✅ Deployment complete!"
