'use client'
import React, { FC } from 'react'

import { BlockWrapper } from '../components'
import { PersonCard, PersonCardProps } from './PersonCard'

export interface TeamBlockProps {
  header: string
  description: string
  persons: PersonCardProps[]
}

export const TeamBlock: FC<TeamBlockProps> = ({ header, description, persons }) => {
  return (
    <BlockWrapper>
      <h2 className="text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-br from-red-700 to-amber-500">
        {header}
      </h2>
      <p className="mb-4">{description}</p>
      <div className="grid sm:gap-4 sm:grid-cols-1 md:gap-8 md:grid-cols-2 lg:gap-12 mt-4">
        {persons.map(
          (
            { name, role, description, highlightDescription, highlightHeader, competences, photo },
            i,
          ) => (
            <PersonCard
              key={`${name}-${i}`}
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
    </BlockWrapper>
  )
}
