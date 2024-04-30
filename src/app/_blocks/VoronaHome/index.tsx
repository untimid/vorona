'use client'
import React, { FC } from 'react'

import { Audience } from '../Audience'
import { ContactForm } from '../ContactForm'
import { Pricing } from '../Pricing'
import { Principles } from '../Principles'
import { Services } from '../Services'
import { Team } from '../Team'
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
      <Audience {...WHO_BLOCK} />
      <Services {...SERVICES_BLOCK} />
      <Principles {...PRINCIPLES_BLOCK} />
      <Team {...TEAM_BLOCK} />
      <Pricing {...PRICING_BLOCK} />
      <ContactForm {...CONTACT_FORM_BLOCK} />
    </div>
  )
}
