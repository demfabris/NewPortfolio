import React from 'react'

const ToyfyBase = () => {
  return (
    <div className="toyfy">
      <h1 className="toyfy__title">Toyfy</h1>
      <span className="toyfy__desc">Toyfy is a e-commerce website, WIP</span>
    </div>
  )
}

const ToyfyOverlay = () => {
  return <div className="toyfy__overlay"></div>
}

export const Toyfy = {
  base: ToyfyBase,
  overlay: ToyfyOverlay,
}
