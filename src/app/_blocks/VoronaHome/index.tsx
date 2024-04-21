'use client'
import React, { FC } from 'react'

import { BenefitsBlock } from './BenefitsBlock'
import { ContactFormBlock } from './ContactFormBlock'
import { ContactsBlock } from './ContactsBlock'
import { HeroBlock } from './HeroBlock'
import { PricingBlock } from './PricingBlock'
import { PrinciplesBlock } from './PrinciplesBlock'
import { PromoBlock } from './PromoBlock'
import { ServicesBlock } from './ServicesBlock'
import { TeamBlock } from './TeamBlock'
import {
  BENEFITS_BLOCK,
  CONTACT_FORM_BLOCK,
  CONTACTS_BLOCK,
  HERO_BLOCK,
  PRICING_BLOCK,
  PRINCIPLES_BLOCK,
  PROMO_SLIDE,
  SERVICES_BLOCK,
  TEAM_BLOCK,
  WHO_BLOCK,
} from './tempDataRu'
import { WhoBlock } from './WhoBlock'

interface VoronaHomeProps {
  testProp: string
}

export const VoronaHome: FC<VoronaHomeProps> = ({ testProp }) => {
  return (
    <div key={testProp}>
      <HeroBlock {...HERO_BLOCK} />
      <WhoBlock {...WHO_BLOCK} />
      <ServicesBlock {...SERVICES_BLOCK} />
      <BenefitsBlock {...BENEFITS_BLOCK} />
      <PrinciplesBlock {...PRINCIPLES_BLOCK} />
      <PromoBlock {...PROMO_SLIDE} />
      <TeamBlock {...TEAM_BLOCK} />
      <PricingBlock {...PRICING_BLOCK} />
      <ContactsBlock {...CONTACTS_BLOCK} />
      <ContactFormBlock {...CONTACT_FORM_BLOCK} />
    </div>
  )
}
