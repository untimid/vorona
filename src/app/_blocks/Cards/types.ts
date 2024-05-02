import type { Project } from '../../../payload/payload-types'
import type { CommonBlockProps } from '../commonTypes'

export type CardsProps = Extract<Project['layout'][0], { blockType: 'cards' }> & CommonBlockProps
