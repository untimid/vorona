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

export const PROJECTS = `
  query Projects {
    Projects(limit: 300) {
      docs {
        slug
      }
    }
  }
`

export const PROJECT = `
  query Project($slug: String, $draft: Boolean) {
    Projects(where: { slug: { equals: $slug }}, limit: 1, draft: $draft) {
      docs {
        id
        title
        categories {
          title
        }
        createdAt
        hero {
          ${HERO}
        }
        layout {
          ${CONTENT}
          ${CALL_TO_ACTION}
          ${CONTENT}
          ${MEDIA_BLOCK}
          ${ARCHIVE_BLOCK}
          ${CARDS}
          ${QUOTE}
          ${TEAM}
          ${SERVICES}
          ${PRINCIPLES}
          ${PRICING}
          ${CONTACT_FORM}
          ${AUDIENCE}
        }
        relatedPosts {
          id
          slug
          title
          ${META}
        }
        ${META}
      }
    }
  }
`
