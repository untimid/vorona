import type { RichTextElement } from '@payloadcms/richtext-slate/dist/types'

import label from './label'
import largeBody from './largeBody'

const elements: RichTextElement[] = [
  'blockquote',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'link',
  largeBody,
  label,
  'ol',
  'ul',
  'textAlign',
  'indent',
  'relationship',
  'upload',
]

export default elements
