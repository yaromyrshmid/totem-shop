const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');

const nextConfig = {
  images: {
    domains: ['images.ctfassets.net']
  }
};

module.exports = withPlugins([[withImages]], nextConfig);
