import * as icons from '@heroicons/react/24/outline'
import type { Block } from 'payload/types'

import { BgColorSelectComponent } from '../../fields/colorSelect/component'
import richText from '../../fields/richText'
import { commonBlockFields } from '../commonBlockFields'

const pricingPrincipleFields: Block['fields'] = [
  {
    name: 'title',
    type: 'text',
    label: {
      en: 'Principle title',
      ru: 'Заголовок принципа',
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
]

const collaborationPrincipleFields: Block['fields'] = [
  {
    name: 'title',
    type: 'text',
    label: {
      en: 'Principle title',
      ru: 'Заголовок принципа',
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
    name: 'jobs',
    type: 'text',
    label: {
      en: 'Services',
      ru: 'Услуги',
    },
    localized: true,
  },
]

const processPrincipleFields: Block['fields'] = [
  {
    name: 'title',
    type: 'text',
    label: {
      en: 'Principle title',
      ru: 'Заголовок принципа',
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
    name: 'percentage',
    type: 'number',
    min: 0,
    max: 100,
    label: {
      en: 'Percentage of success',
      ru: 'Прогресс в процентах (будут показаны по возрастанию)',
    },
  },
]

export const Principles: Block = {
  slug: 'principles',
  labels: {
    singular: {
      en: 'Principles',
      ru: 'Принципы',
    },
    plural: {
      en: 'Principles blocks',
      ru: 'Блоки с Принципами',
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
      type: 'group',
      name: 'pricing',
      label: {
        en: 'Pricing principles',
        ru: 'Принципы ценообразования',
      },
      fields: [
        {
          name: 'videoSrc',
          type: 'text',
          label: {
            en: 'YouTube video link',
            ru: 'Ссылка на YouTube видео',
          },
        },
        {
          name: 'principles',
          type: 'array',
          label: {
            en: 'Pricing principles',
            ru: 'Ценовые принципы',
          },
          fields: pricingPrincipleFields,
        },
      ],
    },
    {
      type: 'group',
      name: 'processPrinciples',
      label: {
        en: 'Process principles',
        ru: 'Рабочий процесс - принципы',
      },
      fields: [
        richText({
          name: 'description',
          label: {
            en: 'Description',
            ru: 'Общее описание',
          },
          localized: true,
        }),
        {
          name: 'videoSrc',
          type: 'text',
          label: {
            en: 'YouTube video link',
            ru: 'Ссылка на YouTube видео',
          },
        },
        {
          name: 'stepDelay',
          type: 'number',
          min: 100,
          max: 10000,
          label: {
            en: 'Process animation delay',
            ru: 'Задержка анимации "процесс"',
          },
        },
        {
          name: 'typingDelay',
          type: 'number',
          min: 100,
          max: 2000,
          label: {
            en: 'Typing animatoin delay',
            ru: 'Задержка анимации "печать"',
          },
        },
        {
          name: 'steps',
          type: 'array',
          label: {
            en: 'Process step',
            ru: 'Этап процесса',
          },
          fields: processPrincipleFields,
        },
      ],
    },
    {
      type: 'group',
      name: 'collab',
      label: {
        en: 'Collaboration principles',
        ru: 'Принципы сотрудничества',
      },
      fields: [
        richText({
          name: 'description',
          label: {
            en: 'Description',
            ru: 'Общее описание',
          },
          localized: true,
        }),
        {
          name: 'videoSrc',
          type: 'text',
          label: {
            en: 'YouTube video link',
            ru: 'Ссылка на YouTube видео',
          },
        },
        {
          name: 'principles',
          type: 'array',
          label: {
            en: 'Principles',
            ru: 'Принципы',
          },
          fields: collaborationPrincipleFields,
        },
      ],
    },
  ],
}
