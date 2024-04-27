'use client'

import React from 'react'

// import Link from 'next/link'
import { Header as HeaderType } from '../../../../payload/payload-types'
import { useAuth } from '../../../_providers/Auth'
import { CMSLink } from '../../Link'

export const HeaderNav: React.FC<{ header: HeaderType }> = ({ header }) => {
  const navItems = header?.navItems || []
  const { user } = useAuth()

  return (
    <nav
      className={[
        'flex items-center flex-wrap opacity-100 transition-all duration-100 ease-linear gap-3',
        // fade the nav in on user load to avoid flash of content and layout shift
        // Vercel also does this in their own website header, see https://vercel.com
        user === undefined && 'hidden opacity-0',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {navItems.map(({ link }, i) => {
        return <CMSLink key={i} {...link} appearance="none" />
      })}
      {/* Disable account link due to it is not needed now */}
      {/* {user && <Link href="/account">Account</Link>} */}
      {/*
        // Uncomment this code if you want to add a login link to the header
        {!user && (
          <React.Fragment>
            <Link href="/login">Login</Link>
            <Link href="/create-account">Create Account</Link>
          </React.Fragment>
        )}
      */}
    </nav>
  )
}
