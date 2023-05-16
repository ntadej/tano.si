import { join } from 'path'
import { fileURLToPath } from 'url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

/** @type {import('next').NextConfig} */
export default {
  reactStrictMode: true,
  transpilePackages: ['@ntadej/style'],
  sassOptions: {
    includePaths: [join(__dirname, 'assets'), join(__dirname, 'style')],
    additionalData: `$brand-primary: ${process.env.SITE_COLOR_PRIMARY}\n$brand-secondary: ${process.env.SITE_COLOR_SECONDARY}`,
  },
}
