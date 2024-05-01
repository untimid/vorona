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
    <div>
      <div className="flex align-baseline">
        <RenderIcon className="h-8 w-8 text-blue-500 vrn-me-s" />
        <h4 className="font-bold leading-6 vrn-mb-m">{title}</h4>
      </div>
      <div className="vrn-ms-l">
        {services.map((service, i) => (
          <Chip
            className={`${color ? color : 'bg-amber-300'} vrn-me-m vrn-mb-m`}
            key={`${title}-${service}-${i}`}
          >
            {service.title}
          </Chip>
        ))}
        <RichText content={description} />
      </div>
    </div>
  )
}
