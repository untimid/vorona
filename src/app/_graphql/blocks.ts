import { CATEGORIES } from './categories'
import { LINK_FIELDS } from './link'
import { MEDIA, MEDIA_FIELDS } from './media'
import { META } from './meta'

export const COMMON_BLOCK_FIELDS = `
    invertBackground
    colorizeBlock
    blockColorFrom
    blockColorTo
    blockColorFromDark
    blockColorToDark
    header
    enableColorizing
    textToColorize
    textColorFrom
    textColorTo
    textColorFromDark
    textColorToDark
`

export const CALL_TO_ACTION = `
...on Cta {
  blockType
  ${COMMON_BLOCK_FIELDS}
  richText
  links {
    link ${LINK_FIELDS()}
  }
}
`

export const CONTENT = `
...on Content {
  blockType
  ${COMMON_BLOCK_FIELDS}
  columns {
    size
    richText
    enableLink
    link ${LINK_FIELDS()}
  }
}
`

export const MEDIA_BLOCK = `
...on MediaBlock {
  blockType
  ${COMMON_BLOCK_FIELDS}
  position
  ${MEDIA}
  content
}
`

export const VORONA_HOME = `
...on VoronaHome {
  blockType
  ${COMMON_BLOCK_FIELDS}
}
`

export const ARCHIVE_BLOCK = `
...on Archive {
  blockType
  ${COMMON_BLOCK_FIELDS}
  introContent
  populateBy
  relationTo
  ${CATEGORIES}
  limit
  selectedDocs {
    relationTo
    value {
      ...on Post {
        id
        slug
        title
        ${META}
      }
      ...on Project {
        id
        slug
        title
        ${META}
      }
    }
  }
  populatedDocs {
    relationTo
    value {
      ...on Post {
        id
        slug
        title
        ${CATEGORIES}
        ${META}
      }
      ...on Project {
        id
        slug
        title
        ${CATEGORIES}
        ${META}
      }
    }
  }
  populatedDocsTotal
}
`

export const CARDS = `
...on Cards {
  blockType
  ${COMMON_BLOCK_FIELDS}
  header
  description
  columnsLg 
  columnsMd
  columnsSm
  radius
  shadow
  imageHeight
  cardItems {
    id
    icon
    image {
      ${MEDIA_FIELDS}
    }
    title
    subtitle
    chips {
      title
      bgColorSelect
      id
    }
    content
  }
}
`
export const QUOTE = `
...on Quote {
  blockType
  ${COMMON_BLOCK_FIELDS}
  content
  name
  role
  company
  photo {
    ${MEDIA_FIELDS}
  }
}
`
