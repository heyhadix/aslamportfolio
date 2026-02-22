#!/bin/bash
set -e

# Forge runs deploy script from site root; use FORGE_SITE_PATH if set, else default
DEPLOY_PATH="${FORGE_SITE_PATH:-/home/forge/aslam.in}"
cd "$DEPLOY_PATH"

echo "🚀 Starting deployment..."

# Only pull if this directory is a git repo (Forge zero-downtime may copy files without .git)
if [ -d .git ]; then
  git pull origin main
else
  echo "→ Not a git repo (Forge may have deployed files already), skipping git pull"
fi

echo "📦 Installing dependencies..."
npm ci

echo "🔨 Building application..."
npm run build

if ! command -v pm2 &> /dev/null; then
  npm install -g pm2
fi

pm2 delete aslam-in 2>/dev/null || true
pm2 start ecosystem.config.json
pm2 save

echo "✅ Deployment complete!"
