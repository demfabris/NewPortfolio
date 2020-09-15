import React from 'react'

const IkebanaBase = () => {
  return (
    <div className="ikebana">
      <h1 className="ikebana__title">Ikebana Sanguetsu Platform</h1>
      <span className="ikebana__desc">
        Fullstack web application designed to host and share flower arrangements.
      </span>
    </div>
  )
}

const IkebanaOverlay = () => {
  return (
    <div className="ikebana__overlay">
      <a
        href="https://ikebana.fabricio7p.com.br"
        className="ikebana__overlay-link"
        target="_blank"
      ></a>
    </div>
  )
}

export const Ikebana = {
  base: IkebanaBase,
  overlay: IkebanaOverlay,
}
