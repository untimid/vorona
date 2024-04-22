import * as icons from '@heroicons/react/24/outline'
import type { Block } from 'payload/types'

import { invertBackground } from '../../fields/invertBackground'
import richText from '../../fields/richText'

// TODO: maybe moove to separate common constants file
export const COLUMNS_SM = [
  { value: '1', className: 'sm:gap-4 sm:grid-cols-1' },
  { value: '2', className: 'sm:gap-4 sm:grid-cols-2' },
]
export const COLUMNS_MD = [
  { value: '1', className: 'md:gap-8 md:grid-cols-1' },
  { value: '2', className: 'md:gap-8 md:grid-cols-2' },
  { value: '3', className: 'md:gap-8 md:grid-cols-3' },
  { value: '4', className: 'md:gap-8 md:grid-cols-4' },
]
export const COLUMNS_LG = [
  { value: '1', className: 'lg:gap-12 lg:grid-cols-1' },
  { value: '2', className: 'lg:gap-12 lg:grid-cols-2' },
  { value: '3', className: 'lg:gap-12 lg:grid-cols-3' },
  { value: '4', className: 'lg:gap-12 lg:grid-cols-4' },
  { value: '5', className: 'lg:gap-12 lg:grid-cols-5' },
  { value: '6', className: 'lg:gap-12 lg:grid-cols-6' },
]

const tipFields: Block['fields'] = [
  {
    name: 'image',
    type: 'upload',
    label: {
      en: 'Image',
      ru: 'Картинка',
    },
    relationTo: 'media',
  },
  // {
  //   type: 'select',
  //   name: 'icon',
  //   label: {
  //     en: 'Icon',
  //     ru: 'Иконка',
  //   },
  //   // TODO: refactor to separated component IconSelector
  //   options: icons
  //     ? Object.keys(icons).map(icon => ({
  //         value: icon,
  //         lable: icon,
  //         label: icon,
  //       }))
  //     : [],
  // },
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

export const Tips: Block = {
  slug: 'tips',
  labels: {
    singular: {
      en: 'Tips list',
      ru: 'Заметки списком',
    },
    plural: {
      en: 'Tips lists',
      ru: 'Списки заметок',
    },
  },
  fields: [
    invertBackground,
    {
      type: 'radio',
      name: 'columnsSm',
      label: {
        en: 'Columns on mobile',
        ru: 'Колонок на мобилке',
      },
      options: COLUMNS_SM.map(option => ({
        label: option.value,
        value: option.value,
      })),
    },
    {
      type: 'radio',
      name: 'columnsMd',
      label: {
        en: 'Columns on tablet',
        ru: 'Колонок на планшете',
      },
      options: COLUMNS_MD.map(option => ({
        label: option.value,
        value: option.value,
      })),
    },
    {
      type: 'radio',
      name: 'columnsLg',
      label: {
        en: 'Columns on large',
        ru: 'Колонок на компе',
      },
      options: COLUMNS_LG.map(option => ({
        label: option.value,
        value: option.value,
      })),
    },
    {
      name: 'tipItems',
      label: {
        en: 'Elements',
        ru: 'Элементы',
      },
      type: 'array',
      fields: tipFields,
    },
  ],
}
