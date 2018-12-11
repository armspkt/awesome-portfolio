const fs = require('fs')
const { join } = require('path')
const { promisify } = require('util')
const copyFile = promisify(fs.copyFile)
const withOffline = require('next-offline')

module.exports = withOffline({
  exportPathMap: async function(
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    if (dev) {
      return defaultPathMap
    }
    // This will copy robots.txt from your project root into the out directory
    await copyFile(join(dir, 'static/robots.txt'), join(outDir, 'robots.txt'))
    await copyFile(
      join(dir, 'static/manifest.json'),
      join(outDir, 'manifest.json')
    )
    return defaultPathMap
  },
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }

    const originalEntry = config.entry
    config.entry = async () => {
      const entries = await originalEntry()

      if (
        entries['main.js'] &&
        !entries['main.js'].includes('./polyfills.js')
      ) {
        entries['main.js'].unshift('./polyfills.js')
      }

      return entries
    }

    return config
  }
})
