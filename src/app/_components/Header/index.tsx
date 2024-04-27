{
  /* eslint-disable @next/next/no-img-element */
}

import React from 'react'
import Link from 'next/link'

import type { Header } from '../../../payload/payload-types'
import { fetchHeader } from '../../_api/fetchGlobals'
import { BlockWrapper } from '../../_blocks/VoronaHome/components'
import { HeaderNav } from './Nav'

export async function Header() {
  let header: Header | null = null

  try {
    header = await fetchHeader()
  } catch (error) {
    // When deploying this template on Payload Cloud, this page needs to build before the APIs are live
    // So swallow the error here and simply render the header without nav items if one occurs
    // in production you may want to redirect to a 404  page or at least log the error somewhere
    // console.error(error)
  }

  return (
    <>
      <header className="w-full">
        <BlockWrapper>
          <div className="flex justify-between">
            <Link href="/" className="">
              {/* Cannot use the `<picture>` element here with `srcSet`
              This is because the theme is able to be overridden by the user
              And so `@media (prefers-color-scheme: dark)` will not work
              Instead, we just use CSS to invert the color via `filter: invert(1)` based on `[data-theme="dark"]`
            */}
              {/* <img
              className={classes.logo}
              alt="Payload Logo"
              src="https://raw.githubusercontent.com/payloadcms/payload/main/packages/payload/src/admin/assets/images/payload-logo-light.svg"
            /> */}
              <span className="text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-br from-yellow-500 to-purple-600">
                {'VORONA :>'}
              </span>
            </Link>
            <HeaderNav header={header} />
          </div>
        </BlockWrapper>
      </header>
    </>
  )
}
