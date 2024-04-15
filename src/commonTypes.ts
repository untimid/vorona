import type React from 'react'
type IconSVGProps = React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> &
  React.RefAttributes<SVGSVGElement>
type IconProps = IconSVGProps & {
  title?: string
  titleId?: string
}
// TS Type for heroicons set
export type HeroIconType = React.FC<IconProps>
