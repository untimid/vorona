import type { Block } from 'payload/types'

import { invertBackground } from '../../fields/invertBackground'

export const VoronaHome: Block = {
  slug: 'voronaHome',
  fields: [
    invertBackground,
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
