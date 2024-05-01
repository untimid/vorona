import React from 'react'
import Link from 'next/link'

import type { Footer as FooterType } from '../../../payload/payload-types'
import { fetchFooter, fetchGlobals } from '../../_api/fetchGlobals'
import { BlockWrapper } from '../../_components/BlockWrapper'
import { FooterNav } from './FooterNav'

export async function Footer() {
  let footer: FooterType | null = null

  try {
    footer = await fetchFooter()
  } catch (error) {
    // When deploying this template on Payload Cloud, this page needs to build before the APIs are live
    // So swallow the error here and simply render the footer without nav items if one occurs
    // in production you may want to redirect to a 404  page or at least log the error somewhere
    // console.error(error)
  }

  const navItems = footer?.navItems || []

  return (
    <footer className="w-full py-8 sm:p-0">
      <BlockWrapper>
        <div className="flex flex-col sm:flex-row sm:justify-between vrn-gap-m">
          <Link href="/">
            <span className="text-4xl">{'VORONA :>'}</span>
          </Link>
          <FooterNav navItems={navItems} />
        </div>
      </BlockWrapper>
    </footer>
  )
}
