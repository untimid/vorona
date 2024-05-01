import { LINK_FIELDS } from './link'
import { MEDIA_FIELDS } from './media'

export const HEADER = `
  Header {
    logoLight {
      ${MEDIA_FIELDS}
    }
    logoDark {
      ${MEDIA_FIELDS}
    }
    navItems {
      link ${LINK_FIELDS({ disableAppearance: true })}
		}
  }
`

export const HEADER_QUERY = `
query Header {
  ${HEADER}
}
`

export const FOOTER = `
  Footer {
    logoLight {
      ${MEDIA_FIELDS}
    }
    logoDark {
      ${MEDIA_FIELDS}
    }
    navItems {
      link ${LINK_FIELDS({ disableAppearance: true })}
		}
  }
`

export const FOOTER_QUERY = `
query Footer {
  ${FOOTER}
}
`

export const SETTINGS = `
  Settings {
    postsPage {
      slug
    }
    projectsPage {
      slug
    }
  }
`

export const SETTINGS_QUERY = `
query Settings {
  ${SETTINGS}
}
`
