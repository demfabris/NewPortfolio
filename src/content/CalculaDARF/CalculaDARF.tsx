import React from 'react'

const CalculaDARFBase = () => {
  return (
    <div className="calcula-darf">
      <h1 className="calcula-darf__title">CalculaDARF.com</h1>
      <span className="calcula-darf__desc">
        Brokerage receipts parser and financial analysis SaaS.
      </span>
    </div>
  )
}

const CalculaDARFOverlay = () => {
  return (
    <div className="calcula-darf__overlay">
      <a
        className="calcula-darf__overlay-link"
        href="https://calculadarf.com"
        target="_blank"
      ></a>
    </div>
  )
}

export const CalculaDARF = {
  base: CalculaDARFBase,
  overlay: CalculaDARFOverlay,
}
