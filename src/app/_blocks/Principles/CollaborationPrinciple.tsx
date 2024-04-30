import React, { FC } from 'react'
import * as icons from '@heroicons/react/24/outline'
import { Chip } from '@nextui-org/react'

import RichText from '../../_components/RichText'
import type { CollaborationProps } from './Collaboration'

type CollaborationPrincipleProps = CollaborationProps['principles'][number]

export const CollaborationPrinciple: FC<CollaborationPrincipleProps> = ({
  title,
  description,
  icon,
  color,
  services,
}) => {
  const RenderIcon = icons[icon]
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
            {service.title}
          </Chip>
        ))}
        <RichText className="mb-4 mt-4" content={description} />
      </div>
    </div>
  )
}
