'use client'
import React, { FC } from 'react'
import { ArrowTrendingUpIcon, MegaphoneIcon } from '@heroicons/react/24/outline'

import { BlockWrapper } from '../components'

export interface PricingBlockProps {
  header: string
  description: string
  hourlyRate: {
    rate: string
    description: string
  }
  consultRate: {
    rate: string
    description: string
  }
  urgentProject: {
    title: string
    description: string
  }
  pricingPolicy: {
    title: string
    description: string
  }
}

export const PricingBlock: FC<PricingBlockProps> = ({
  header,
  description,
  hourlyRate,
  consultRate,
  urgentProject,
  pricingPolicy,
}) => {
  return (
    <BlockWrapper>
      <h2 className="text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-br from-yellow-500 to-purple-600">
        {header}
      </h2>
      <p className="mb-4">{description}</p>
      <div className="grid sm:gap-4 sm:grid-cols-1 md:gap-8 md:grid-cols-2 lg:gap-12 mt-4">
        <div className="flex flex-row  bg-gradient-to-br from-cyan-300 to-yellow-300">
          <div className="flex flex-col justify-items-center content-center p-8">
            <h3 className="font-extrabold text-center">{hourlyRate.rate}</h3>
            <p className="italic text-center">{hourlyRate.description}</p>
          </div>
          <div className="flex flex-col justify-items-center content-center p-8">
            <h3 className="font-extrabold text-center">{consultRate.rate}</h3>
            <p className="italic text-center">{consultRate.description}</p>
          </div>
        </div>
        <div>
          <div>
            <h3 className="flex font-extrabold mt-2">
              <MegaphoneIcon className="h-6 w-6 text-blue-500 mt-1 me-2" />
              {urgentProject.title}
            </h3>
            <p className="ms-8 mb-2">{urgentProject.description}</p>
          </div>
          <div>
            <h3 className="flex font-extrabold mt-2">
              <ArrowTrendingUpIcon className="h-6 w-6 text-blue-500 mt-1 me-2" />
              {pricingPolicy.title}
            </h3>
            <p className="ms-8 mb-2">{pricingPolicy.description}</p>
          </div>
        </div>
      </div>
    </BlockWrapper>
  )
}
