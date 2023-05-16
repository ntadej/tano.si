import { FunctionComponent, ReactNode } from 'react'
import { HeadSetup } from '@ntadej/style'
import Footer from 'components/Footer'
import Navigation from 'components/Navigation'

type Props = {
  children: ReactNode
  title: string
}

const Layout: FunctionComponent<Props> = ({ children, title }) => (
  <div>
    <HeadSetup title={title} siteName="Tadej Novak" />
    <Navigation />
    {children}
    <Footer />
  </div>
)

export default Layout
