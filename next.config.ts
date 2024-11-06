import type { NextConfig } from 'next'
import * as path from 'path'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  transpilePackages: ['@ntadej/style'],
  env: {
    SITE_NAME: process.env.SITE_NAME,
    SITE_COLOR: process.env.SITE_COLOR_PRIMARY,
  },
  outputFileTracingRoot: path.join(__dirname, '../'),
}

export default nextConfig
