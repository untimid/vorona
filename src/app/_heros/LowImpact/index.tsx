import React from 'react'

import { Page } from '../../../payload/payload-types'
import { Gutter } from '../../_components/Gutter'
import RichText from '../../_components/RichText'
import { VerticalPadding } from '../../_components/VerticalPadding'

export const LowImpactHero: React.FC<Page['hero']> = ({ richText }) => {
  return (
    <Gutter>
      <div>
        <VerticalPadding>
          <RichText content={richText} />
        </VerticalPadding>
      </div>
    </Gutter>
  )
}
