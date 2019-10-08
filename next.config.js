const withOffline = require('next-offline')

module.exports = withOffline({
  // exportTrailingSlash: true,
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: 'empty'
      }
    }
    return config
  }
})

// https://github.com/hanford/next-offline
