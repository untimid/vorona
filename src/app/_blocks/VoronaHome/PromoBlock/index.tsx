'use client'
import React, { FC } from 'react'
import { Button, Link } from '@nextui-org/react'
import Image from 'next/image'

import { BlockWrapper } from '../components'

interface PromoBlockProps {
  title: string
  description: string
  ctaLink: string
  ctaText: string
  image: string
  imageAlt: string
}

export const PromoBlock: FC<PromoBlockProps> = ({
  title,
  description,
  ctaLink,
  ctaText,
  image,
  imageAlt,
}) => {
  return (
    <BlockWrapper className="w-full h-full bg-red-100 md:flex md:flex-row">
      <div>
        <h2 className="text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-green-600 pb-1">
          {title}
        </h2>
        <p>{description}</p>
        <Button
          href={ctaLink}
          as={Link}
          color="danger"
          showAnchorIcon
          variant="solid"
          className="mt-4"
          target="blank"
        >
          {ctaText}
        </Button>
      </div>
      <Image src={image} alt={imageAlt} width={300} height={300} className="w-auto h-300" />
    </BlockWrapper>
  )
}
