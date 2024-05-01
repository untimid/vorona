'use client'
import React, { FC } from 'react'

import type { Page } from '../../../payload/payload-types'
import RichText from '../../_components/RichText'
import { PersonCard } from './PersonCard'

export type TeamProps = Extract<Page['layout'][0], { blockType: 'team' }>

export const Team: FC<TeamProps> = ({ description, persons }) => {
  return (
    <>
      <RichText content={description} />
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 vrn-gap-l">
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
