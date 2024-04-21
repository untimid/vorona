'use client'
import React, { FC } from 'react'
import { PlayCircleIcon } from '@heroicons/react/24/outline'
import { Button, Link, Spacer } from '@nextui-org/react'

import { BlockWrapper } from '../components'

export interface HeroBlockProps {
  header: {
    firstPart: string
    secondPart: string
    thirdPart: string
    fourthPart: string
  }
  description?: string
  ctaMain?: {
    href: string
    text: string
  }
  ctaAdditional?: {
    href: string
    text: string
  }
}

export const HeroBlock: FC<HeroBlockProps> = ({
  header: { firstPart, secondPart, thirdPart, fourthPart },
  description,
  ctaMain,
  ctaAdditional,
}) => {
  return (
    <BlockWrapper>
      <h1 className="text-5xl font-extrabold mb-4">
        <b className="text-transparent bg-clip-text bg-gradient-to-br from-pink-500 to-amber-500">{`:>`}</b>
        <br />
        {firstPart}{' '}
        <b className="text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-green-500">
          {secondPart}{' '}
        </b>
        {thirdPart}{' '}
        <b className="text-transparent bg-clip-text bg-gradient-to-br from-pink-500 to-amber-500">
          {fourthPart}
        </b>
      </h1>
      <p>{description}</p>
      <div className="sm:flex mt-4">
        {ctaMain && (
          <>
            <Button
              color="primary"
              variant="light"
              endContent={<PlayCircleIcon className="h-6 w-6 text-blue-500" />}
            >
              {ctaMain.text || ''}
            </Button>
            <Spacer x={4} />
          </>
        )}
        {ctaAdditional && (
          <Button color="primary" as={Link} href={ctaAdditional.href}>
            {ctaAdditional.text || ''}
          </Button>
        )}
      </div>
    </BlockWrapper>
  )
}
