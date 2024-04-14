'use client'
import React from 'react'
import { NextUIProvider } from '@nextui-org/react'
import { useRouter } from 'next/navigation'

import { AuthProvider } from '../_providers/Auth'
import { ThemeProvider } from './Theme'

export const Providers: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  const router = useRouter()
  return (
    <ThemeProvider>
      <NextUIProvider navigate={router.push}>
        <AuthProvider>{children}</AuthProvider>
      </NextUIProvider>
    </ThemeProvider>
  )
}
