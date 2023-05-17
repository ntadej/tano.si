import { ReactNode } from 'react'
import Footer from 'components/Footer'
import Navigation from 'components/Navigation'

export default function PageLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  )
}
