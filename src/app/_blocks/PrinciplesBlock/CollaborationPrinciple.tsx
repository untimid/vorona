import React, { FC } from 'react'
import { Chip } from '@nextui-org/react'

import { HeroIconType } from '../../../commonTypes'

export interface CollaborationPrincipleProps {
  title: string
  description: string
  icon: HeroIconType
  color: string
  services: string[]
}

export const CollaborationPrinciple: FC<CollaborationPrincipleProps> = ({
  title,
  description,
  icon,
  color,
  services,
}) => {
  const RenderIcon = icon
  return (
    <div className="mt-8">
      <div className="flex align-baseline">
        <RenderIcon className="h-6 w-6 text-blue-500 me-1" />
        <h4 className="font-bold leading-6 mb-2">{title}</h4>
      </div>
      <div className="ms-7">
        {services.map((service, i) => (
          <Chip
            className={`${color ? color : 'bg-amber-300'} mt-2 me-2`}
            key={`${title}-${service}-${i}`}
          >
            {service}
          </Chip>
        ))}
        <p className="mb-4 mt-4">{description}</p>
      </div>
    </div>
  )
}
