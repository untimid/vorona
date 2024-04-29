import React, { FC } from 'react'

import type { HeroIconType } from '../../../commonTypes'
import { PricingPrinciple } from './PricingPrinciple'
import { TabWrapper } from './TabWrapper'

type PricingPrincipleType = {
  title: string
  description: string
  icon: HeroIconType
}

export interface PricingProps {
  principles: PricingPrincipleType[]
  videoSrc?: string
}

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
      {videoSrc && (
        <iframe
          width="560"
          height="315"
          src={videoSrc}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      )}
    </TabWrapper>
  )
}
