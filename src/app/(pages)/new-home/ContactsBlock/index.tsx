'use client'
import React from 'react'

import { BlockWrapper } from '../components'

export const ContactsBlock = () => {
  return (
    <BlockWrapper>
      <h2 className="text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-green-600">
        Contacts
      </h2>
      <p className="mb-4">
        +54 11 26748618
        <br />
        hi@qbesk.com
        <br />
        Qbesk Company, USA, Delaware,
        <br />
        Lenin ave,1 / 12354321
      </p>
      <h3 className="uppercase font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-amber-500 to-pink-500">
        Text us now, and let’s start working!
      </h3>
      <p className="italic">
        We operate entirely in a remote format, with our team members located all around the world.
        Our back office is in Delaware, USA, and we operate within the legal framework of the United
        States
      </p>
    </BlockWrapper>
  )
}
