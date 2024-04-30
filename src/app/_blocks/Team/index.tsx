'use client'
import React, { FC } from 'react'

import type { Page } from '../../../payload/payload-types'
import RichText from '../../_components/RichText'
import { PersonCard } from './PersonCard'

export type TeamProps = Extract<Page['layout'][0], { blockType: 'team' }>

export const Team: FC<TeamProps> = ({ description, persons }) => {
  return (
    <>
      <RichText className="mb-4" content={description} />
      <div className="grid sm:gap-4 sm:grid-cols-1 md:gap-8 md:grid-cols-2 lg:gap-12 lg:grid-cols-3 mt-4">
        {persons &&
          persons.map(
            (
              {
                id,
                name,
                role,
                description,
                highlightDescription,
                highlightHeader,
                competences,
                photo,
              },
              i,
            ) => (
              <PersonCard
                key={`${id}-${i}`}
                name={name}
                description={description}
                highlightDescription={highlightDescription}
                highlightHeader={highlightHeader}
                role={role}
                competences={competences}
                photo={photo}
              />
            ),
          )}
      </div>
    </>
  )
}
