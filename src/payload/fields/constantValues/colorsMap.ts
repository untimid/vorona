import colors from 'tailwindcss/colors'

export const DEFAULT_COLORS_MAP = colors
export type DefaultColorsNamesType = keyof typeof colors
export type ColorGradesType = keyof (typeof colors)['gray']
export const COLOR_GRADES: ColorGradesType[] = [
  '50',
  '100',
  '200',
  '300',
  '400',
  '500',
  '600',
  '700',
  '800',
  '900',
  '950',
]

export const DEFAULT_COLORS_SIMPLE: DefaultColorsNamesType[] = ['black', 'white']
export const DEFAULT_COLORS_WITH_GRADES: DefaultColorsNamesType[] = [
  'amber',
  'blue',
  'cyan',
  'emerald',
  'fuchsia',
  'gray',
  'green',
  'indigo',
  'lime',
  'neutral',
  'orange',
  'pink',
  'purple',
  'red',
  'rose',
  'sky',
  'slate',
  'stone',
  'teal',
  'violet',
  'yellow',
  'zinc',
]
export const ALL_COLORS = [...DEFAULT_COLORS_SIMPLE, ...DEFAULT_COLORS_WITH_GRADES]
