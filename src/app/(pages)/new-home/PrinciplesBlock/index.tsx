'use client'
import React, { Key, useState } from 'react'
import { Accordion, AccordionItem, Selection } from '@nextui-org/react'

import { BlockWrapper } from '../components'
import { Pricing } from './Pricing'

export const PrinciplesBlock = () => {
  const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set(['1']))

  const defaultContent =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

  return (
    <BlockWrapper>
      <h2 className="text-5xl font-extrabold mb-4 ">
        Working{' '}
        <b className="text-transparent bg-clip-text bg-gradient-to-br from-yellow-500 to-purple-600">
          principles
        </b>
      </h2>
      <p>A glimpse into how we operate: the process, pricing, and collaboration options</p>
      <Accordion selectedKeys={selectedKeys} onSelectionChange={setSelectedKeys}>
        <AccordionItem key="1" aria-label="Accordion 1" title="Accordion 1">
          <Pricing />
        </AccordionItem>
        <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
          {defaultContent}
        </AccordionItem>
        <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
          {defaultContent}
        </AccordionItem>
      </Accordion>
    </BlockWrapper>
  )
}
