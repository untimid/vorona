'use client'
import React, { FC } from 'react'
import { CheckIcon } from '@heroicons/react/24/solid'
import { Card } from '@nextui-org/react'

import { Media } from '../../_components/Media'
import RichText from '../../_components/RichText'
import type { AudienceProps } from './'

export type AudienceCardProps = AudienceProps['audienceItems'][number]
export type BenefitItemProps = AudienceCardProps['benefitItems'][number]

const BenefitItem: FC<BenefitItemProps> = ({ title, description }) => (
  <div className="vrn-mb-m">
    <h5 className="vrn-h5 flex">
      <CheckIcon className="h-8 w-8 text-blue-500 vrn-me-s" />
      {title}
    </h5>
    <RichText className="vrn-ms-l" noSpacings content={description} />
  </div>
)

export const AudienceCard: FC<AudienceCardProps> = ({
  title,
  description,
  image,
  benefitItems,
}) => {
  return (
    <Card radius="sm" className="border-none p-6">
      <h3 className="vrn-h3">{title}</h3>
      <RichText content={description} />
      <Media resource={image} className="vrn-mb-m v-full h-auto" imgClassName="" />
      <h4 className="vrn-h4 flex me-auto text-transparent bg-clip-text bg-gradient-to-br from-amber-500 to-pink-500">
        Мы вам поможем
      </h4>
      {benefitItems.map(({ title, description }, i) => (
        <BenefitItem key={`${title}-${i}`} title={title} description={description} />
      ))}
    </Card>
  )
}
