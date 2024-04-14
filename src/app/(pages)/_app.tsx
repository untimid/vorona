import { NextUIProvider } from '@nextui-org/react'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  return (
    <NextUIProvider navigate={router.push}>
      <Component {...pageProps} />
    </NextUIProvider>
  )
}

export default MyApp
