import type { Block } from 'payload/types'

import richText from '../../fields/richText'
import { commonBlockFields } from '../commonBlockFields'

export const Quote: Block = {
  slug: 'quote',
  labels: {
    singular: {
      en: 'Quote/Review',
      ru: 'Цитата/Отзыв',
    },
    plural: {
      en: 'Quotes/Reviews',
      ru: 'Цитаты/Отзывы',
    },
  },
  fields: [
    ...commonBlockFields,
    richText({
      name: 'content',
      label: {
        en: 'Content',
        ru: 'Содержание',
      },
      localized: true,
      required: true,
    }),
    {
      name: 'name',
      type: 'text',
      label: {
        en: 'Name',
        ru: 'Имя',
      },
      required: true,
    },
    {
      name: 'role',
      type: 'text',
      label: {
        en: 'Role',
        ru: 'Должность',
      },
      required: true,
    },
    {
      name: 'company',
      type: 'text',
      label: {
        en: 'Company',
        ru: 'Компания',
      },
    },
    {
      name: 'photo',
      type: 'upload',
      label: {
        en: 'Photo',
        ru: 'Фото',
      },
      relationTo: 'media',
    },
  ],
}
