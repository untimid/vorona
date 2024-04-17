'use client'
import React from 'react'

import { BlockWrapper } from '../components'
import { BenefitCard } from './BenefitCard'

const BENEFITS = [
  {
    title: 'On the same page',
    description: "We're tackling business challenges, not just coding",
  },
  {
    title: 'Small team',
    description: 'Our seasoned team is fully immersed in your project',
  },
  {
    title: 'Total transparency',
    description:
      "Timelines, pricing, processes, and outcomes. We're available and open to your questions",
  },
  {
    title: 'Security and efficiency',
    description:
      'We leverage a framework of the most popular and stable solutions tailored to your needs',
  },
  {
    title: 'Documentation',
    description: "While developing, we'll share knowledge and create detailed docs for the future",
  },
]

export const BenefitsBlock = () => {
  return (
    <BlockWrapper>
      <h2 className="text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-green-600">
        Benefits
      </h2>
      <p>
        We'll supercharge your business growth, boost your online income, and help you ace the
        digital game
      </p>
      <div className="grid sm:gap-4 sm:grid-cols-1 md:gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-12 mt-4">
        {BENEFITS.map(({ title, description }, i) => (
          <BenefitCard key={`${title}-${i}`} title={title} description={description} />
        ))}
      </div>
    </BlockWrapper>
  )
}
