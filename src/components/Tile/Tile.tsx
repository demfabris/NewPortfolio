import React from 'react'

type TileProps = {
  base: React.ReactNode
  overlay?: React.ReactNode
  flex: '1' | '0.65' | '0.35'
}

const Tile: React.FC<TileProps> = ({ flex, overlay, base }) => {
  return (
    <div style={{ flex }} className="tile">
      <div className="tile__content">{base}</div>
      {overlay && <div className="tile__overlay">{overlay}</div>}
    </div>
  )
}

export default Tile
