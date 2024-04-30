import React, { FC } from 'react'
import * as icons from '@heroicons/react/24/outline'

import RichText from '../../_components/RichText'
import type { PrinciplesProps } from './'

type PricingPrincipleProps = PrinciplesProps['pricingPrinciples']['principles'][number]

export const PricingPrinciple: FC<PricingPrincipleProps> = ({ title, description, icon }) => {
  const RenderIcon = icons[icon]
  return (
    <div>
      <div className="flex align-baseline">
        <RenderIcon className="h-6 w-6 text-blue-500 me-1" />
        <h4 className="font-bold leading-6 mb-2">{title}</h4>
      </div>
      <RichText className="ms-7 mb-4" content={description} />
    </div>
  )
}
