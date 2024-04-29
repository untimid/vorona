import React, { FC } from 'react'

import { HeroIconType } from '../../../commonTypes'

interface PricingPrincipleProps {
  title: string
  description: string
  icon: HeroIconType
}

export const PricingPrinciple: FC<PricingPrincipleProps> = ({ title, description, icon }) => {
  const RenderIcon = icon
  return (
    <div>
      <div className="flex align-baseline">
        <RenderIcon className="h-6 w-6 text-blue-500 me-1" />
        <h4 className="font-bold leading-6 mb-2">{title}</h4>
      </div>
      <p className="ms-7 mb-4">{description}</p>
    </div>
  )
}
