import React from 'react'

const GithubBase = () => {
  return (
    <div className="github">
      <div className="github__underlay"></div>
      <h1 className="github__title">Find me on</h1>
      <a
        className="github__link"
        href="https://github.com/fabricio7p"
        target="_blank"
      >
        <b>GitHub</b>/fabricio7p
      </a>
    </div>
  )
}

export const Github = {
  base: GithubBase,
}
