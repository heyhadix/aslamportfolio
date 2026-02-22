#!/bin/bash
set -e

# Forge zero-downtime: script runs from the NEW release directory (e.g. .../releases/63582227).
# We must build HERE so .next exists in this release. PM2 must run from this same path.
RELEASE_DIR="${FORGE_SITE_PATH:-$(pwd)}"
cd "$RELEASE_DIR"

echo "🚀 Starting deployment in $RELEASE_DIR"

if [ -d .git ]; then
  git pull origin main
else
  echo "→ Not a git repo, skipping git pull"
fi

echo "📦 Installing dependencies..."
npm ci

echo "🔨 Building application..."
npm run build

if ! command -v pm2 &> /dev/null; then
  npm install -g pm2
fi

# PM2 must use THIS release dir as cwd (so it finds .next we just built).
# Generate a deploy-time config with the correct path.
DEPLOY_ECOSYSTEM="ecosystem.config.deploy.json"
cat > "$DEPLOY_ECOSYSTEM" << ECOSYSTEM
{
  "apps": [
    {
      "name": "aslam-in",
      "script": "npm",
      "args": "run start",
      "cwd": "$RELEASE_DIR",
      "instances": 1,
      "exec_mode": "fork",
      "max_memory_restart": "500M",
      "env": {
        "NODE_ENV": "production",
        "PORT": 3000,
        "NODE_OPTIONS": "--max-old-space-size=384"
      }
    }
  ]
}
ECOSYSTEM

pm2 delete aslam-in 2>/dev/null || true
pm2 start "$DEPLOY_ECOSYSTEM"
pm2 save
rm -f "$DEPLOY_ECOSYSTEM"

echo "✅ Deployment complete!"
