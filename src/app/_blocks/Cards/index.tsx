'use client'
import React, { FC } from 'react'

import { getCardsClassNames } from '../../../payload/blocks/Cards'
import RichText from '../../_components/RichText'
import { Card } from './Card'
import type { CardsProps } from './types'

export const Cards: FC<CardsProps> = ({
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
    <>
      <RichText content={description} />
      <div className={['grid vrn-gap-l', cardsWrapperClassName].filter(Boolean).join(' ')}>
        {cardItems?.map(card => (
          <Card radius={radius} shadow={shadow} imageHeight={imageHeight} key={card.id} {...card} />
        ))}
      </div>
    </>
  )
}
