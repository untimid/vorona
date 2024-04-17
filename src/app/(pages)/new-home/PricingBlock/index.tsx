'use client'
import React from 'react'
import { ArrowTrendingUpIcon, MegaphoneIcon } from '@heroicons/react/24/outline'

import { BlockWrapper } from '../components'

export const PricingBlock = () => {
  return (
    <BlockWrapper>
      <h2 className="text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-br from-yellow-500 to-purple-600">
        Pricing
      </h2>
      <p className="mb-4">
        Our working model enables you to pay for the actual project time spent by our specialists.
        Payment is made on a monthly basis for the completed work. Our work estimation is based on
        an hourly rate
      </p>
      <div className="grid sm:gap-4 sm:grid-cols-1 md:gap-8 md:grid-cols-2 lg:gap-12 mt-4">
        <div className="flex flex-row  bg-gradient-to-br from-cyan-300 to-yellow-300">
          <div className="flex flex-col justify-items-center content-center p-8">
            <h3 className="font-extrabold text-center">$50</h3>
            <p className="italic text-center">Hourly rate, starting from</p>
          </div>
          <div className="flex flex-col justify-items-center content-center p-8">
            <h3 className="font-extrabold text-center">01/23</h3>
            <p className="italic text-center">Dev kickoff of your project</p>
          </div>
        </div>
        <div>
          <div>
            <h3 className="flex font-extrabold mt-2">
              <MegaphoneIcon className="h-6 w-6 text-blue-500 mt-1 me-2" />
              Do you have an urgent project?
            </h3>
            <p className="ms-8 mb-2">Contact us now to discuss its feasibility</p>
          </div>
          <div>
            <h3 className="flex font-extrabold mt-2">
              <ArrowTrendingUpIcon className="h-6 w-6 text-blue-500 mt-1 me-2" />
              Our prices will increase starting from June 2024
            </h3>
            <p className="ms-8 mb-2">Secure a contract at a favorable rate now</p>
          </div>
        </div>
      </div>
    </BlockWrapper>
  )
}
