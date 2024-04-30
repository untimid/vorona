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
    <Card radius="sm" className="border-none p-6">
      <Media resource={photo} />
      <h3 className="text-2xl font-extrabold mb-1 mt-2">{name}</h3>
      <div className="divide-y-1 divide-solid">
        <p className="italic  mb-2">{role}</p>
        <div>
          <h4 className="flex font-extrabold mt-2">
            <CheckIcon className="h-6 w-6 text-blue-500" />
            {highlightHeader}
          </h4>
          <p className="ms-6 mb-2 italic">{highlightDescription}</p>
        </div>
      </div>
      <div>
        {competences?.map((competence, i) => (
          <Chip key={competence.id || i} className="me-2 mb-2" variant="flat" color="primary">
            {competence.title}
          </Chip>
        ))}
      </div>
      <RichText content={description} />
    </Card>
  )
}
