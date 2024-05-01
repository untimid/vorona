import type { Block } from 'payload/types'

import richText from '../../fields/richText'
import { commonBlockFields } from '../commonBlockFields'

export const Team: Block = {
  slug: 'team',
  labels: {
    singular: {
      en: 'Team',
      ru: 'Команда',
    },
    plural: {
      en: 'Team blocks',
      ru: 'Блоки с командой',
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
      name: 'persons',
      type: 'array',
      required: true,
      label: {
        en: 'Team members',
        ru: 'Члены команды',
      },
      fields: [
        {
          name: 'photo',
          type: 'upload',
          label: {
            en: 'Photo',
            ru: 'Фото',
          },
          relationTo: 'media',
          required: true,
        },
        {
          name: 'name',
          type: 'text',
          label: {
            en: 'Name',
            ru: 'Имя',
          },
          localized: true,
          required: true,
        },
        {
          name: 'role',
          type: 'text',
          label: {
            en: 'Role',
            ru: 'Должность',
          },
          localized: true,
        },
        {
          name: 'highlightHeader',
          type: 'text',
          label: {
            en: 'Highlight header',
            ru: 'Заголовок хайлайта',
          },
          localized: true,
        },
        {
          name: 'highlightDescription',
          type: 'text',
          label: {
            en: 'Highlight header',
            ru: 'Текст хайлайта',
          },
          localized: true,
        },
        richText({
          name: 'description',
          label: {
            en: 'Description',
            ru: 'Описание',
          },
          localized: true,
        }),
        {
          name: 'competences',
          type: 'array',
          required: true,
          label: {
            en: 'Competences',
            ru: 'Компетенции',
          },
          fields: [
            {
              name: 'title',
              type: 'text',
              label: {
                en: 'Competence title',
                ru: 'Название компетенции',
              },
              localized: true,
            },
          ],
        },
      ],
    },
  ],
}
