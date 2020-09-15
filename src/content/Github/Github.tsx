import React from 'react'

const GithubBase = () => {
  return (
    <div className="github">
      <h1 className="github__title">Interested in my work?</h1>
      <span className="github__desc">Find me on GitHub.</span>
    </div>
  )
}

const GithubOverlay = () => {
  return (
    <div className="github__overlay">
      <a className="github__overlay-link" href="https://github.com/fabricio7p">
        github.com/<b>fabricio7p</b>
      </a>
    </div>
  )
}

export const Github = {
  base: GithubBase,
  overlay: GithubOverlay,
}
