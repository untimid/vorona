'use client'
import React, { FC } from 'react'

import { BlockWrapper } from '../../_components/BlockWrapper'

export interface ContactsBlockProps {
  header: string
  phone: string
  email: string
  address1: string
  address2: string
  callToAction: string
  disclamer: string
}

export const ContactsBlock: FC<ContactsBlockProps> = ({
  header,
  phone,
  email,
  address1,
  address2,
  callToAction,
  disclamer,
}) => {
  return (
    <BlockWrapper>
      <h2 className="text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-green-600">
        {header}
      </h2>
      <p className="mb-4">
        {phone}
        <br />
        {email}
        <br />
        {address1}
        <br />
        {address2}
      </p>
      <h3 className="uppercase font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-amber-500 to-pink-500">
        {callToAction}
      </h3>
      <p className="italic">{disclamer}</p>
    </BlockWrapper>
  )
}
