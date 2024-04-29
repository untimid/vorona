import { LINK_FIELDS } from './link'
import { MEDIA, MEDIA_FIELDS } from './media'

export const HERO = `
  type
  richText
  links {
    link ${LINK_FIELDS()}
  }
  ${MEDIA}
  slider {
    slideContent
    slideImage {
      ${MEDIA_FIELDS}
    }
  }
  colorizeBlock
  blockColorFrom
  blockColorTo
  blockColorFromDark
  blockColorToDark
  header
  enableColorizing
  colorizeTemplates {
    textToColorize
    textColorFrom
    textColorTo
    textColorFromDark
    textColorToDark
  }
`
