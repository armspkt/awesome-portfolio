const withOffline = require('next-offline')
const withBundleAnalyzer = require('@zeit/next-bundle-analyzer')

module.exports = withBundleAnalyzer(
  withOffline({
    // exportTrailingSlash: true,
    // reactStrictMode: true,
    // next-offline
    workboxOpts: {},
    // next-bundle-analyzer
    analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
    analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
    bundleAnalyzerConfig: {
      server: {
        analyzerMode: 'static',
        reportFilename: '../bundles/server.html'
      },
      browser: {
        analyzerMode: 'static',
        reportFilename: '../bundles/client.html'
      }
    },
    // exportPathMap: async function() {
    //   const paths = {
    //     '/': { page: '/' },
    //     '/skill': { page: '/skill' }
    //   }
    //   return paths
    // },
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
)

// https://github.com/hanford/next-offline
