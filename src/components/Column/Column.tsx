import React from 'react'

type ColumnProps = {
  children: React.ReactNode
  flex: string
}

const Column: React.FC<ColumnProps> = ({ children, flex }) => {
  return (
    <div style={{ flex }} className="column">
      {children}
    </div>
  )
}

export default Column
