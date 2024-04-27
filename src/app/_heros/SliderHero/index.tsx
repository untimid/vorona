'use client'
import React, { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Page } from '../../../payload/payload-types'
import { BlockWrapper } from '../../_blocks/VoronaHome/components'
import { CMSLink } from '../../_components/Link'
import { Media } from '../../_components/Media'
import { Image } from '../../_components/Media/Image'
import RichText from '../../_components/RichText'

import 'swiper/css'

export const SliderHero: FC<Page['hero'] & { title?: string }> = ({
  title,
  richText,
  slider,
  links,
}) => {
  return (
    <div className="relative">
      {title && (
        <BlockWrapper className="w-full absolute z-20">
          <h1 className="sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-amber-500 to-cyan-600 pb-2">
            {title}
          </h1>
        </BlockWrapper>
      )}
      <Swiper spaceBetween={0} slidesPerView={1} className="z-10">
        {slider?.length &&
          slider.map(({ slideContent, slideImage }, i) => (
            <SwiperSlide key={i}>
              {slideContent && (
                <BlockWrapper className="w-full absolute bottom-0">
                  <div className="absolute sm:p-4 md:p-6 lg:p-8 sm:bottom-6 md:bottom-8 lg:bottom-12 bg-gray-400 text-white bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
                    <RichText content={slideContent} />
                  </div>
                </BlockWrapper>
              )}
              <Image resource={slideImage} />
            </SwiperSlide>
          ))}
      </Swiper>
      <BlockWrapper>
        {Array.isArray(links) && links.length > 0 && (
          <ul>
            {links.map(({ link }, i) => {
              return (
                <li key={i}>
                  <CMSLink {...link} />
                </li>
              )
            })}
          </ul>
        )}
        <RichText content={richText} />
      </BlockWrapper>
    </div>
  )
}
