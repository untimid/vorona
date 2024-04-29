import {
  ARCHIVE_BLOCK,
  CALL_TO_ACTION,
  CARDS,
  CONTENT,
  MEDIA_BLOCK,
  QUOTE,
  VORONA_HOME,
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
          ${VORONA_HOME}
          ${QUOTE}
          ${CARDS}
        }
        ${META}
      }
    }
  }
`
