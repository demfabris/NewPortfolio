import React from 'react'
import { Tile, Row } from 'components'
import { AboutMe, Github, Portfolio } from 'content'

const Main: React.FC = () => {
  return (
    <main className="main">
      <Row>
        <Tile base={<AboutMe.base />} overlay={<AboutMe.overlay />} flex="0.65" />
        <Tile base={<Github.base />} flex="0.35" />
      </Row>
      <Row>
        <Tile
          base={<Portfolio.base />}
          overlay={<Portfolio.overlay />}
          flex="0.35"
        />
      </Row>
    </main>
  )
}

export default Main
