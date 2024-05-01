import type { Block } from 'payload/types'

import richText from '../../fields/richText'
import { commonBlockFields } from '../commonBlockFields'

export const FormBlock: Block = {
  slug: 'formBlock',
  labels: {
    singular: 'Form Block',
    plural: 'Form Blocks',
  },
  graphQL: {
    singularName: 'FormBlock',
  },
  fields: [
    ...commonBlockFields,
    {
      name: 'form',
      type: 'relationship',
      relationTo: 'forms',
      required: true,
    },
    {
      name: 'enableIntro',
      label: {
        en: 'Enable Intro Content',
        ru: 'Добавить вступление',
      },
      localized: true,
      type: 'checkbox',
    },
    richText({
      name: 'introContent',
      label: {
        en: 'Intro Content',
        ru: 'Вступление',
      },
      localized: true,
      admin: {
        condition: (_, { enableIntro }) => Boolean(enableIntro),
      },
    }),
  ],
}
