'use client'
import React, { FC } from 'react'

import { BlockWrapper } from '../components'
import { BenefitCard, BenefitCardProps } from './BenefitCard'

export interface BenefitsBlockProps {
  header: string
  description: string
  benefits: BenefitCardProps[]
}

export const BenefitsBlock: FC<BenefitsBlockProps> = ({ header, description, benefits = [] }) => {
  return (
    <BlockWrapper>
      <h2 className="text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-green-600"></h2>
      <p></p>
      <div className="grid sm:gap-4 sm:grid-cols-1 md:gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-12 mt-4">
        {benefits?.map(({ title, description }, i) => (
          <BenefitCard key={`${title}-${i}`} title={title} description={description} />
        ))}
      </div>
    </BlockWrapper>
  )
}
