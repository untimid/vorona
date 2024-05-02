import React from 'react'

import { Page } from '../../../payload/payload-types'
import { CMSLink } from '../../_components/Link'
import RichText from '../../_components/RichText'
import { CommonBlockProps } from '../commonTypes'

type ContentBlockProps = Extract<Page['layout'][0], { blockType: 'content' }> & CommonBlockProps

export const ContentBlock: React.FC<ContentBlockProps> = props => {
  const { columns, id } = props

  return (
    <div id={`block-${id}`} className="w-full flex flex-col md:flex-row vrn-gap-l">
      {columns &&
        columns.length > 0 &&
        columns.map((col, index) => {
          const { enableLink, richText, link, size } = col

          return (
            <div
              key={index}
              className={[
                size === 'oneThird' && 'w-full md:w-1/3',
                size === 'half' && 'w-full md:w-1/2',
                size === 'twoThirds' && 'w-full md:w-2/3',
                size === 'full' && 'w-full',
              ]
                .filter(Boolean)
                .join(' ')}
            >
              <RichText content={richText} />
              {enableLink && <CMSLink {...link} />}
            </div>
          )
        })}
    </div>
  )
}
