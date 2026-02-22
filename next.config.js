/** @type {import('next').NextConfig} */
const nextConfig = {
  // Standalone output: minimal server bundle, much lower memory than full node_modules
  output: 'standalone',

  // Disable source maps in production to reduce memory (~50–100MB saved)
  productionBrowserSourceMaps: false,

  // Reduce memory: disable x-powered-by and strict mode overhead
  poweredByHeader: false,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
