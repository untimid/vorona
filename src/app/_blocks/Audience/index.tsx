'use client'
import React, { FC } from 'react'

import type { Page } from '../../../payload/payload-types'
import { BlockWrapper } from '../../_components/BlockWrapper'
import RichText from '../../_components/RichText'
import { AudienceCard } from './AudienceCard'

export type AudienceProps = Extract<Page['layout'][0], { blockType: 'audience' }>

export const Audience: FC<AudienceProps> = ({ description, audienceItems }) => {
  return (
    <BlockWrapper>
      <RichText content={description} />
      <div className="grid sm:gap-4 sm:grid-cols-1 md:gap-8 md:grid-cols-2 lg:gap-12 mt-4">
        {audienceItems?.map(({ title, description, benefitItems, image }, i) => (
          <AudienceCard
            key={`${title}-${i}`}
            title={title}
            description={description}
            benefitItems={benefitItems}
            image={image}
          />
        ))}
      </div>
    </BlockWrapper>
  )
}
