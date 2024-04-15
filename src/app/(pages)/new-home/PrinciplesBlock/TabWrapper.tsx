import React, { FC, PropsWithChildren } from 'react'

export const TabWrapper: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="grid sm:gap-4 sm:grid-cols-1 md:gap-8 md:grid-cols-2 lg:gap-12 mt-4">
      {children}
    </div>
  )
}
