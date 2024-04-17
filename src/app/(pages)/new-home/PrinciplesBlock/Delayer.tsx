import React, { FC, PropsWithChildren, useEffect, useState } from 'react'
interface DelayerProps {
  delay: number
}

export const Delayer: FC<PropsWithChildren<DelayerProps>> = ({ children, delay }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay)
    return () => clearTimeout(timer)
  }, [setIsVisible, delay])

  return (
    <div className={`${isVisible ? 'opacity-100' : 'opacity-0'} transition delay-200`}>
      {children}
    </div>
  )
}
