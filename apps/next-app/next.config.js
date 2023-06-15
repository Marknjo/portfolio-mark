/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  transpilePackages: ['ui'],

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.ytimg.com',
      },
    ],
  },

  experimental: {
    scrollRestoration: true,
    serverActions: true,
  },
}
