import { nextui } from '@nextui-org/react'
import type { Config } from 'tailwindcss'

import {
  COLOR_GRADES,
  DEFAULT_COLORS_WITH_GRADES,
} from './src/payload/fields/constantValues/colorsMap'

export default {
  important: true,
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [
    nextui({
      defaultTheme: 'light',
    }),
  ],
  safelist: [
    {
      // Need to use TW color classes as options to be set in admin
      pattern: new RegExp(
        `bg-(${DEFAULT_COLORS_WITH_GRADES.join('|')})-(${COLOR_GRADES.join('|')})`,
      ),
    },
  ],
} satisfies Config
