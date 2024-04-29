import type { Block } from 'payload/types'

import richText from '../../fields/richText'
import { commonBlockFields } from '../commonBlockFields'

export const Archive: Block = {
  slug: 'archive',
  labels: {
    singular: {
      en: 'Archive',
      ru: 'Архив',
    },
    plural: {
      en: 'Archives',
      ru: 'Архивы',
    },
  },
  fields: [
    ...commonBlockFields,
    richText({
      name: 'introContent',
      label: {
        en: 'Intro Content',
        ru: 'Вступление',
      },
      localized: true,
    }),
    {
      name: 'populateBy',
      type: 'select',
      defaultValue: 'collection',
      localized: true,
      options: [
        {
          label: {
            en: 'Collection',
            ru: 'Коллекция',
          },
          value: 'collection',
        },
        {
          label: {
            en: 'Individual Selection',
            ru: 'Выбор поштучно',
          },
          value: 'selection',
        },
      ],
    },
    {
      type: 'select',
      name: 'relationTo',
      label: {
        en: 'Collections To Show',
        ru: 'Какую коллекцию показывать',
      },
      localized: true,
      defaultValue: 'posts',
      admin: {
        condition: (_, siblingData) => siblingData.populateBy === 'collection',
      },
      options: [
        {
          label: {
            en: 'Posts',
            ru: 'Посты',
          },
          value: 'posts',
        },
        {
          label: {
            en: 'Projects',
            ru: 'Проекты',
          },
          value: 'projects',
        },
      ],
    },
    {
      type: 'relationship',
      name: 'categories',
      localized: true,
      label: {
        en: 'Categories To Show',
        ru: 'Категирии к показу',
      },
      relationTo: 'categories',
      hasMany: true,
      admin: {
        condition: (_, siblingData) => siblingData.populateBy === 'collection',
      },
    },
    {
      type: 'number',
      name: 'limit',
      label: {
        en: 'Limit',
        ru: 'Лимит',
      },
      localized: true,
      defaultValue: 10,
      admin: {
        condition: (_, siblingData) => siblingData.populateBy === 'collection',
        step: 1,
      },
    },
    {
      type: 'relationship',
      name: 'selectedDocs',
      label: {
        en: 'Selection',
        ru: 'Выбор',
      },
      localized: true,
      relationTo: ['posts', 'projects'],
      hasMany: true,
      admin: {
        condition: (_, siblingData) => siblingData.populateBy === 'selection',
      },
    },
    {
      type: 'relationship',
      name: 'populatedDocs',
      label: {
        en: 'Populated Docs',
        ru: 'Собранные документы',
      },
      localized: true,
      relationTo: ['posts', 'projects'],
      hasMany: true,
      admin: {
        disabled: true,
        description: 'This field is auto-populated after-read',
        condition: (_, siblingData) => siblingData.populateBy === 'collection',
      },
    },
    {
      type: 'number',
      name: 'populatedDocsTotal',
      label: {
        en: 'Populated Docs Total',
        ru: 'Итого документов собрано',
      },
      localized: true,
      admin: {
        step: 1,
        disabled: true,
        description: 'This field is auto-populated after-read',
        condition: (_, siblingData) => siblingData.populateBy === 'collection',
      },
    },
  ],
}
