import type { GlobalConfig } from 'payload/types'

export const Settings: GlobalConfig = {
  slug: 'settings',
  typescript: {
    interface: 'Settings',
  },
  graphQL: {
    name: 'Settings',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'postsPage',
      type: 'relationship',
      relationTo: 'pages',
      label: {
        en: 'Posts page',
        ru: 'Страница с постами',
      },
    },
    {
      name: 'projectsPage',
      type: 'relationship',
      relationTo: 'pages',
      label: {
        en: 'Projects page',
        ru: 'Страница проектов',
      },
    },
  ],
}
