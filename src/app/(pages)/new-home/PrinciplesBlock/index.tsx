'use client'
import React, { useState } from 'react'
import { BanknotesIcon, ClockIcon } from '@heroicons/react/24/outline'
import { Accordion, AccordionItem, Selection } from '@nextui-org/react'

import { BlockWrapper } from '../components'
import { Pricing } from './Pricing'

const PRICING_PRINCIPLES = [
  {
    icon: ClockIcon,
    title: 'We operate on an hourly rate model',
    description:
      "We'll allocate our team's time as needed for your project. Whether it's coordination or full-time dedication, we can accommodate your requirements",
  },
  {
    icon: BanknotesIcon,
    title: 'Hourly rates vary based on the specialist and tasks',
    description:
      'The project cost depends on task complexity; for larger tasks and full-time commitment, costs are discussed separately',
  },
]

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
      <Accordion
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
        className="border-t-solid border-t-1 border-b-solid border-b-1 mt-4"
      >
        <AccordionItem
          key="1"
          aria-label="Pricing"
          title={<h3 className="uppercase font-bold">Pricing</h3>}
        >
          <Pricing principles={PRICING_PRINCIPLES} />
        </AccordionItem>
        <AccordionItem
          key="2"
          aria-label="Process"
          title={<h3 className="uppercase font-bold">Process</h3>}
        >
          {defaultContent}
        </AccordionItem>
        <AccordionItem
          key="3"
          aria-label="Collaboration"
          title={<h3 className="uppercase font-bold">Collaboration</h3>}
        >
          {defaultContent}
        </AccordionItem>
      </Accordion>
    </BlockWrapper>
  )
}
