import { Metadata } from 'next'
import { ReactNode } from 'react'
import { rootMetadata } from '@ntadej/style'

import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false

import '@fortawesome/fontawesome-svg-core/styles.css'
import 'style/main.sass'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

export const metadata: Metadata = rootMetadata
