import React from 'react'

const PortfolioBase = () => {
  return <div className="portfolio"></div>
}

const PortfolioOverlay = () => {
  return (
    <a className="portfolio__overlay">
      <h1 className="portfolio__overlay-title">Portfolio</h1>
      <span>This website is open source!</span>
    </a>
  )
}

export const Portfolio = {
  base: PortfolioBase,
  overlay: PortfolioOverlay,
}
