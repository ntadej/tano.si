/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  transpilePackages: ['@ntadej/style'],
  env: {
    SITE_NAME: process.env.SITE_NAME,
    SITE_COLOR: process.env.SITE_COLOR_PRIMARY,
  },
}

export default nextConfig
