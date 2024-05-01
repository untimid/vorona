import React from 'react'

type Props = {
  invert?: boolean
  className?: string
  children?: React.ReactNode
  id?: string
}

export const BackgroundColor: React.FC<Props> = props => {
  const { id, className, children, invert } = props

  return <div id={id}>{children}</div>
}
