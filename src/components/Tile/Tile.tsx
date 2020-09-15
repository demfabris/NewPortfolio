import React from 'react'

type TileProps = {
  base: React.ReactNode
  overlay?: React.ReactNode
  flex: string
  border?: 'none'
}

const Tile: React.FC<TileProps> = ({ flex, overlay, base, border }) => {
  return (
    <div style={{ flex, border }} className="tile">
      <div className="tile__content">{base}</div>
      {overlay && <div className="tile__overlay">{overlay}</div>}
    </div>
  )
}

export default Tile
