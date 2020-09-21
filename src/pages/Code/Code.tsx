import React, { useState } from 'react'
import { TechGrid } from 'components'
import { Query } from 'types/techs'
import { techQueries } from 'content/Techs'

const Code: React.FC = () => {
  const [query, setQuery] = useState<Query>('all')

  return (
    <>
      <div className="code">
        <ul className="code__menu">
          {techQueries.map((entry, key) => (
            <li key={key} className="code__menu-option">
              <button
                onClick={() => setQuery(entry)}
                className="code__menu-btn"
              >
                {entry}
              </button>
            </li>
          ))}
        </ul>
        <div className="code__techs">
          <TechGrid query={query} />
        </div>
      </div>
      <div className="code__process">
        <hr className="separator" />
        <h1 className="code__process-title">code process</h1>
        <div className="code__process-sectionwrap">
          <span className="code__process-quote">
            "Bad code is code you wrote 6 months ago..."
          </span>
          <p className="code__process-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et
            tincidunt dui. Sed tincidunt leo auctor blandit pellentesque. Sed
            eget consequat est. In nec enim erat. Nunc porttitor enim eu finibus
            dignissim. Vivamus venenatis enim purus, quis dictum mi facilisis
            ut.
          </p>
        </div>
      </div>
    </>
  )
}

export default Code
