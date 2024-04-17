import React from 'react'

import { BenefitsBlock } from './BenefitsBlock'
import { ContactsBlock } from './ContactsBlock'
import { HeroBlock } from './HeroBlock'
import { PricingBlock } from './PricingBlock'
import { PrinciplesBlock } from './PrinciplesBlock'
import { PromoBlock } from './PromoBlock'
import { ServicesBlock } from './ServicesBlock'
import { TeamBlock } from './TeamBlock'
import { WhoBlock } from './WhoBlock'

const PROMO_SLIDE = {
  title: 'Check our youtube channel',
  description:
    'Unlocking the world of modern development, product management, and tech - a sea of knowledge, value, and fun',
  ctaLink: '#',
  ctaText: 'Visit',
  image: '/idea 2.png',
  imageAlt: 'image alt',
}

export default async function NewHome() {
  return (
    <div>
      <HeroBlock />
      <WhoBlock />
      <ServicesBlock />
      <BenefitsBlock />
      <PrinciplesBlock />
      <PromoBlock
        title={PROMO_SLIDE.title}
        description={PROMO_SLIDE.description}
        ctaLink={PROMO_SLIDE.ctaLink}
        ctaText={PROMO_SLIDE.ctaText}
        image={PROMO_SLIDE.image}
        imageAlt={PROMO_SLIDE.imageAlt}
      />
      <TeamBlock />
      <PricingBlock />
      <ContactsBlock />
    </div>
  )
}
