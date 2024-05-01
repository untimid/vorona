import { nextui } from '@nextui-org/react'
import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

import {
  COLOR_GRADES,
  COLOR_PREFIXES,
  DEFAULT_COLORS_WITH_GRADES,
} from './src/payload/fields/constantValues/colorsMap'

export default {
  important: true,
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        unbounded: ['var(--font-unbounded), font-sans'],
        spectral: [
          'var(--font-spectral)',
          'Georgia',
          'Cambria',
          'Times New Roman',
          'Times',
          'serif',
        ],
        ibmPlexSans: [
          'var(--font-ibm-plex-sans)',
          'system-ui',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji',
        ],
      },
    },
  },
  darkMode: 'class',
  plugins: [
    nextui({
      prefix: 'vorona',
      // ƒdefaultTheme: 'light',
    }),
    plugin(({ addComponents }) => {
      addComponents({
        // TYPOGRAPHY - includes margins as common style
        '.vrn-h1': {
          '@apply font-unbounded text-3xl sm:text-5xl md:text-6xl font-extrabold vrn-mb-l': '',
        },
        '.vrn-h2': {
          '@apply font-unbounded text-3xl sm:text-5xl font-extrabold vrn-mb-l': '',
        },
        '.vrn-h3': {
          '@apply font-unbounded text-2xl font-extrabold leading-6 vrn-mb-m': '',
        },
        '.vrn-h4': {
          '@apply font-unbounded text-xl font-extrabold vrn-mb-m': '',
        },
        '.vrn-h5': {
          '@apply font-unbounded font-extrabold vrn-mb-m': '',
        },
        '.vrn-h6': {
          '@apply font-serif font-bold vrn-mb-m': '',
        },
        '.vrn-p': {
          '@apply font-ibmPlexSans vrn-mb-m text-lg': '',
        },
        '.vrn-italic': {
          '@apply font-spectral vrn-mb-m text-lg italic': '',
        },
        // SMALL paddings and margins
        '.vrn-gap-s': {
          '@apply gap-2': '',
        },
        '.vrn-p-s': {
          '@apply p-2': '',
        },
        '.vrn-py-s': {
          '@apply py-2': '',
        },
        '.vrn-px-s': {
          '@apply px-2': '',
        },
        '.vrn-pt-s': {
          '@apply pt-2': '',
        },
        '.vrn-pb-s': {
          '@apply pb-2': '',
        },
        '.vrn-ps-s': {
          '@apply ps-2': '',
        },
        '.vrn-pe-s': {
          '@apply pe-2': '',
        },
        '.vrn-m-s': {
          '@apply m-2': '',
        },
        '.vrn-my-s': {
          '@apply my-2': '',
        },
        '.vrn-mx-s': {
          '@apply mx-2': '',
        },
        '.vrn-mt-s': {
          '@apply mt-2': '',
        },
        '.vrn-mb-s': {
          '@apply mb-2': '',
        },
        '.vrn-ms-s': {
          '@apply ms-2': '',
        },
        '.vrn-me-s': {
          '@apply me-2': '',
        },
        // MEDIUM paddings and margins
        '.vrn-gap-m': {
          '@apply gap-4': '',
        },
        '.vrn-p-m': {
          '@apply p-4': '',
        },
        '.vrn-py-m': {
          '@apply py-4': '',
        },
        '.vrn-px-m': {
          '@apply px-4': '',
        },
        '.vrn-pt-m': {
          '@apply pt-4': '',
        },
        '.vrn-pb-m': {
          '@apply pb-4': '',
        },
        '.vrn-ps-m': {
          '@apply ps-4': '',
        },
        '.vrn-pe-m': {
          '@apply pe-4': '',
        },
        '.vrn-m-m': {
          '@apply m-4': '',
        },
        '.vrn-my-m': {
          '@apply my-4': '',
        },
        '.vrn-mx-m': {
          '@apply mx-4': '',
        },
        '.vrn-mt-m': {
          '@apply mt-4': '',
        },
        '.vrn-mb-m': {
          '@apply mb-4': '',
        },
        '.vrn-ms-m': {
          '@apply ms-4': '',
        },
        '.vrn-me-m': {
          '@apply me-4': '',
        },
        // LARGE paddings and margins
        '.vrn-gap-l': {
          '@apply gap-10': '',
        },
        '.vrn-p-l': {
          '@apply p-10': '',
        },
        '.vrn-py-l': {
          '@apply py-10': '',
        },
        '.vrn-px-l': {
          '@apply px-10': '',
        },
        '.vrn-pt-l': {
          '@apply pt-10': '',
        },
        '.vrn-pb-l': {
          '@apply pb-10': '',
        },
        '.vrn-ps-l': {
          '@apply ps-10': '',
        },
        '.vrn-pe-l': {
          '@apply pe-10': '',
        },
        '.vrn-m-l': {
          '@apply m-10': '',
        },
        '.vrn-my-l': {
          '@apply my-10': '',
        },
        '.vrn-mx-l': {
          '@apply mx-10': '',
        },
        '.vrn-mt-l': {
          '@apply mt-10': '',
        },
        '.vrn-mb-l': {
          '@apply mb-10': '',
        },
        '.vrn-ms-l': {
          '@apply ms-10': '',
        },
        '.vrn-me-l': {
          '@apply me-10': '',
        },
        // EXTRA-LARGE paddings and margins
        '.vrn-gap-xl': {
          '@apply gap-16': '',
        },
        '.vrn-p-xl': {
          '@apply p-16': '',
        },
        '.vrn-py-xl': {
          '@apply py-16': '',
        },
        '.vrn-px-xl': {
          '@apply px-16': '',
        },
        '.vrn-pt-xl': {
          '@apply pt-16': '',
        },
        '.vrn-pb-xl': {
          '@apply pb-16': '',
        },
        '.vrn-ps-xl': {
          '@apply ps-16': '',
        },
        '.vrn-pe-xl': {
          '@apply pe-16': '',
        },
        '.vrn-m-xl': {
          '@apply m-16': '',
        },
        '.vrn-my-xl': {
          '@apply my-16': '',
        },
        '.vrn-mx-xl': {
          '@apply mx-16': '',
        },
        '.vrn-mt-xl': {
          '@apply mt-16': '',
        },
        '.vrn-mb-xl': {
          '@apply mb-16': '',
        },
        '.vrn-ms-xl': {
          '@apply ms-16': '',
        },
        '.vrn-me-xl': {
          '@apply me-16': '',
        },
      })
    }),
  ],
  safelist: [
    {
      // Need to use TW color classes as options to be set in admin
      pattern: new RegExp(
        `(${COLOR_PREFIXES.join('|')})(${DEFAULT_COLORS_WITH_GRADES.join(
          '|',
        )})-(${COLOR_GRADES.join('|')})`,
      ),
    },
  ],
} satisfies Config
