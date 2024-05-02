import {
  ARCHIVE_BLOCK,
  AUDIENCE,
  CALL_TO_ACTION,
  CARDS,
  CONTACT_FORM,
  CONTENT,
  MEDIA_BLOCK,
  PRICING,
  PRINCIPLES,
  QUOTE,
  SERVICES,
  TEAM,
} from './blocks'
import { HERO } from './hero'
import { META } from './meta'

export const PAGES = `
  query Pages {
    Pages(limit: 300)  {
      docs {
        slug
      }
    }
  }
`

export const PAGE = `
  query Page($slug: String, $draft: Boolean) {
    Pages(where: { slug: { equals: $slug }}, limit: 1, draft: $draft) {
      docs {
        id
        title
        hero {
          ${HERO}
        }
        layout {
          ${CONTENT}
          ${CALL_TO_ACTION}
          ${CONTENT}
          ${MEDIA_BLOCK}
          ${ARCHIVE_BLOCK}
          ${QUOTE}
          ${CARDS}
          ${TEAM}
          ${SERVICES}
          ${PRINCIPLES}
          ${PRICING}
          ${CONTACT_FORM}
          ${AUDIENCE}
        }
        ${META}
      }
    }
  }
`
