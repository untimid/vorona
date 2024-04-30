'use client'
import React, { FC, useState } from 'react'
import { Accordion, AccordionItem, Selection } from '@nextui-org/react'

import type { Page } from '../../../payload/payload-types'
import RichText from '../../_components/RichText'
import { Collaboration } from './Collaboration'
import { Pricing } from './Pricing'
import { Process } from './Process'

export type PrinciplesProps = Extract<Page['layout'][0], { blockType: 'principles' }>

export const Principles: FC<PrinciplesProps> = ({
  description,
  pricingPrinciples,
  processPrinciples,
  collaborationPrinciples,
}) => {
  const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set(['1']))

  //TODO: open accordion items while sroll automatically
  return (
    <>
      {description && <RichText content={description} />}
      <Accordion
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
        className="border-t-solid border-t-1 border-b-solid border-b-1 mt-4"
      >
        <AccordionItem
          key="1"
          aria-label="Pricing"
          title={<h3 className="uppercase font-bold">Ценообразование</h3>}
        >
          <Pricing
            principles={pricingPrinciples.principles}
            videoSrc={pricingPrinciples.videoSrc}
          />
        </AccordionItem>
        <AccordionItem
          key="2"
          aria-label="Process"
          title={<h3 className="uppercase font-bold">Процесс работы</h3>}
        >
          <Process
            steps={processPrinciples.steps}
            description={processPrinciples.description}
            videoSrc={processPrinciples.videoSrc}
          />
        </AccordionItem>
        <AccordionItem
          key="3"
          aria-label="Collaboration"
          title={<h3 className="uppercase font-bold">Варианты работы</h3>}
        >
          <Collaboration
            description={collaborationPrinciples.description}
            principles={collaborationPrinciples.principles}
            videoSrc={collaborationPrinciples.videoSrc}
          />
        </AccordionItem>
      </Accordion>
    </>
  )
}
