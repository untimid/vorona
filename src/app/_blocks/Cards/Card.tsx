'use client'
import React, { FC } from 'react'
import * as icons from '@heroicons/react/24/outline'
import { Card as UICard, CardProps as UICardProps, Chip } from '@nextui-org/react'

import type { ImageSizeValue } from '../../../payload/blocks/Cards'
import { Media } from '../../_components/Media'
import RichText from '../../_components/RichText'
import type { CardsProps } from './types'

type CardProps = CardsProps['cardItems'][number] & {
  shadow: UICardProps['shadow']
  radius: UICardProps['radius']
  imageHeight: ImageSizeValue
}

export const Card: FC<CardProps> = ({
  image,
  title,
  subtitle,
  chips,
  content,
  icon,
  shadow,
  radius,
  imageHeight,
}) => {
  let Icon = null
  if (icon) Icon = icons[icon]

  return (
    <UICard shadow={shadow} radius={radius}>
      {image && (
        <div
          className={[imageHeight.replace('_', '-'), 'overflow-hidden'].filter(Boolean).join(' ')}
        >
          <Media resource={image} />
        </div>
      )}
      <div
        className={`${shadow !== 'none' || radius !== 'none' ? 'sm:p-4 md:p-6 lg:p-8' : ''} ${
          image ? 'pt-6' : ''
        }`}
      >
        <div className="flex items-start">
          {icon && <Icon className="h-6 w-6 min-w-6 min-h-6 text-blue-500 me-2" />}
          <h3 className="text-2xl font-extrabold leading-6">{title}</h3>
        </div>
        <div className={[icon && 'ms-8', 'grid grid-cols-1 gap-2'].filter(Boolean).join(' ')}>
          {subtitle && <span>{subtitle}</span>}
          {chips?.length && (
            <div>
              {chips.map(({ title, id, bgColorSelect }) => (
                <Chip
                  key={id}
                  className={`${bgColorSelect ? bgColorSelect : 'bg-amber-300'} mt-2 me-2`}
                >
                  {title}
                </Chip>
              ))}
            </div>
          )}
          <RichText content={content} />
        </div>
      </div>
    </UICard>
  )
}
