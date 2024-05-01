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
          className="flex-grow border-s-4 border-cyan-500 vrn-ps-l flex flex-col justify-center"
        />
        <div className="bg-gray-600 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 vrn-p-l flex flex-col items-center sm:items-start">
          <Avatar src={url} alt={alt} size="lg" className="vrn-mb-m h-20 w-20 text-large" />
          <div className="flex flex-col">
            {name && <p className="vrn-p text-center sm:text-start font-bold">{name}</p>}
            {role && <p className="vrn-italic text-center sm:text-start">{role}</p>}
            {company && <p className="vrn-italic text-center sm:text-start">{company}</p>}
          </div>
        </div>
      </div>
    </>
  )
}
