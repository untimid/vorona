import type { Block } from 'payload/types'

import { commonBlockFields } from '../commonBlockFields'

export const VoronaHome: Block = {
  slug: 'voronaHome',
  fields: [
    ...commonBlockFields,
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'testProp',
      type: 'text',
    },
  ],
}
