import React from 'react'

import { Post, Project } from '../../../payload/payload-types'
import { Card } from '../../_components/Card'
import { Gutter } from '../../_components/Gutter'
import RichText from '../../_components/RichText'
import { CommonBlockProps } from '../commonTypes'

export type RelatedPostsProps = {
  blockType: 'relatedPosts'
  blockName: string
  introContent?: any
  docs?: (string | Post | Project)[]
  relationTo: 'posts' | 'projects'
} & CommonBlockProps

export const RelatedPosts: React.FC<RelatedPostsProps> = props => {
  const { introContent, docs, relationTo, id } = props

  return (
    <div id={`block-${id}`}>
      {introContent && (
        <Gutter>
          <RichText content={introContent} />
        </Gutter>
      )}
      <Gutter>
        <div>
          {docs?.map((doc, index) => {
            if (typeof doc === 'string') return null

            return (
              <div key={index}>
                <Card relationTo={relationTo} doc={doc} showCategories />
              </div>
            )
          })}
        </div>
      </Gutter>
    </div>
  )
}
