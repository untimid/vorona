'use client'
import React, { FC } from 'react'
import { Chip } from '@nextui-org/react'

import type { ServicesProps } from '.'

export type ServicesGroupProps = ServicesProps['servicesGroups'][number]

export const ServicesGroup: FC<ServicesGroupProps> = ({ title, color, services }) => {
  return (
    <div className="flex-col divide-y">
      {title && <h3 className="vrn-h3 uppercase">{title}</h3>}
      <div className="vrn-pt-m">
        {services &&
          services.map(({ id, title }, i) => (
            <Chip key={id || i} className={`${color ? color : 'bg-amber-300'} vrn-mb-m vrn-me-m`}>
              {title}
            </Chip>
          ))}
      </div>
    </div>
  )
}
