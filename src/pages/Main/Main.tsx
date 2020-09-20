import React from 'react'
import { Tile, Row, Column } from 'components'
import {
  AboutMe,
  Github,
  Portfolio,
  Ikebana,
  DistroRice,
  Toyfy,
  CatalinaFrames,
  CalculaDARF,
  LinkedIn,
} from 'content'

const Main: React.FC = () => {
  return (
    <main className="main">
      <Row>
        <Tile base={<AboutMe.base />} overlay={<AboutMe.overlay />} flex="1" />
        <Tile base={<Github.base />} overlay={<Github.overlay />} flex="0.495" />
      </Row>
      <Row>
        <Tile
          base={<Portfolio.base />}
          overlay={<Portfolio.overlay />}
          flex="0.4975"
        />
        <Tile base={<Ikebana.base />} overlay={<Ikebana.overlay />} flex="1" />
      </Row>
      <Row>
        <Tile base={<Toyfy.base />} overlay={<Toyfy.overlay />} flex="0.35" />
        <Tile
          base={<DistroRice.base />}
          overlay={<DistroRice.overlay />}
          flex="0.35"
        />
        <Tile
          base={<CatalinaFrames.base />}
          overlay={<CatalinaFrames.overlay />}
          flex="0.35"
        />
      </Row>
      <Row size="28em">
        <Tile
          base={<CalculaDARF.base />}
          overlay={<CalculaDARF.overlay />}
          flex="1"
        />
        <Column flex="0.505">
          <Tile base={<LinkedIn.base />} flex="0.5" border="none" />
        </Column>
      </Row>
    </main>
  )
}

export default Main
