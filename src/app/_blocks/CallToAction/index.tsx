import React from 'react'

import { Page } from '../../../payload/payload-types'
import { Gutter } from '../../_components/Gutter'
import { CMSLink } from '../../_components/Link'
import RichText from '../../_components/RichText'
import { VerticalPadding } from '../../_components/VerticalPadding'
import { CommonBlockProps } from '../commonTypes'

type CallToActionBlockProps = Extract<Page['layout'][0], { blockType: 'cta' }> & CommonBlockProps

export const CallToActionBlock: React.FC<CallToActionBlockProps> = ({ links, richText, id }) => {
  return (
    <Gutter id={`block-${id}`}>
      <VerticalPadding>
        <div>
          <div>
            <RichText content={richText} />
          </div>
          <div>
            {(links || []).map(({ link }, i) => {
              return <CMSLink key={i} {...link} />
            })}
          </div>
        </div>
      </VerticalPadding>
    </Gutter>
  )
}
