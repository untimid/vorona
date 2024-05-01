import type { Block } from 'payload/types'

import richText from '../../fields/richText'
import { commonBlockFields } from '../commonBlockFields'

export const ContactForm: Block = {
  slug: 'contactForm',
  labels: {
    singular: {
      en: 'Contact Form',
      ru: 'Форма обратной связи',
    },
    plural: {
      en: 'Contact Forms',
      ru: 'Формы обратной связи',
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
      type: 'group',
      name: 'nameInput',
      label: {
        en: 'Name field',
        ru: 'Поле "Имя"',
      },
      fields: [
        {
          name: 'label',
          type: 'text',
          label: {
            en: 'Label',
            ru: 'Лейбл',
          },
          localized: true,
        },
        {
          name: 'placeholder',
          type: 'text',
          label: {
            en: 'Placeholder',
            ru: 'Плейсхолдер',
          },
          localized: true,
        },
      ],
    },
    {
      type: 'group',
      name: 'emailInput',
      label: {
        en: 'Email field',
        ru: 'Поле "Email"',
      },
      fields: [
        {
          name: 'label',
          type: 'text',
          label: {
            en: 'Label',
            ru: 'Лейбл',
          },
          localized: true,
        },
        {
          name: 'placeholder',
          type: 'text',
          label: {
            en: 'Placeholder',
            ru: 'Плейсхолдер',
          },
          localized: true,
        },
      ],
    },
    {
      type: 'group',
      name: 'descriptionInput',
      label: {
        en: 'Descriptoin field',
        ru: 'Поле "Описание"',
      },
      fields: [
        {
          name: 'label',
          type: 'text',
          label: {
            en: 'Label',
            ru: 'Лейбл',
          },
          localized: true,
        },
        {
          name: 'placeholder',
          type: 'text',
          label: {
            en: 'Placeholder',
            ru: 'Плейсхолдер',
          },
          localized: true,
        },
      ],
    },
    richText({
      name: 'agreementCheckboxText',
      label: {
        en: 'Agreement checkbox text',
        ru: 'Описание рядом с согласием на обработку данных',
      },
      localized: true,
    }),
    {
      name: 'submitButtonText',
      type: 'text',
      label: {
        en: 'Submit button text',
        ru: 'Надпись на кнопке отправки формы',
      },
      localized: true,
    },
  ],
}
