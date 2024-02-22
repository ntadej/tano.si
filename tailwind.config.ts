import typography from '@tailwindcss/typography'
import type { Config } from 'tailwindcss'
import { rose } from 'tailwindcss/colors'
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: [
    './src/app/**/*.{tsx,mdx}',
    './src/components/**/*.{tsx,mdx}',
    './node_modules/@ntadej/style/src/components/**/*.{tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: rose,
        special1: '#DE2A4A',
        special2: '#BA1E40',
      },
      fontFamily: {
        sans: ['InterVariable', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [typography],
  darkMode: 'class',
} satisfies Config
