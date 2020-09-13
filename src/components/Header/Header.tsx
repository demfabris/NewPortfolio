import React, { useEffect, useRef } from 'react'
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
      <nav className="header__navigation">
        <ul className="header__links">
          <li className="header__link">
            <a className="header__anchor header__anchor--green" href="google.com">
              home
            </a>
          </li>
          <li className="header__link">
            <a className="header__anchor header__anchor--blue" href="google.com">
              code
            </a>
          </li>
          <li className="header__link">
            <a className="header__anchor header__anchor--orange" href="google.com">
              About
            </a>
          </li>
          <li className="header__link">
            <a className="header__anchor header__anchor--purple" href="google.com">
              contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
