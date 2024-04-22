import type { Block, Field } from 'payload/types'

import { invertBackground } from '../../fields/invertBackground'
import link from '../../fields/link'
import richText from '../../fields/richText'

const columnFields: Field[] = [
  {
    name: 'size',
    type: 'select',
    defaultValue: 'oneThird',
    options: [
      {
        value: 'oneThird',
        label: {
          en: 'One Third',
          ru: 'Треть ширины',
        },
      },
      {
        value: 'half',
        label: {
          en: 'Half',
          ru: 'Половина ширины',
        },
      },
      {
        value: 'twoThirds',
        label: {
          en: 'Two Thirds',
          ru: 'Две трети ширины',
        },
      },
      {
        value: 'full',
        label: {
          en: 'Full',
          ru: 'Полная ширина',
        },
      },
    ],
  },
  richText(),
  {
    name: 'enableLink',
    label: {
      en: 'Enable CTA Link',
      ru: 'Добавить CTA ссылку',
    },
    type: 'checkbox',
  },
  link({
    overrides: {
      admin: {
        condition: (_, { enableLink }) => Boolean(enableLink),
      },
    },
  }),
]

export const Content: Block = {
  slug: 'content',
  labels: {
    singular: {
      en: 'content layout',
      ru: 'контент лэйаут',
    },
    plural: {
      en: 'content layouts',
      ru: 'контент лэйауты',
    },
  },
  fields: [
    invertBackground,
    {
      name: 'columns',
      type: 'array',
      localized: true,
      fields: columnFields,
    },
  ],
}
