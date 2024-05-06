'use client'
import React, { FC, useState } from 'react'
import { Accordion, AccordionItem, Selection } from '@nextui-org/react'

import type { Page } from '../../../payload/payload-types'
import RichText from '../../_components/RichText'
import { CommonBlockProps } from '../commonTypes'
import { Collaboration } from './Collaboration'
import { Pricing } from './Pricing'
import { Process } from './Process'

export type PrinciplesProps = Extract<Page['layout'][0], { blockType: 'principles' }> &
  CommonBlockProps

export const Principles: FC<PrinciplesProps> = ({
  description,
  pricing,
  processPrinciples,
  collab,
  id,
}) => {
  const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set(['1']))

  //TODO: open accordion items while sroll automatically
  return (
    <div id={`block-${id}`}>
      {description && <RichText content={description} />}
      <Accordion
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
        className="border-t-solid border-t-1 border-b-solid border-b-1"
      >
        <AccordionItem
          key="1"
          aria-label="Pricing"
          title={<h3 className="vrn-h3 uppercase">Ценообразование</h3>}
        >
          <Pricing principles={pricing.principles} videoSrc={pricing.videoSrc} />
        </AccordionItem>
        <AccordionItem
          key="2"
          aria-label="Process"
          title={<h3 className="vrn-h3 uppercase">Процесс работы</h3>}
        >
          <Process
            // steps={processPrinciples.steps}
            steps={null}
            description={processPrinciples.description}
            videoSrc={processPrinciples.videoSrc}
          />
        </AccordionItem>
        <AccordionItem
          key="3"
          aria-label="Collaboration"
          title={<h3 className="vrn-h3 uppercase">Варианты работы</h3>}
        >
          <Collaboration
            description={collab.description}
            principles={collab.principles}
            videoSrc={collab.videoSrc}
          />
        </AccordionItem>
      </Accordion>
    </div>
  )
}
