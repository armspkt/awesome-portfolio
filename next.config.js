/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  sw: 'service-worker.js',
})

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    emotion: true,
    styledComponents: true,
  },
}

module.exports = withPWA({
  ...nextConfig,
})
