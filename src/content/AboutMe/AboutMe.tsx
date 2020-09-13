import React from 'react'
import { Link } from 'react-router-dom'

const AboutMeBase = () => {
  return (
    <div className="about-me">
      <h1 className="about-me__title">Hey, i'm Fabricio</h1>
      <span className="about-me__desc">
        I'm a fullstack web engineer living in São Paulo/Brazil. My job is to develop
        scalable and well written interfaces/services.
      </span>
    </div>
  )
}

const AboutMeOverlay = () => {
  return (
    <div className="about-me__overlay">
      <Link to="/about" className="about-me__overlay-call">
        Learn more
        <i className="material-icons">person_pin</i>
      </Link>
    </div>
  )
}

export const AboutMe = {
  base: AboutMeBase,
  overlay: AboutMeOverlay,
}
