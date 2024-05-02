'use client'
import React, { FC } from 'react'

import type { Page } from '../../../payload/payload-types'
import RichText from '../../_components/RichText'
import { CommonBlockProps } from '../commonTypes'
import { AudienceCard } from './AudienceCard'

export type AudienceProps = Extract<Page['layout'][0], { blockType: 'audience' }> & CommonBlockProps

export const Audience: FC<AudienceProps> = ({ description, audienceItems, id }) => {
  return (
    <div id={`block-${id}`}>
      <RichText content={description} />
      <div className="grid sm:grid-cols-1 md:grid-cols-2 vrn-gap-l">
        {audienceItems?.map(({ title, description, image }, i) => (
          <AudienceCard
            key={`${title}-${i}`}
            title={title}
            description={description}
            image={image}
          />
        ))}
      </div>
    </div>
  )
}
