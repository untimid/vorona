import React, { FC } from 'react'
import { StaticImageData } from 'next/image'

import { Page } from '../../../payload/payload-types'
import { BlockWrapper } from '../../_components/BlockWrapper'
import { Media } from '../../_components/Media'
import RichText from '../../_components/RichText'

interface MediaBlockProps extends Extract<Page['layout'][0], { blockType: 'mediaBlock' }> {
  staticImage?: StaticImageData
  id?: string
}

interface RichContentProps {
  content: MediaBlockProps['content']
  className?: string
}

const RichContent: FC<RichContentProps> = ({ content, className }) => (
  <RichText
    content={content}
    className={[
      'bg-gray-100 dark:bg-gray-600 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-40 dark:bg-opacity-40 sm:bg-opacity-40 sm:dark:bg-opacity-30 p-4 sm:p-6 md:p-8 sm:me-8 lg:p-12',
      className,
    ]
      .filter(Boolean)
      .join(' ')}
  />
)

export const MediaBlock: FC<MediaBlockProps> = ({
  media,
  position = 'default',
  staticImage,
  content,
}) => {
  let caption
  if (media && typeof media === 'object') caption = media.caption

  if (position === 'fullscreen') {
    return (
      <div className="relative w-full">
        <Media resource={media} src={staticImage} />
        {content && (
          <BlockWrapper className="-mt-12 sm:mt-0 sm:absolute sm:top-0 w-full">
            <RichContent content={content} className="w-full sm:w-1/2 sm:ms-auto" />
          </BlockWrapper>
        )}
        {caption && (
          <BlockWrapper className="absolute -mt-8 top-0 sm:top-auto sm:bottom-0 w-full">
            <RichContent
              content={caption}
              className="w-full sm:w-min text-nowrap sm:max-w-1/2 sm:me-auto"
            />
          </BlockWrapper>
        )}
      </div>
    )
  }
  return (
    <BlockWrapper className="relative">
      <div className="relative">
        <Media resource={media} src={staticImage} className="w-full sm:w-2/3 sm:ms-8" />
        {caption && <RichContent content={caption} className="absolute bottom-0 sm:start-8" />}
      </div>
      {content && (
        <RichContent
          content={content}
          className="static sm:absolute sm:end-8 sm:top-8 md:top-16 sm:w-1/3"
        />
      )}
    </BlockWrapper>
  )
}
