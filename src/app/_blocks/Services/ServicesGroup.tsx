'use client'
import React, { FC } from 'react'
import { Chip } from '@nextui-org/react'

import type { ServicesProps } from '.'

export type ServicesGroupProps = ServicesProps['servicesGroups'][number]

export const ServicesGroup: FC<ServicesGroupProps> = ({ title, color, services }) => {
  return (
    <div className="flex-col divide-y">
      {title && <h3 className="font-bold uppercase">{title}</h3>}
      <div>
        {services &&
          services.map(({ id, title }, i) => (
            <Chip key={id || i} className={`${color ? color : 'bg-amber-300'} mt-2 me-2`}>
              {title}
            </Chip>
          ))}
      </div>
    </div>
  )
}
