import React from 'react'

interface MiniTileProps {
  imgSrc: string
  bgColor?: string
  objectFit?: 'cover' | 'contain'
}

const MiniTile = ({ imgSrc, bgColor, objectFit }: MiniTileProps) => {
  return (
    <div className="mini-tile">
      <img
        className="mini-tile__img"
        src={imgSrc}
        style={{ backgroundColor: bgColor, objectFit }}
        alt="tech"
      />
    </div>
  )
}

export default MiniTile
