import type { Block } from 'payload/types'

import richText from '../../fields/richText'
import { commonBlockFields } from '../commonBlockFields'

export const MediaBlock: Block = {
  slug: 'mediaBlock',
  fields: [
    ...commonBlockFields,
    {
      name: 'position',
      type: 'select',
      defaultValue: 'default',
      options: [
        {
          label: {
            en: 'Default',
            ru: 'Стандарт',
          },
          value: 'default',
        },
        {
          label: {
            en: 'Fullscreen',
            ru: 'Полноэкраный',
          },
          value: 'fullscreen',
        },
      ],
    },
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    richText({
      name: 'content',
      label: {
        en: 'Content',
        ru: 'Содержание',
      },
      localized: true,
    }),
  ],
}
