import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { init } from 'ityped'

const Header: React.FC = () => {
  const logoRef = useRef<HTMLSpanElement>(null!)

  useEffect(() => {
    init(logoRef.current, {
      showCursor: true,
      strings: ['fabricio7p', 'f<7>'],
      typeSpeed: 200,
      backSpeed: 100,
      cursorChar: '_',
    })
  }, [])

  return (
    <header className="header">
      <button className="header__logo">
        <i className="material-icons">keyboard_arrow_right</i>
        <span className="header__logo-text" ref={logoRef}></span>
      </button>
      <button className="header__burguer">
        <i className="material-icons">menu</i>
      </button>
      <nav className="header__navigation">
        <ul className="header__links">
          <li className="header__link">
            <Link className="header__anchor" to="/">
              home
            </Link>
          </li>
          <li className="header__link">
            <Link className="header__anchor" to="/code">
              code
            </Link>
          </li>
          <li className="header__link">
            <a className="header__anchor" href="google.com">
              about
            </a>
          </li>
          <li className="header__link">
            <a className="header__anchor" href="google.com">
              contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
