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
  <div>
    <h5 className="flex font-extrabold">
      <CheckIcon className="h-6 w-6 text-blue-500" />
      {title}
    </h5>
    <RichText className="ms-6" content={description} />
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
      <h3 className="text-2xl font-extrabold">{title}</h3>
      <RichText content={description} />
      <Media resource={image} />
      <h4 className="flex me-auto font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-amber-500 to-pink-500">
        Мы вам поможем
      </h4>
      {benefitItems.map(({ title, description }, i) => (
        <BenefitItem key={`${title}-${i}`} title={title} description={description} />
      ))}
    </Card>
  )
}
