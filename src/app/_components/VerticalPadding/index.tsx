import React from 'react'

export type VerticalPaddingOptions = 'large' | 'medium' | 'none'

type Props = {
  top?: VerticalPaddingOptions
  bottom?: VerticalPaddingOptions
  children: React.ReactNode
  className?: string
}

export const VerticalPadding: React.FC<Props> = ({
  top = 'medium',
  bottom = 'medium',
  className,
  children,
}) => {
  return <div className={[className].filter(Boolean).join(' ')}>{children}</div>
}
