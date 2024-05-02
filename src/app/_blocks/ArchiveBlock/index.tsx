import React from 'react'

import { CollectionArchive } from '../../_components/CollectionArchive'
import { Gutter } from '../../_components/Gutter'
import RichText from '../../_components/RichText'
import { CommonBlockProps } from '../commonTypes'
import { ArchiveBlockProps } from './types'

export const ArchiveBlock: React.FC<ArchiveBlockProps & CommonBlockProps> = props => {
  const {
    introContent,
    id,
    relationTo,
    populateBy,
    limit,
    populatedDocs,
    populatedDocsTotal,
    selectedDocs,
    categories,
  } = props

  return (
    <div id={`block-${id}`}>
      {introContent && (
        <Gutter>
          <RichText content={introContent} />
        </Gutter>
      )}
      <CollectionArchive
        populateBy={populateBy}
        relationTo={relationTo}
        populatedDocs={populatedDocs}
        populatedDocsTotal={populatedDocsTotal}
        selectedDocs={selectedDocs}
        categories={categories}
        limit={limit}
        sort="-publishedAt"
      />
    </div>
  )
}
