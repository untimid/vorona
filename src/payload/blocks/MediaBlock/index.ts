import type { Block } from 'payload/types'

import { invertBackground } from '../../fields/invertBackground'
import richText from '../../fields/richText'

export const MediaBlock: Block = {
  slug: 'mediaBlock',
  fields: [
    invertBackground,
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
