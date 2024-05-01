import type { GlobalConfig } from 'payload/types'

import link from '../fields/link'

export const Header: GlobalConfig = {
  slug: 'header',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'logoLight',
      type: 'upload',
      label: {
        en: 'Logo for light theme',
        ru: 'Лого для светлой темы',
      },
      relationTo: 'media',
    },
    {
      name: 'logoDark',
      type: 'upload',
      label: {
        en: 'Logo for dark theme',
        ru: 'Лого для темной темы',
      },
      relationTo: 'media',
    },
    {
      name: 'navItems',
      type: 'array',
      maxRows: 6,
      fields: [
        link({
          appearances: false,
        }),
      ],
    },
  ],
}
