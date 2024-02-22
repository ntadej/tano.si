import { HorizontalGradient } from '@ntadej/style'
import Footer from '@/components/footer'
import { Navigation } from '@/components/navigation'
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
