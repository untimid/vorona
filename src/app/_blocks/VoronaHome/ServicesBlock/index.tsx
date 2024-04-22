import React, { FC } from 'react'

import { BlockWrapper } from '../components'
import { ServicesSection } from './ServicesSection'

type ServiceType = {
  title: string
  services: string[]
  color: string
}

export interface ServicesBlockProps {
  header: string
  description: string
  services: ServiceType[]
}

export const ServicesBlock: FC<ServicesBlockProps> = ({ header, description, services }) => {
  return (
    <BlockWrapper>
      <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-500 to-amber-500 mb-4">
        {header}
      </h2>
      <p>{description}</p>
      <div className="grid sm:gap-4 sm:grid-cols-1 md:gap-8 md:grid-cols-2 lg:gap-12 mt-4">
        {services?.map(({ title, color, services }, i) => (
          <ServicesSection key={`${title}-${i}`} title={title} color={color} services={services} />
        ))}
      </div>
    </BlockWrapper>
  )
}
