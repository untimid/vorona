import React, { FC } from 'react'

import { YouTubePlayer } from '../../_components/YouTubePlayer'
import type { PrinciplesProps } from './'
import { PricingPrinciple } from './PricingPrinciple'
import { TabWrapper } from './TabWrapper'
type PricingProps = PrinciplesProps['pricingPrinciples']

export const Pricing: FC<PricingProps> = ({ principles, videoSrc }) => {
  return (
    <TabWrapper>
      <div>
        {principles.map(({ title, icon, description }, i) => (
          <PricingPrinciple
            title={title}
            icon={icon}
            description={description}
            key={`${title}-${i}`}
          />
        ))}
      </div>
      {videoSrc && <YouTubePlayer videoSrc={videoSrc} />}
    </TabWrapper>
  )
}
