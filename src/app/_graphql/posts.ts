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

export const POSTS = `
  query Posts {
    Posts(limit: 300) {
      docs {
        slug
      }
    }
  }
`

export const POST = `
  query Post($slug: String, $draft: Boolean) {
    Posts(where: { slug: { equals: $slug }}, limit: 1, draft: $draft) {
      docs {
        id
        title
        categories {
          title
        }
        createdAt
        publishedAt
        populatedAuthors {
          id
          name
        }
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
        enablePremiumContent
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

export const POST_PREMIUM_CONTENT = `
  query Post($slug: String, $draft: Boolean) {
    Posts(where: { slug: { equals: $slug }}, limit: 1, draft: $draft) {
      docs {
        premiumContent {
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
      }
    }
  }
`
