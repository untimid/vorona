import React from 'react'

import { Page } from '../../../payload/payload-types'
import { CMSLink } from '../../_components/Link'
import RichText from '../../_components/RichText'

type Props = Extract<Page['layout'][0], { blockType: 'content' }>

export const ContentBlock: React.FC<
  Props & {
    id?: string
  }
> = props => {
  const { columns } = props

  return (
    <>
      <div className="w-full flex flex-col md:flex-row vrn-gap-m">
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
    </>
  )
}
