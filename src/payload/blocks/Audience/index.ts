import type { Block } from 'payload/types'

import richText from '../../fields/richText'
import { commonBlockFields } from '../commonBlockFields'

export const Audience: Block = {
  slug: 'audience',
  labels: {
    singular: {
      en: 'Audience',
      ru: 'Аудитория (кому)',
    },
    plural: {
      en: 'Audience blocks',
      ru: 'Блоки с аудиторией',
    },
  },
  fields: [
    ...commonBlockFields,
    richText({
      name: 'description',
      label: {
        en: 'Description',
        ru: 'Описание',
      },
      localized: true,
      required: false,
    }),
    {
      name: 'audienceItems',
      type: 'array',
      label: {
        en: 'Audience type',
        ru: 'Вид целевой аудитории (для кого)',
      },
      fields: [
        {
          name: 'image',
          type: 'upload',
          label: {
            en: 'Image',
            ru: 'Изображение',
          },
          relationTo: 'media',
        },
        {
          name: 'title',
          type: 'text',
          label: {
            en: 'Title',
            ru: 'Заголовок',
          },
        },
        richText({
          name: 'description',
          label: {
            en: 'Description',
            ru: 'Описание',
          },
          localized: true,
        }),
      ],
    },
  ],
}
