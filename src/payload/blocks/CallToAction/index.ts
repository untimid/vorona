import type { Block } from 'payload/types'

import linkGroup from '../../fields/linkGroup'
import richText from '../../fields/richText'
import { commonBlockFields } from '../commonBlockFields'

export const CallToAction: Block = {
  slug: 'cta',
  labels: {
    singular: {
      en: 'Call to Action',
      ru: 'CTA - призыв к действию',
    },
    plural: {
      en: 'Calls to Action',
      ru: 'CTA - призывы к действию',
    },
  },
  fields: [
    ...commonBlockFields,
    richText(),
    linkGroup({
      appearances: ['primary', 'secondary'],
      overrides: {
        maxRows: 2,
      },
    }),
  ],
}
