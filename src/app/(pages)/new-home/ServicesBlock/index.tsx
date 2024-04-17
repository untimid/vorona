import React from 'react'

import { BlockWrapper } from '../components'
import { ServicesSection } from './ServicesSection'

const SERVICES = [
  {
    title: 'products',
    services: ['mvp', 'startup', 'web service', 'website', 'landing page'],
    color: 'bg-indigo-300',
  },
  {
    title: 'design',
    services: ['ui/ux', 'startup', 'web service', 'website', 'landing page'],
    color: 'bg-amber-300',
  },
  {
    title: 'development',
    services: ['mvp', 'startup', 'web service', 'website', 'landing page'],
    color: 'bg-pink-300',
  },
  {
    title: 'consulting',
    services: ['mvp', 'startup', 'web service', 'website', 'landing page'],
    color: 'bg-yellow-300',
  },
  {
    title: 'marketing',
    services: ['mvp', 'startup', 'web service', 'website', 'landing page'],
    color: 'bg-blue-300',
  },
  {
    title: 'content',
    services: ['mvp', 'startup', 'web service', 'website', 'landing page'],
    color: 'bg-cyan-300',
  },
]

export const ServicesBlock = () => {
  return (
    <BlockWrapper>
      <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-500 to-amber-500 mb-4">
        Services
      </h2>
      <p>
        We'll supercharge your business growth, boost your online income, and help you ace the
        digital game
      </p>
      <div className="grid sm:gap-4 sm:grid-cols-1 md:gap-8 md:grid-cols-2 lg:gap-12 mt-4">
        {SERVICES.map(({ title, color, services }, i) => (
          <ServicesSection key={`${title}-${i}`} title={title} color={color} services={services} />
        ))}
      </div>
    </BlockWrapper>
  )
}
