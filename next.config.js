const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');

const nextConfig = {
  images: {
    domains: ['images.ctfassets.net']
  },
  eslint: {
    // Warning: Dangerously allow production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true
  }
};

module.exports = withPlugins([[withImages]], nextConfig);
