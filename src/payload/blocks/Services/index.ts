import type { Block } from 'payload/types'

import { BgColorSelectComponent } from '../../fields/colorSelect/component'
import richText from '../../fields/richText'
import { commonBlockFields } from '../commonBlockFields'

export const Services: Block = {
  slug: 'services',
  labels: {
    singular: {
      en: 'Services',
      ru: 'Услуги',
    },
    plural: {
      en: 'Services blocks',
      ru: 'Блоки с услугами',
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
      name: 'servicesGroups',
      type: 'array',
      required: true,
      label: {
        en: 'Services group',
        ru: 'Группа Услуг',
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          label: {
            en: 'Services group title',
            ru: 'Название группы услуг',
          },
          localized: true,
          required: true,
        },
        {
          name: 'color',
          label: {
            en: 'Services chips bg-color',
            ru: 'Цвет фона у услуг',
          },
          type: 'text',
          admin: {
            components: {
              Field: BgColorSelectComponent,
            },
          },
        },
        {
          name: 'services',
          type: 'array',
          required: true,
          label: {
            en: 'Services',
            ru: 'Услуги',
          },
          fields: [
            {
              name: 'title',
              type: 'text',
              label: {
                en: 'Service title',
                ru: 'Название услуги',
              },
              localized: true,
              required: true,
            },
          ],
        },
      ],
    },
  ],
}
