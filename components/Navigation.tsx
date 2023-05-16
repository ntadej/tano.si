import { FunctionComponent, createRef } from 'react'
import Link from 'next/link'
import NavItems from 'components/NavItems'
import NavSocial from 'components/NavSocial'

const Navigation: FunctionComponent = () => {
  const burger = createRef<HTMLDivElement>()
  const nav = createRef<HTMLDivElement>()

  function burgerClicked() {
    if (burger.current) {
      burger.current.classList.toggle('is-active')
    }
    if (nav.current) {
      nav.current.classList.toggle('is-active')
    }
  }

  return (
    <nav
      className="navbar navbar-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link href="/" passHref className="navbar-item is-brand">
            <span className="logo"></span>
          </Link>

          <div ref={burger} className="burger navbar-burger" onClick={burgerClicked}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div ref={nav} className="navbar-menu">
          <NavItems />
          <NavSocial />
        </div>
      </div>
    </nav>
  )
}

export default Navigation
