'use client'
import React, { FC } from 'react'
import { Card } from '@nextui-org/react'
import NextImage from 'next/image'

export interface BenefitCardProps {
  title: string
  description: string
}

export const BenefitCard: FC<BenefitCardProps> = ({ title, description }) => {
  return (
    <Card radius="sm" className="border-none p-6">
      <NextImage src="/idea 2.png" alt="image" height={200} width={200} />
      <h3 className="text-2xl font-extrabold">{title}</h3>
      <p>{description}</p>
    </Card>
  )
}
