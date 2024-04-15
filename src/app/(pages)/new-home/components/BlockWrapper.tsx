import React, { FC, PropsWithChildren } from 'react'

export const BlockWrapper: FC<PropsWithChildren> = ({ children }) => {
  return <div className="p-4 md:p-8 lg:px-16 lg:py-8 flex-col">{children}</div>
}
