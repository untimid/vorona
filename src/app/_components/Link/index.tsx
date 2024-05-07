'use client'
import React from 'react'
// import Link from 'next/link'
import { Button, Link } from '@nextui-org/react'

import { Page } from '../../../payload/payload-types'
import { Props as OldButtonProps } from '../Button'

type CMSLinkType = {
  type?: 'custom' | 'reference'
  url?: string
  newTab?: boolean
  reference?: {
    value: string | Page
    relationTo: 'pages'
  }
  label?: string
  appearance?: OldButtonProps['appearance']
  children?: React.ReactNode
  className?: string
}

export const CMSLink: React.FC<CMSLinkType> = ({
  type,
  url,
  newTab,
  reference,
  label,
  appearance,
  children,
  className,
}) => {
  const href =
    type === 'reference' && typeof reference?.value === 'object' && reference.value.slug
      ? `${reference?.relationTo !== 'pages' ? `/${reference?.relationTo}` : ''}/${
          reference.value.slug
        }`
      : url

  if (!href) return null

  const newTabProps = newTab ? { target: '_blank', rel: 'noopener noreferrer' } : {}
  if (!appearance) {
    if (href || url) {
      return (
        <Link {...newTabProps} href={href || url} className={className}>
          {label && label}
          {children && children}
        </Link>
      )
    }
  }

  return (
    <Button
      className={className}
      as={Link}
      color="primary"
      size="lg"
      {...newTabProps}
      href={href}
      variant={appearance === 'primary' || appearance === 'default' ? 'solid' : 'bordered'}
    >
      {label}
    </Button>
  )
}
