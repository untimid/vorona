'use client'
import React, { FC } from 'react'
import { CheckIcon } from '@heroicons/react/24/solid'
import { Card, Chip } from '@nextui-org/react'

import { Media } from '../../_components/Media'
import RichText from '../../_components/RichText'
import type { TeamProps } from './'

export type PersonCardProps = TeamProps['persons'][number]

export const PersonCard: FC<PersonCardProps> = ({
  name,
  role,
  description,
  highlightDescription,
  highlightHeader,
  competences,
  photo,
}) => {
  return (
    <Card radius="sm" className="border-none vrn-p-m">
      <Media resource={photo} className="vrn-mb-m" />
      <h3 className="vrn-h3">{name}</h3>
      <div className="divide-y-1 divide-solid">
        <p className="vrn-italic">{role}</p>
        <div className="vrn-pt-m">
          <h4 className="flex vrn-h4">
            <CheckIcon className="h-8 w-8 text-blue-500 vrn-me-s" />
            {highlightHeader}
          </h4>
          <p className="vrn-italic vrn-ms-l">{highlightDescription}</p>
        </div>
      </div>
      <div>
        {competences?.map((competence, i) => (
          <Chip
            key={competence.id || i}
            className="vrn-mb-m vrn-me-m"
            variant="flat"
            color="primary"
          >
            {competence.title}
          </Chip>
        ))}
      </div>
      <RichText content={description} />
    </Card>
  )
}
