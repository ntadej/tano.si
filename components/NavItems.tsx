import { FunctionComponent } from 'react'
import { Link } from '@ntadej/style'

const NavItems: FunctionComponent = () => {
  return (
    <div className="navbar-start">
      <Link href="/">
        <a className="navbar-item">About</a>
      </Link>
      <Link href="/particle-clicker">
        <a className="navbar-item">Particle Clicker</a>
      </Link>
    </div>
  )
}

export default NavItems
