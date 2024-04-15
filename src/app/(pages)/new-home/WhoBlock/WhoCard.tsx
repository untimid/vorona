'use client'
import React, { FC } from 'react'
import { CheckIcon } from '@heroicons/react/24/solid'
import { Card } from '@nextui-org/react'
import NextImage from 'next/image'

type HelpItemType = {
  title: string
  description: string
}

interface WhoCardProps {
  title: string
  description: string
  helpItems: HelpItemType[]
}

const HelpItem: FC<HelpItemType> = ({ title, description }) => (
  <div>
    <h5 className="flex font-extrabold">
      <CheckIcon className="h-6 w-6 text-blue-500" />
      {title}
    </h5>
    <p className="ms-6">{description}</p>
  </div>
)

export const WhoCard: FC<WhoCardProps> = ({ title, description, helpItems }) => {
  return (
    <Card radius="sm" className="border-none p-6">
      <h3 className="text-2xl font-extrabold">{title}</h3>
      <p>{description}</p>
      <NextImage src="/idea 2.png" alt="image" height={200} width={200} />
      <h4 className="flex me-auto font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-amber-500 to-pink-500">
        We'll help you
      </h4>
      {helpItems.map(({ title, description }, i) => (
        <HelpItem key={`${title}-${i}`} title={title} description={description} />
      ))}
    </Card>
  )
}
