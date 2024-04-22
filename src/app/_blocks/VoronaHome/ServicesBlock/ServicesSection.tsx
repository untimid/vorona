'use client'
import React, { FC } from 'react'
import { Chip } from '@nextui-org/react'

interface ServicesSectionProps {
  title: string
  services: string[]
  color?: string
}

export const ServicesSection: FC<ServicesSectionProps> = ({ title, services, color }) => {
  return (
    <div className="flex-col divide-y">
      <h3 className="font-bold uppercase">{title}</h3>
      <div>
        {services.map((service, i) => (
          <Chip
            className={`${color ? color : 'bg-amber-300'} mt-2 me-2`}
            key={`${title}-${service}-${i}`}
          >
            {service}
          </Chip>
        ))}
      </div>
    </div>
  )
}
