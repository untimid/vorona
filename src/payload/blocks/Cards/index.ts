import * as icons from '@heroicons/react/24/outline'
import type { Block, Option } from 'payload/types'

import { BgColorSelectField } from '../../fields/colorSelect/field'
import richText from '../../fields/richText'
import { commonBlockFields } from '../commonBlockFields'

// TODO: maybe move to separate common constants file

enum SM_OPTIONS {
  ONE = 'one',
  TWO = 'two',
}
export const COLUMNS_SM: Record<SM_OPTIONS, string> = {
  [SM_OPTIONS.ONE]: 'gap-8 grid-cols-1',
  [SM_OPTIONS.TWO]: 'gap-8 grid-cols-2',
}
enum MD_OPTIONS {
  ONE = 'one',
  TWO = 'two',
  THREE = 'three',
  FOUR = 'four',
}
export const COLUMNS_MD: Record<MD_OPTIONS, string> = {
  [MD_OPTIONS.ONE]: 'md:gap-8 md:grid-cols-1',
  [MD_OPTIONS.TWO]: 'md:gap-8 md:grid-cols-2',
  [MD_OPTIONS.THREE]: 'md:gap-8 md:grid-cols-3',
  [MD_OPTIONS.FOUR]: 'md:gap-8 md:grid-cols-4',
}

enum LG_OPTIONS {
  ONE = 'one',
  TWO = 'two',
  THREE = 'three',
  FOUR = 'four',
  SIX = 'six',
}
export const COLUMNS_LG: Record<LG_OPTIONS, string> = {
  [LG_OPTIONS.ONE]: 'lg:gap-12 lg:grid-cols-1',
  [LG_OPTIONS.TWO]: 'lg:gap-12 lg:grid-cols-2',
  [LG_OPTIONS.THREE]: 'lg:gap-12 lg:grid-cols-3',
  [LG_OPTIONS.FOUR]: 'lg:gap-12 lg:grid-cols-4',
  [LG_OPTIONS.SIX]: 'lg:gap-12 lg:grid-cols-6',
}

export const getCardsClassNames = (
  smValue: SM_OPTIONS[number],
  mdValue: MD_OPTIONS[number],
  lgValue: LG_OPTIONS[number],
): string =>
  [COLUMNS_SM[smValue], COLUMNS_MD[mdValue], COLUMNS_LG[lgValue]].filter(Boolean).join(' ')

export enum ImageSizeOptions {
  SM = 'sm',
  MD = 'md',
  LG = 'lg',
}

export type ImageSizeValue = 'h-40' | 'h-60' | 'h-80'

export const IMAGE_SIZES: Record<ImageSizeOptions, ImageSizeValue> = {
  [ImageSizeOptions.SM]: 'h-40',
  [ImageSizeOptions.MD]: 'h-60',
  [ImageSizeOptions.LG]: 'h-80',
}

//TODO: when payload fixes error with generating options, may try to use this
const getKeys = <T>(obj: T): Array<keyof T> => Object.keys(obj) as Array<keyof T>

const createOptions = <T extends Record<string, string>, K extends keyof T>(
  optionsObject: Record<K, T[K]>,
): Option[] => {
  const keys = getKeys(optionsObject)
  return keys.map(option => ({
    label: String(option),
    value: String(optionsObject[option]),
  }))
}

/**
 * color selector + add to chips
 */

const cardFields: Block['fields'] = [
  {
    name: 'image',
    type: 'upload',
    label: {
      en: 'Image',
      ru: 'Картинка',
    },
    relationTo: 'media',
  },
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
    name: 'title',
    type: 'text',
    label: {
      en: 'Title',
      ru: 'Заголовок',
    },
    required: true,
  },
  {
    name: 'subtitle',
    type: 'text',
    label: {
      en: 'Subtitle',
      ru: 'Подзаголовок',
    },
  },
  {
    name: 'chips',
    type: 'array',
    label: {
      en: 'Chips',
      ru: 'Чипсы',
    },
    maxRows: 8,
    fields: [
      {
        name: 'title',
        type: 'text',
        label: {
          en: 'Title',
          ru: 'Тайтл',
        },
      },
      BgColorSelectField,
    ],
  },
  richText({
    name: 'content',
    label: {
      en: 'Content',
      ru: 'Содержание',
    },
    localized: true,
    required: true,
  }),
]

export const Cards: Block = {
  slug: 'cards',
  labels: {
    singular: {
      en: 'Cards',
      ru: 'Карточки',
    },
    plural: {
      en: 'Cards blocks',
      ru: 'Блоки карточек',
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
      type: 'radio',
      name: 'columnsSm',
      label: {
        en: 'Columns on mobile',
        ru: 'Колонок на мобилке',
      },
      options: [
        { label: '1', value: SM_OPTIONS.ONE },
        { label: '2', value: SM_OPTIONS.TWO },
      ],
    },
    {
      type: 'radio',
      name: 'columnsMd',
      label: {
        en: 'Columns on tablet',
        ru: 'Колонок на планшете',
      },
      options: [
        { label: '1', value: MD_OPTIONS.ONE },
        { label: '2', value: MD_OPTIONS.TWO },
        { label: '3', value: MD_OPTIONS.THREE },
        { label: '4', value: MD_OPTIONS.FOUR },
      ],
    },
    {
      type: 'radio',
      name: 'columnsLg',
      label: {
        en: 'Columns on large',
        ru: 'Колонок на компе',
      },
      options: [
        { label: '1', value: LG_OPTIONS.ONE },
        { label: '2', value: LG_OPTIONS.TWO },
        { label: '3', value: LG_OPTIONS.THREE },
        { label: '4', value: LG_OPTIONS.FOUR },
        { label: '6', value: LG_OPTIONS.SIX },
      ],
    },
    {
      type: 'radio',
      name: 'radius',
      label: {
        en: 'Round corners',
        ru: 'Скругление углов',
      },
      options: [
        {
          label: {
            en: 'none',
            ru: 'нет',
          },
          value: 'none',
        },
        {
          label: {
            en: 'small',
            ru: 'маленький',
          },
          value: 'sm',
        },
        {
          label: {
            en: 'medium',
            ru: 'средний',
          },
          value: 'md',
        },
        {
          label: {
            en: 'large',
            ru: 'большой',
          },
          value: 'lg',
        },
      ],
      defaultValue: 'sm',
    },
    {
      type: 'radio',
      name: 'shadow',
      label: {
        en: 'Shadow',
        ru: 'Тени',
      },
      options: [
        {
          label: {
            en: 'none',
            ru: 'нет',
          },
          value: 'none',
        },
        {
          label: {
            en: 'small',
            ru: 'маленький',
          },
          value: 'sm',
        },
        {
          label: {
            en: 'medium',
            ru: 'средний',
          },
          value: 'md',
        },
        {
          label: {
            en: 'large',
            ru: 'большой',
          },
          value: 'lg',
        },
      ],
      defaultValue: 'sm',
    },
    {
      type: 'select',
      name: 'imageHeight',
      label: {
        en: 'Image height',
        ru: 'Высота картинки',
      },
      options: [...createOptions(IMAGE_SIZES)],
      defaultValue: 'sm',
    },
    {
      name: 'cardItems',
      label: {
        en: 'Elements',
        ru: 'Элементы',
      },
      type: 'array',
      fields: cardFields,
      required: true,
    },
  ],
}
