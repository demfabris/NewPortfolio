import React, { useState } from 'react'
import { TechGrid } from 'components'
import { Query } from 'types/techs'

const Code: React.FC = () => {
  const [query, setQuery] = useState<Query>('all')

  return (
    <div className="code">
      <ul className="code__menu">
        <li className="code__menu-option">
          <button onClick={() => setQuery('all')} className="code__menu-btn">
            all
          </button>
        </li>
        <li className="code__menu-option">
          <button
            onClick={() => setQuery('frontend')}
            className="code__menu-btn"
          >
            frontend
          </button>
        </li>
        <li className="code__menu-option">
          <button
            onClick={() => setQuery('backend')}
            className="code__menu-btn"
          >
            backend
          </button>
        </li>
        <li className="code__menu-option">
          <button
            onClick={() => setQuery('frameworks')}
            className="code__menu-btn"
          >
            frameworks
          </button>
        </li>
        <li className="code__menu-option">
          <button
            onClick={() => setQuery('web services')}
            className="code__menu-btn"
          >
            web services
          </button>
        </li>
        <li className="code__menu-option">
          <button
            onClick={() => setQuery('tooling')}
            className="code__menu-btn"
          >
            tooling
          </button>
        </li>
        <li className="code__menu-option">
          <button
            onClick={() => setQuery('databases')}
            className="code__menu-btn"
          >
            databases
          </button>
        </li>
        <li className="code__menu-option">
          <button
            onClick={() => setQuery('languages')}
            className="code__menu-btn"
          >
            languages
          </button>
        </li>
      </ul>
      <div className="code__techs">
        <TechGrid query={query} />
      </div>
    </div>
  )
}

export default Code
