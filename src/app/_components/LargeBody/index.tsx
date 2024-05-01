import React from 'react'

export const LargeBody: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <p className="vrn-p">{children}</p>
}
