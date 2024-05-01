import React, { FC, PropsWithChildren } from 'react'

export const TabWrapper: FC<PropsWithChildren> = ({ children }) => {
  return <div className="grid sm:grid-cols-1 md:grid-cols-2 vrn-gap-m">{children}</div>
}
