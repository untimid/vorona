'use client'
import React, { FC } from 'react'

import type { Page } from '../../../payload/payload-types'
import { BlockWrapper } from '../../_components/BlockWrapper'
import RichText from '../../_components/RichText'
import { AudienceCard } from './AudienceCard'

export type AudienceProps = Extract<Page['layout'][0], { blockType: 'audience' }>

export const Audience: FC<AudienceProps> = ({ description, audienceItems }) => {
  return (
    <>
      <RichText content={description} />
      <div className="grid sm:grid-cols-1 md:grid-cols-2 vrn-gap-l">
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
    </>
  )
}
