'use client'
import React, { FC } from 'react'

import type { Page } from '../../../payload/payload-types'
import RichText from '../../_components/RichText'
import { CommonBlockProps } from '../commonTypes'
import { ServicesGroup } from './ServicesGroup'

export type ServicesProps = Extract<Page['layout'][0], { blockType: 'services' }> & CommonBlockProps

export const Services: FC<ServicesProps> = ({ description, servicesGroups, id }) => {
  return (
    <div id={`block-${id}`}>
      <RichText content={description} />
      <div className="grid sm:grid-cols-1 md:grid-cols-2 vrn-gap-l">
        {servicesGroups &&
          servicesGroups.map(({ id, title, color, services }, i) => (
            <ServicesGroup key={id || i} title={title} color={color} services={services} />
          ))}
      </div>
    </div>
  )
}
