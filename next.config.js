/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  allowedDevOrigins: ['10.0.0.6'],
  images: {
    domains: [],
    unoptimized: true,
  },
}

module.exports = nextConfig