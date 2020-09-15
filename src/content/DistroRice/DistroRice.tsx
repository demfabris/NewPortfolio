import React from 'react'

const DistroRiceBase = () => {
  return (
    <div className="distrorice">
      <h1 className="distrorice__title">
        Distro
        <b>R</b>
        <b>I</b>
        <b>C</b>
        <b>E</b>
      </h1>
      <span className="distrorice__desc">
        WebApp to live test various Linux Window Managers using native JSLinux. WIP
      </span>
    </div>
  )
}

const DistroRiceOverlay = () => {
  return (
    <div className="distrorice__overlay">
      <a
        className="distrorice__overlay-link"
        href="https://dc.fabricio7p.com.br"
        target="_blank"
      ></a>
    </div>
  )
}

export const DistroRice = {
  base: DistroRiceBase,
  overlay: DistroRiceOverlay,
}
