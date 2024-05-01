import type { Project } from '../../../payload/payload-types'

export type CardsProps = Extract<Project['layout'][0], { blockType: 'cards' }>
