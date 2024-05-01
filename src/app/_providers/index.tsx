'use client'
import React from 'react'
import { NextUIProvider } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

import { AuthProvider } from '../_providers/Auth'

export const Providers: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  const router = useRouter()

  return (
    <NextUIProvider navigate={router.push}>
      <NextThemesProvider attribute="class" defaultTheme="light">
        <AuthProvider>{children}</AuthProvider>
      </NextThemesProvider>
    </NextUIProvider>
  )
}
