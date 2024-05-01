'use client'

import React, { FC } from 'react'
import { Link } from '@nextui-org/react'

import { Footer as FooterType } from '../../../payload/payload-types'
import { ThemeSelector } from '../../_providers/Theme/ThemeSelector'
import { getLinkProps } from '../../_utilities'

export const FooterNav: FC<{ navItems: FooterType['navItems'] }> = ({ navItems = [] }) => {
  return (
    <nav className="flex flex-col gap-m sm:flex-row">
      <ThemeSelector />
      {navItems.map(({ link: { type, url, newTab, reference, label } }, i) => {
        return (
          <Link key={i} {...getLinkProps({ type, url, newTab, reference })}>
            {label}
          </Link>
        )
      })}
      {/* <UILink href="/admin" color="foreground">
              Admin
            </UILink> */}
    </nav>
  )
}
