'use client'
import React, { FC } from 'react'
import { Avatar } from '@nextui-org/react'

import type { Page } from '../../../payload/payload-types'
import RichText from '../../_components/RichText'

export type QuoteProps = Extract<Page['layout'][0], { blockType: 'quote' }>

export const Quote: FC<QuoteProps> = ({ content, name, role, company, photo }) => {
  const { alt, url } =
    typeof photo !== 'string'
      ? { alt: photo.alt, url: `${process.env.NEXT_PUBLIC_SERVER_URL}/media/${photo.filename}` }
      : { url: photo, alt: name }

  return (
    <>
      <div className="flex flex-col sm:flex-row w-full ">
        <RichText
          content={content}
          className="flex-grow border-s-4 border-cyan-500 sm:ms-8 ps-8 mb-4 sm:mb-0 flex flex-col justify-center"
        />
        <div className="bg-gray-600 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 p-4 sm:p-6 md:p-8 sm:me-8 lg:p-12 flex flex-col items-center sm:items-start">
          <Avatar src={url} alt={alt} size="lg" className="mb-4 h-20 w-20 text-large" />
          <div className="flex flex-col gap-2">
            {name && <span className="text-center sm:text-start font-bold">{name}</span>}
            {role && <span className="text-center sm:text-start">{role}</span>}
            {company && <span className="text-center sm:text-start">{company}</span>}
          </div>
        </div>
      </div>
    </>
  )
}
