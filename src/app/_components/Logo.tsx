'use client'
import React, { FC, useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

import type { Footer, Header } from '../../payload/payload-types'
import { Media } from './Media'

interface LogoProps {
  logoLight: Header['logoLight'] | Footer['logoLight']
  logoDark: Header['logoDark'] | Footer['logoDark']
  className?: string
}

export const Logo: FC<LogoProps> = ({ logoLight, logoDark, className = '' }) => {
  const { theme } = useTheme()
  const [isLight, setIsLight] = useState(true)
  useEffect(() => {
    theme === 'light' ? setIsLight(true) : setIsLight(false)
  }, [theme])

  return <Media resource={isLight ? logoLight : logoDark} className={className} />
}
