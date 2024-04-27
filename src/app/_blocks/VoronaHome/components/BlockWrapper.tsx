import React, { FC, PropsWithChildren } from 'react'

interface BlockWrapperProps extends PropsWithChildren {
  className?: string
}

export const BlockWrapper: FC<BlockWrapperProps> = ({ children, className }) => {
  return (
    <div className={['p-4 md:p-8 lg:px-16 lg:py-8 flex-col', className].filter(Boolean).join(' ')}>
      <div className="w-full max-w-[1420px] lg:mx-auto">{children}</div>
    </div>
  )
}
