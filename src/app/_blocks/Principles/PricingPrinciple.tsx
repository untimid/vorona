import React, { FC } from 'react'
import * as icons from '@heroicons/react/24/outline'

import RichText from '../../_components/RichText'
import type { PrinciplesProps } from './'

type PricingPrincipleProps = PrinciplesProps['pricingPrinciples']['principles'][number]

export const PricingPrinciple: FC<PricingPrincipleProps> = ({ title, description, icon }) => {
  const RenderIcon = icons[icon]
  return (
    <div className="vrn-mb-l last:mb-0">
      <div className="flex align-baseline">
        <RenderIcon className="h-8 w-8 text-blue-500 vrn-me-s" />
        <h4 className="vrn-h4 leading-6">{title}</h4>
      </div>
      <RichText className="vrn-ms-l" noSpacings content={description} />
    </div>
  )
}
