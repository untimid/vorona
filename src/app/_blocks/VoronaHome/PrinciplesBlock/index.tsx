'use client'
import React, { FC, useState } from 'react'
import { Accordion, AccordionItem, Selection } from '@nextui-org/react'

import { BlockWrapper } from '../components'
import { Collaboration, CollaborationProps } from './Collaboration'
import { Pricing, PricingProps } from './Pricing'
import { Process, ProcessProps } from './Process'

type PrincipleBlockType = {
  title: string
}

export interface PrinciplesBlockProps {
  header: {
    firstPart: string
    secondPart: string
  }
  description: string
  collaboration: PrincipleBlockType & CollaborationProps
  pricing: PrincipleBlockType & PricingProps
  process: PrincipleBlockType & ProcessProps
}

export const PrinciplesBlock: FC<PrinciplesBlockProps> = ({
  header: { firstPart, secondPart },
  description,
  collaboration,
  pricing,
  process,
}) => {
  const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set(['1']))

  //TODO: open accordion items while sroll automatically
  return (
    <BlockWrapper>
      <h2 className="text-5xl font-extrabold mb-4 ">
        {firstPart}{' '}
        <b className="text-transparent bg-clip-text bg-gradient-to-br from-yellow-500 to-purple-600">
          {secondPart}
        </b>
      </h2>
      <p>{description}</p>
      <Accordion
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
        className="border-t-solid border-t-1 border-b-solid border-b-1 mt-4"
      >
        <AccordionItem
          key="1"
          aria-label="Pricing"
          title={<h3 className="uppercase font-bold">{pricing.title}</h3>}
        >
          <Pricing principles={pricing.principles} videoSrc={pricing.videoSrc} />
        </AccordionItem>
        <AccordionItem
          key="2"
          aria-label="Process"
          title={<h3 className="uppercase font-bold">{process.title}</h3>}
        >
          <Process
            steps={process.steps}
            description={process.description}
            videoSrc={process.videoSrc}
          />
        </AccordionItem>
        <AccordionItem
          key="3"
          aria-label="Collaboration"
          title={<h3 className="uppercase font-bold">{collaboration.title}</h3>}
        >
          <Collaboration
            description={collaboration.description}
            principles={collaboration.principles}
            videoSrc={collaboration.videoSrc}
          />
        </AccordionItem>
      </Accordion>
    </BlockWrapper>
  )
}
