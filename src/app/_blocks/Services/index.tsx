'use client'
import React, { FC } from 'react'

import type { Page } from '../../../payload/payload-types'
import RichText from '../../_components/RichText'
import { ServicesGroup } from './ServicesGroup'

export type ServicesProps = Extract<Page['layout'][0], { blockType: 'services' }>

export const Services: FC<ServicesProps> = ({ description, servicesGroups }) => {
  return (
    <>
      <RichText content={description} />
      <div className="grid sm:gap-4 sm:grid-cols-1 md:gap-8 md:grid-cols-2 lg:gap-12 mt-4">
        {servicesGroups &&
          servicesGroups.map(({ id, title, color, services }, i) => (
            <ServicesGroup key={id || i} title={title} color={color} services={services} />
          ))}
      </div>
    </>
  )
}
