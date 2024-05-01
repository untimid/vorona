'use client'

import React, { FC, useEffect, useState } from 'react'
import { Switch } from '@nextui-org/react'
import { useTheme } from 'next-themes'

import { MoonIcon } from './MoonIcon'
import { SunIcon } from './SunIcon'

export const ThemeSelector: FC = () => {
  const { theme, setTheme } = useTheme()
  const [isLight, setIsLight] = useState(true)

  useEffect(() => {
    theme === 'light' ? setIsLight(true) : setIsLight(false)
  }, [theme])

  const handleChange = (isChecked: Boolean) => {
    isChecked ? setTheme('light') : setTheme('dark')
  }

  return (
    <Switch
      isSelected={isLight}
      onValueChange={val => handleChange(val)}
      size="lg"
      color="secondary"
      thumbIcon={({ isSelected, className }) =>
        isSelected ? <SunIcon className={className} /> : <MoonIcon className={className} />
      }
    />
  )
}
