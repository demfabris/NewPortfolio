import React from 'react'

type RowProps = {
  children: React.ReactNode
  size?: string
}

const Row: React.FC<RowProps> = ({ children, size }) => {
  return (
    <div style={{ height: size }} className="row">
      {children}
    </div>
  )
}

export default Row
