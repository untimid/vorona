'use client'
import React, { FC } from 'react'

import { BlockWrapper } from '../components'
import { WhoCard, WhoCardProps } from './WhoCard'

export interface WhoBlockProps {
  header: {
    firstPart: string
    secondPart: string
    thirdPart: string
  }
  description: string
  whoBenefitsItems: WhoCardProps[]
}

export const WhoBlock: FC<WhoBlockProps> = ({
  header: { firstPart, secondPart, thirdPart },
  description,
  whoBenefitsItems = [],
}) => {
  return (
    <BlockWrapper>
      <h2 className="text-5xl font-extrabold mb-4">
        {firstPart}{' '}
        <b className="text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-green-600">
          {secondPart}{' '}
        </b>
        {thirdPart}
      </h2>
      <p>{description}</p>
      <div className="grid sm:gap-4 sm:grid-cols-1 md:gap-8 md:grid-cols-2 lg:gap-12 mt-4">
        {whoBenefitsItems?.map(({ title, description, helpItems }, i) => (
          <WhoCard
            key={`${title}-${i}`}
            title={title}
            description={description}
            helpItems={helpItems}
          />
        ))}
      </div>
    </BlockWrapper>
  )
}
