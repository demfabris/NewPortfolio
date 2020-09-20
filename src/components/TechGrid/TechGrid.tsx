import React, { useEffect, useState } from 'react'
import { MiniTile } from 'components'
import { techArray } from 'content'
import { Query } from 'types/techs'

type TechGridProps = {
  query: Query
}

const TechGrid = ({ query }: TechGridProps) => {
  const [techs, setTechs] = useState(techArray)

  useEffect(() => {
    setTechs(() => techArray.filter(({ category }) => category.includes(query)))
  }, [query])

  return (
    <div className="tech-grid">
      {techs.map(({ imgSrc, bgColor, objectFit }, idx) => (
        <MiniTile
          key={idx}
          imgSrc={imgSrc}
          bgColor={bgColor}
          objectFit={objectFit}
        />
      ))}
    </div>
  )
}

export default TechGrid
