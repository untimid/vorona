import React from 'react'

import { Page } from '../../../payload/payload-types'
import { CMSLink } from '../../_components/Link'
import RichText from '../../_components/RichText'
import { BlockWrapper } from '../VoronaHome/components'

import classes from './index.module.scss'

type Props = Extract<Page['layout'][0], { blockType: 'content' }>

export const ContentBlock: React.FC<
  Props & {
    id?: string
  }
> = props => {
  const { columns } = props

  return (
    <BlockWrapper>
      <div className={classes.grid}>
        {columns &&
          columns.length > 0 &&
          columns.map((col, index) => {
            const { enableLink, richText, link, size } = col

            return (
              <div key={index} className={[classes.column, classes[`column--${size}`]].join(' ')}>
                <RichText content={richText} />
                {enableLink && <CMSLink className={classes.link} {...link} />}
              </div>
            )
          })}
      </div>
    </BlockWrapper>
  )
}
