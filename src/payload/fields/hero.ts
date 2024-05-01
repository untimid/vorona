import type { Block, Field } from 'payload/types'

import { commonHeroFields } from './commonHeroFields'
import linkGroup from './linkGroup'
import richText from './richText'
import label from './richText/label'
import largeBody from './richText/largeBody'

const slideFields: Block['fields'] = [
  richText({
    name: 'slideContent',
    label: {
      en: 'Slide content',
      ru: 'Контент на слайде',
    },
    localized: true,
  }),
  {
    name: 'slideImage',
    type: 'upload',
    label: {
      en: 'Image',
      ru: 'Картинка',
    },
    relationTo: 'media',
  },
]

export const hero: Field = {
  name: 'hero',
  label: false,
  type: 'group',
  fields: [
    {
      type: 'select',
      name: 'type',
      label: {
        en: 'Type',
        ru: 'Вариант',
      },
      required: true,
      defaultValue: 'lowImpact',
      options: [
        {
          label: {
            en: 'None',
            ru: 'Оключить',
          },
          value: 'none',
        },
        {
          label: {
            en: 'High Impact',
            ru: 'Большой',
          },
          value: 'highImpact',
        },
        {
          label: {
            en: 'Medium Impact',
            ru: 'Средний',
          },
          value: 'mediumImpact',
        },
        {
          label: {
            en: 'Low Impact',
            ru: 'Маленький',
          },
          value: 'lowImpact',
        },
        {
          label: {
            en: 'Slider',
            ru: 'Слайдер',
          },
          value: 'slider',
        },
      ],
    },
    ...commonHeroFields,
    richText({
      admin: {
        elements: ['h1', largeBody, label, 'link'],
        leaves: [],
      },
    }),
    linkGroup({
      overrides: {
        maxRows: 2,
      },
    }),
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        condition: (_, { type } = {}) => ['highImpact', 'mediumImpact'].includes(type),
      },
    },
    {
      name: 'slider',
      type: 'array',
      required: true,
      label: {
        en: 'Slides',
        ru: 'Слайды',
      },
      admin: {
        condition: (_, { type } = {}) => type === 'slider',
      },
      fields: slideFields,
    },
  ],
}
