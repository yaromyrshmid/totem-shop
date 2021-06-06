const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');

const nextConfig = {
  future: {
    webpack5: true
  },
  images: {
    domains: ['images.ctfassets.net']
  }
};

module.exports = withPlugins([[withImages]], nextConfig);
