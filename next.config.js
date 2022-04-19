const withPlugins = require('next-compose-plugins')
const withPWA = require('next-pwa')
const withBundleAnalyzer = require('@zeit/next-bundle-analyzer')
// const cp = require('child_process')
// show abbreviated commit object as fallback (git rev-parse --short HEAD)
// const buildId = cp.execSync('git describe --always', {
//   cwd: __dirname,
//   encoding: 'utf8',
// })

// next.js configuration
const nextConfig = {
  // exportTrailingSlash: true,
  // reactStrictMode: true,
  // exportPathMap: async function() {
  //   const paths = {
  //     '/': { page: '/' },
  //     '/skill': { page: '/skill' }
  //   }
  //   return paths
  // },
  // target: 'serverless',
  // generateBuildId: async () => {
  //   // You can, for example, get the latest git commit hash here
  //   return buildId
  // },
}

module.exports = withPlugins(
  [
    // add a plugin with specific configuration
    [
      withBundleAnalyzer,
      {
        analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
        analyzeBrowser: ['browser', 'both'].includes(
          process.env.BUNDLE_ANALYZE
        ),
        bundleAnalyzerConfig: {
          server: {
            analyzerMode: 'static',
            reportFilename: '../bundles/server.html',
          },
          browser: {
            analyzerMode: 'static',
            reportFilename: '../bundles/client.html',
          },
        },
      },
    ],
    [
      withPWA,
      {
        pwa: {
          dest: 'public',
          disable: process.env.NODE_ENV === 'development',
          register: true,
          sw: 'service-worker.js',
          buildExcludes: [/middleware-manifest.json$/],
        },
        async rewrites() {
          return [
            {
              source: '/service-worker.js',
              destination: '/_next/static/service-worker.js',
            },
          ]
        },
      },
    ],
  ],
  nextConfig
)
