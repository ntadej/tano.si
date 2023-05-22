import type { Config } from 'tailwindcss'
import { rose } from 'tailwindcss/colors'
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: [
    './app/**/*.{tsx,mdx}',
    './components/**/*.{tsx,mdx}',
    './node_modules/@ntadej/style/components/**/*.{tsx,mdx}',
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
  plugins: [],
  darkMode: 'class',
} satisfies Config
