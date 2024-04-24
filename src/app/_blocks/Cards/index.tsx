'use client'
import React, { FC } from 'react'

import { getCardsClassNames } from '../../../payload/blocks/Cards'
import RichText from '../../_components/RichText'
import { BlockWrapper } from '../VoronaHome/components'
import { Card } from './Card'
import type { CardsProps } from './types'

export const Cards: FC<CardsProps> = ({
  invertBackground,
  header,
  description,
  columnsLg,
  columnsMd,
  columnsSm,
  cardItems,
  radius,
  shadow,
  imageHeight,
}) => {
  const cardsWrapperClassName = getCardsClassNames(columnsSm, columnsMd, columnsLg)
  return (
    <BlockWrapper>
      <h2 className="text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-green-600">
        {header}
      </h2>
      <RichText content={description} />
      <div className={['grid mt-4', cardsWrapperClassName].filter(Boolean).join(' ')}>
        {cardItems?.map(card => (
          <Card radius={radius} shadow={shadow} imageHeight={imageHeight} key={card.id} {...card} />
        ))}
      </div>
    </BlockWrapper>
  )
}
