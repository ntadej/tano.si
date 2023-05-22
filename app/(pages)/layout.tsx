import { HorizontalGradient } from '@ntadej/style/components/decorations'
import Footer from 'components/Footer'
import { Navigation } from 'components/navigation'
import { ReactNode } from 'react'

export default function PageLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <HorizontalGradient />
      <Navigation />
      {children}
      <Footer />
    </>
  )
}
