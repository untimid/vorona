import React from 'react'
import { Metadata } from 'next'
import { IBM_Plex_Sans, Spectral, Unbounded } from 'next/font/google'

import { AdminBar } from './_components/AdminBar'
import { Footer } from './_components/Footer'
import { Header } from './_components/Header'
import { Providers } from './_providers'
import { mergeOpenGraph } from './_utilities/mergeOpenGraph'

import './output.css'

const unbounded = Unbounded({
  subsets: ['latin', 'cyrillic'],
  weight: ['600'],
  variable: '--font-unbounded',
  preload: true,
})

const spectral = Spectral({
  subsets: ['latin', 'cyrillic'],
  weight: ['300'],
  variable: '--font-spectral',
  preload: true,
})

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin', 'cyrillic'],
  weight: ['400'],
  variable: '--font-ibm-plex-sans',
  preload: true,
})

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" suppressHydrationWarning className="min-h-screen antialiased">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body
        className={`min-h-screen bg-color-background ${unbounded.variable} ${spectral.variable} ${ibmPlexSans.variable}`}
      >
        <Providers>
          <AdminBar />
          {/* @ts-expect-error */}
          <Header />
          {children}
          {/* @ts-expect-error */}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SERVER_URL || 'https://payloadcms.com'),
  twitter: {
    card: 'summary_large_image',
    creator: '@payloadcms',
  },
  openGraph: mergeOpenGraph(),
}
