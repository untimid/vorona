import React, { FC } from 'react'

import type { HeroIconType } from '../../../../commonTypes'
import { PricingPrinciple } from './PricingPrinciple'
import { TabWrapper } from './TabWrapper'

type PricingPrincipleType = {
  title: string
  description: string
  icon: HeroIconType
}

interface PricingProps {
  principles: PricingPrincipleType[]
}

export const Pricing: FC<PricingProps> = ({ principles }) => {
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
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/-3PUQZqnuuE?si=jgk8_FWdF78_aEaB"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </TabWrapper>
  )
}
