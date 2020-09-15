import React from 'react'

const PortfolioBase = () => {
  return (
    <div className="portfolio">
      <h1 className="portfolio__title">Portfolio</h1>
      <span className="portfolio__desc">This website is open source!</span>
    </div>
  )
}

const PortfolioOverlay = () => {
  return (
    <div className="portfolio__overlay">
      <a
        className="portfolio__overlay-link"
        href="https://github.com/fabricio7p/NewPortfolio"
      ></a>
    </div>
  )
}

export const Portfolio = {
  base: PortfolioBase,
  overlay: PortfolioOverlay,
}
