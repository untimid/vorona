'use client'
import React from 'react'

import { BlockWrapper } from '../components'
import { WhoCard } from './WhoCard'

const WHO_BENEFITS = [
  {
    title: 'Startups / MVP',
    description: 'If you have a startup idea and seeking an MVP developer',
    helpItems: [
      {
        title: 'Transform',
        description: 'concepts and ideas into tech specifications',
      },
      {
        title: 'Develop',
        description: 'an MVP version of the product',
      },
      {
        title: 'Provide',
        description: 'training on how to continue working with it',
      },
    ],
  },
  {
    title: 'Beginner product',
    description: "You've already started a product, now it's time to boost the team",
    helpItems: [
      {
        title: 'Transform',
        description: 'concepts and ideas into tech specifications',
      },
      {
        title: 'Develop',
        description: 'an MVP version of the product',
      },
      {
        title: 'Provide',
        description: 'training on how to continue working with it',
      },
    ],
  },
  {
    title: 'Growing product',
    description: 'Your product is already working, now it needs further development',
    helpItems: [
      {
        title: 'Transform',
        description: 'concepts and ideas into tech specifications',
      },
      {
        title: 'Develop',
        description: 'an MVP version of the product',
      },
      {
        title: 'Provide',
        description: 'training on how to continue working with it',
      },
    ],
  },
  {
    title: 'Online business',
    description: 'You want to optimize business with automation, tech and design',
    helpItems: [
      {
        title: 'Transform',
        description: 'concepts and ideas into tech specifications',
      },
      {
        title: 'Develop',
        description: 'an MVP version of the product',
      },
      {
        title: 'Provide',
        description: 'training on how to continue working with it',
      },
    ],
  },
]

export const WhoBlock = () => {
  return (
    <BlockWrapper>
      <h2 className="text-5xl font-extrabold mb-4">
        Who{' '}
        <b className="text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-green-600">
          will benefit{' '}
        </b>
        from us
      </h2>
      <p>
        We have extensive experience in online business, projects, and startups. We would be
        delighted to collaborate with you!
      </p>
      <div className="grid sm:gap-4 sm:grid-cols-1 md:gap-8 md:grid-cols-2 lg:gap-12 mt-4">
        {WHO_BENEFITS.map(({ title, description, helpItems }, i) => (
          <WhoCard
            key={`${title}-${i}`}
            title={title}
            description={description}
            helpItems={helpItems}
          />
        ))}
      </div>
    </BlockWrapper>
  )
}
