import type { Block } from 'payload/types'

import { FromColorSelectComponent, ToColorSelectComponent } from '../fields/colorSelect/component'
import { invertBackground } from '../fields/invertBackground'

const colorizedTextFields: Block['fields'] = [
  {
    name: 'textToColorize',
    label: {
      en: 'Text to colorize (case specific)',
      ru: 'Текст на покраску (точное написание)',
    },
    type: 'text',
  },
  {
    name: 'textColorFrom',
    label: {
      en: 'Text start color',
      ru: 'Начальный цвет текста',
    },
    type: 'text',
    admin: {
      components: {
        Field: FromColorSelectComponent,
      },
    },
  },
  {
    name: 'textColorTo',
    label: {
      en: 'Text end color',
      ru: 'Конечный цвет текста',
    },
    type: 'text',
    admin: {
      components: {
        Field: ToColorSelectComponent,
      },
    },
  },
  {
    name: 'textColorFromDark',
    label: {
      en: 'Text start color (dark theme)',
      ru: 'Начальный цвет текста (темная тема)',
    },
    type: 'text',
    admin: {
      components: {
        Field: FromColorSelectComponent,
      },
    },
  },
  {
    name: 'textColorToDark',
    label: {
      en: 'Text end color (dark theme)',
      ru: 'Конечный цвет текста (темная тема)',
    },
    type: 'text',
    admin: {
      components: {
        Field: ToColorSelectComponent,
      },
    },
  },
]

export const commonHeroFields: Block['fields'] = [
  invertBackground,
  {
    name: 'colorizeBlock',
    label: {
      en: 'Colorize block background',
      ru: 'Покрасить блок в кастомный цвет',
    },
    type: 'checkbox',
    defaultValue: false,
  },
  {
    name: 'blockColorFrom',
    label: {
      en: 'Block start color',
      ru: 'Начальный цвет блока',
    },
    type: 'text',
    admin: {
      condition: (_, siblingData) => siblingData.colorizeBlock,
      components: {
        Field: FromColorSelectComponent,
      },
    },
  },
  {
    name: 'blockColorTo',
    label: {
      en: 'Block end color',
      ru: 'Конечный цвет блока',
    },
    type: 'text',
    admin: {
      condition: (_, siblingData) => siblingData.colorizeBlock,
      components: {
        Field: ToColorSelectComponent,
      },
    },
  },
  {
    name: 'blockColorFromDark',
    label: {
      en: 'Block start color (dark theme)',
      ru: 'Начальный цвет блока (темная тема)',
    },
    type: 'text',
    admin: {
      condition: (_, siblingData) => siblingData.colorizeBlock,
      components: {
        Field: FromColorSelectComponent,
      },
    },
  },
  {
    name: 'blockColorToDark',
    label: {
      en: 'Block end color (dark theme)',
      ru: 'Конечный цвет блока (темная тема)',
    },
    type: 'text',
    admin: {
      condition: (_, siblingData) => siblingData.colorizeBlock,
      components: {
        Field: ToColorSelectComponent,
      },
    },
  },
  {
    name: 'header',
    type: 'text',
    label: {
      en: 'Header',
      ru: 'Заголовок блока',
    },
  },
  {
    name: 'enableColorizing',
    label: {
      en: 'Colorize title part',
      ru: 'Покрасить часть заголовка',
    },
    type: 'checkbox',
    defaultValue: false,
    admin: {
      condition: (_, siblingData) => Boolean(siblingData.header),
    },
  },
  {
    name: 'colorizeTemplates',
    type: 'array',
    label: {
      en: 'Header colorization templates',
      ru: 'Шаблоны для покраски заголовка',
    },
    labels: {
      singular: {
        en: 'Template',
        ru: 'Шаблон',
      },
      plural: {
        en: 'Templates',
        ru: 'Шаблоны',
      },
    },
    fields: colorizedTextFields,
    admin: {
      condition: (_, siblingData) => Boolean(siblingData.enableColorizing),
    },
  },
]
