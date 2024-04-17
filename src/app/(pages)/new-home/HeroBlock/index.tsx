'use client'
import React from 'react'
import { PlayCircleIcon } from '@heroicons/react/24/outline'
import { Button, Spacer } from '@nextui-org/react'

import { BlockWrapper } from '../components'

export const HeroBlock = () => {
  return (
    <BlockWrapper>
      <h1 className="text-5xl font-extrabold mb-4">
        <b className="text-transparent bg-clip-text bg-gradient-to-br from-pink-500 to-amber-500">{`:>`}</b>
        <br />
        We create high-performing{' '}
        <b className="text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-green-500">
          IT and marketing solutions{' '}
        </b>
        for{' '}
        <b className="text-transparent bg-clip-text bg-gradient-to-br from-pink-500 to-amber-500">
          startups
        </b>
      </h1>
      <p>
        Qbesk, a development and design crew, hooks up startups and businesses, making products
        happen and tackling tech challenges
      </p>
      <div className="sm:flex mt-4">
        <Button
          color="primary"
          variant="light"
          endContent={<PlayCircleIcon className="h-6 w-6 text-blue-500" />}
        >
          Get a consult
        </Button>
        <Spacer x={4} />
        <Button color="primary">Get a consult</Button>
      </div>
    </BlockWrapper>
  )
}
