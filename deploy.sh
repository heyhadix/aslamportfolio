#!/bin/sh
set -e

echo "🚀 Starting deployment..."

# Install dependencies
echo "📦 Installing dependencies..."
npm ci --production=false

# Build the application
echo "🔨 Building Next.js application..."
npm run build

# Clean up dev dependencies (optional, saves space)
# npm prune --production

echo "✅ Deployment complete!"
