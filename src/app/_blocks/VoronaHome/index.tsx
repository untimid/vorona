'use client'
import React, { FC } from 'react'

import { ContactFormBlock } from '../ContactFormBlock'
import { ContactsBlock } from '../ContactsBlock'
import { PricingBlock } from '../PricingBlock'
import { PrinciplesBlock } from '../PrinciplesBlock'
import { ServicesBlock } from '../ServicesBlock'
import { TeamBlock } from '../TeamBlock'
import { WhoBlock } from '../WhoBlock'
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

interface VoronaHomeProps {
  testProp: string
}

export const VoronaHome: FC<VoronaHomeProps> = ({ testProp }) => {
  return (
    <div key={testProp}>
      <WhoBlock {...WHO_BLOCK} />
      <ServicesBlock {...SERVICES_BLOCK} />
      <PrinciplesBlock {...PRINCIPLES_BLOCK} />
      <TeamBlock {...TEAM_BLOCK} />
      <PricingBlock {...PRICING_BLOCK} />
      <ContactsBlock {...CONTACTS_BLOCK} />
      <ContactFormBlock {...CONTACT_FORM_BLOCK} />
    </div>
  )
}
