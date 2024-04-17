'use client'
import React from 'react'

import { BlockWrapper } from '../components'
import { PersonCard } from './PersonCard'

const PERSONS = [
  {
    name: 'Artem Galukhin',
    role: 'CEO, Head of developers',
    description: 'I am the man between business and technologies',
    highlightDescription: 'Entrepreneur, web developer',
    highlightHeader: '10+ years',
    competences: ['strategy', 'marketing', 'development', 'content production', 'advert'],
    photo: '/idea 2.png',
  },
  {
    name: 'Elena Galukhina',
    role: 'Creative director',
    description: 'I am the man between business and technologies',
    highlightDescription: 'Entrepreneur, web developer',
    highlightHeader: '10+ years',
    competences: ['strategy', 'marketing', 'development', 'content production', 'advert'],
    photo: '/idea 2.png',
  },
]

export const TeamBlock = () => {
  return (
    <BlockWrapper>
      <h2 className="text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-br from-red-700 to-amber-500">
        Our team
      </h2>
      <p className="mb-4">
        Let's introduce ourselves: a compact, high-performing team blending IT, business, and design
        expertise
      </p>
      <div className="grid sm:gap-4 sm:grid-cols-1 md:gap-8 md:grid-cols-2 lg:gap-12 mt-4">
        {PERSONS.map(
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
