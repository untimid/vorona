import React from 'react'

import { BenefitsBlock } from './BenefitsBlock'
import { HeroBlock } from './HeroBlock'
import { PrinciplesBlock } from './PrinciplesBlock'
import { ServicesBlock } from './ServicesBlock'
import { WhoBlock } from './WhoBlock'

export default async function NewHome() {
  return (
    <div>
      <HeroBlock />
      <WhoBlock />
      <ServicesBlock />
      <BenefitsBlock />
      <PrinciplesBlock />
    </div>
  )
}
