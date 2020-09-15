import React from 'react'

const CatalinaFramesBase = () => {
  return (
    <div className="catalina-frames">
      <h1 className="catalina-frames__title">React Catalina Frames</h1>
      <span className="catalina-frames__desc">
        A few MacOS Catalina SCSS window boilerplates, WIP
      </span>
    </div>
  )
}

const CatalinaFramesOverlay = () => {
  return (
    <div className="catalina-frames__overlay">
      <a
        className="catalina-frames__overlay-link"
        href="https://old.fabricio7p.com.br"
        target="_blank"
      ></a>
    </div>
  )
}

export const CatalinaFrames = {
  base: CatalinaFramesBase,
  overlay: CatalinaFramesOverlay,
}
