#!/bin/bash
set -e

cd /home/forge/aslam.in

echo "🚀 Starting deployment..."

git pull origin main

echo "📦 Installing dependencies..."
npm ci

echo "🔨 Building application..."
npm run build

if ! command -v pm2 &> /dev/null; then
  npm install -g pm2
fi

# Use ecosystem.config.json: runs standalone server with 768MB heap + 900MB restart limit
pm2 delete aslam-in 2>/dev/null || true
pm2 start ecosystem.config.json
pm2 save

echo "✅ Deployment complete!"
