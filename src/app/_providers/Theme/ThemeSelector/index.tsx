'use client'

import React, { FC } from 'react'
import { Switch } from '@nextui-org/react'
import { useTheme } from 'next-themes'

import { MoonIcon } from './MoonIcon'
import { SunIcon } from './SunIcon'

export const ThemeSelector: FC = () => {
  const { theme, setTheme } = useTheme()
  const handleChange = (isChecked: Boolean) => {
    isChecked ? setTheme('light') : setTheme('dark')
  }

  return (
    <Switch
      checked={theme === 'light' ? true : false}
      onValueChange={val => handleChange(val)}
      size="lg"
      color="secondary"
      thumbIcon={({ isSelected, className }) =>
        isSelected ? <SunIcon className={className} /> : <MoonIcon className={className} />
      }
    />
  )
}
