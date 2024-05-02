'use client'
import React, { FC } from 'react'
import * as icons from '@heroicons/react/24/outline'

import type { Page } from '../../../payload/payload-types'
import RichText from '../../_components/RichText'
import { CommonBlockProps } from '../commonTypes'

export type PricingProps = Extract<Page['layout'][0], { blockType: 'pricing' }> & CommonBlockProps

const PriceItem: FC<PricingProps['highlightedPrices'][number]> = ({ rate, description }) => (
  <div className="flex flex-col justify-items-center content-center p-8">
    <h3 className="vrn-h3 text-center">{rate}</h3>
    <RichText className="italic text-center" content={description} />
  </div>
)

const Tip: FC<PricingProps['tips'][number]> = ({ title, description, icon }) => {
  let Icon = null
  if (icon) Icon = icons[icon]
  return (
    <div className="vrn-mb-l last:mb-0">
      <h3 className="flex vrn-h3 mb-0">
        {Icon && <Icon className="h-8 w-8 text-blue-500 vrn-me-s" />}
        {title}
      </h3>
      <RichText className="vrn-ms-l vrn-mt-m" noSpacings content={description} />
    </div>
  )
}

export const Pricing: FC<PricingProps> = ({ description, highlightedPrices, tips, id }) => (
  <div id={`block-${id}`}>
    <RichText content={description} />
    <div className="grid sm:grid-cols-1 md:grid-cols-2 vrn-gap-l">
      <div className="flex flex-row  bg-gradient-to-br from-cyan-300 to-yellow-300 items-center">
        {highlightedPrices &&
          highlightedPrices.map(({ id, rate, description }, i) => (
            <PriceItem key={id || i} rate={rate} description={description} />
          ))}
      </div>
      <div>
        {tips &&
          tips.map(({ id, title, description, icon }, i) => (
            <Tip key={id || i} icon={icon} title={title} description={description} />
          ))}
      </div>
    </div>
  </div>
)
