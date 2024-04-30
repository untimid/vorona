'use client'
import React, { FC } from 'react'
import * as icons from '@heroicons/react/24/outline'

import type { Page } from '../../../payload/payload-types'
import RichText from '../../_components/RichText'

export type PricingProps = Extract<Page['layout'][0], { blockType: 'pricing' }>

const PriceItem: FC<PricingProps['highlightedPrices'][number]> = ({ rate, description }) => (
  <div className="flex flex-col justify-items-center content-center p-8">
    <h3 className="font-extrabold text-center">{rate}</h3>
    <RichText className="italic text-center" content={description} />
  </div>
)

const Tip: FC<PricingProps['tips'][number]> = ({ title, description, icon }) => {
  let Icon = null
  if (icon) Icon = icons[icon]
  return (
    <div>
      <h3 className="flex font-extrabold mt-2">
        {Icon && <Icon className="h-6 w-6 text-blue-500 mt-1 me-2" />}
        {title}
      </h3>
      <RichText className="ms-8 mb-2" content={description} />
    </div>
  )
}

export const Pricing: FC<PricingProps> = ({ description, highlightedPrices, tips }) => (
  <>
    <RichText className="mb-4" content={description} />
    <div className="grid sm:gap-4 sm:grid-cols-1 md:gap-8 md:grid-cols-2 lg:gap-12 mt-4">
      <div className="flex flex-row  bg-gradient-to-br from-cyan-300 to-yellow-300">
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
  </>
)
