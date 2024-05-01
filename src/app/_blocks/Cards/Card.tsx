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
  const gotPaddings = shadow !== 'none' || radius !== 'none'
  return (
    <UICard shadow={shadow} radius={radius} className={gotPaddings ? '' : 'bg-transparent'}>
      {image && (
        <div
          className={[imageHeight.replace('_', '-'), 'overflow-hidden'].filter(Boolean).join(' ')}
        >
          <Media resource={image} />
        </div>
      )}
      <div className={[gotPaddings && 'vrn-p-m', image && 'vrn-pt-m'].filter(Boolean).join(' ')}>
        <div className="flex items-start">
          {icon && <Icon className="h-8 w-8 min-w-8 min-h-8 text-blue-500 vrn-me-s" />}
          <h3 className="vrn-h3">{title}</h3>
        </div>
        <div className={[icon && 'vrn-ms-l'].filter(Boolean).join(' ')}>
          {subtitle && <p className="vrn-italic">{subtitle}</p>}
          {chips?.length && (
            <div>
              {chips.map(({ title, id, bgColorSelect }, i) => (
                <Chip
                  key={id || i}
                  className={`${bgColorSelect ? bgColorSelect : 'bg-amber-300'} vrn-me-m vrn-mb-m`}
                >
                  {title}
                </Chip>
              ))}
            </div>
          )}
          <RichText content={content} noSpacings />
        </div>
      </div>
    </UICard>
  )
}
