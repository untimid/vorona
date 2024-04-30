import * as icons from '@heroicons/react/24/outline'
import type { Block } from 'payload/types'

import richText from '../../fields/richText'
import { commonBlockFields } from '../commonBlockFields'

export const Pricing: Block = {
  slug: 'pricing',
  labels: {
    singular: {
      en: 'Pricing',
      ru: 'Ценообразование',
    },
    plural: {
      en: 'Pricing blocks',
      ru: 'Блоки ценообразование',
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
    }),
    {
      type: 'array',
      name: 'highlightedPrices',
      label: {
        en: 'Highlighted prices',
        ru: ' Выделенные цены',
      },
      fields: [
        {
          name: 'rate',
          type: 'text',
          label: {
            en: 'Rate',
            ru: 'Цена',
          },
        },
        richText({
          name: 'description',
          label: {
            en: 'Description',
            ru: 'Описание',
          },
        }),
      ],
    },
    {
      type: 'array',
      name: 'tips',
      label: {
        en: 'Tips about prices',
        ru: ' Заметки про цены',
      },
      fields: [
        {
          type: 'select',
          name: 'icon',
          label: {
            en: 'Icon (https://heroicons.dev/)',
            ru: 'Иконка (выбрать тут https://heroicons.dev/ - 24px outline)',
          },
          // TODO: refactor to separated component IconSelector
          options: icons
            ? Object.keys(icons).map(icon => ({
                value: icon,
                label: icon,
              }))
            : [],
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
        }),
      ],
    },
  ],
}
