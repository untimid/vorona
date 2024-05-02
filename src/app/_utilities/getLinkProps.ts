import type { Page } from '../../payload/payload-types'

interface LinkPropsRaw {
  type?: 'custom' | 'reference'
  url?: string
  newTab?: boolean
  reference?: {
    value: number | Page
    relationTo: 'pages'
  }
}

interface LinkProps {
  href: string
  target?: string
  rel?: string
}
// TODO: this is temporary solution, after refactor and remove old links, need to be cleaned
export const getLinkProps = ({ type, url, newTab, reference }: LinkPropsRaw): LinkProps => {
  const href =
    type === 'reference' && typeof reference?.value === 'object' && reference.value.slug
      ? `${reference?.relationTo !== 'pages' ? `/${reference?.relationTo}` : ''}/${
          reference.value.slug
        }`
      : url

  const linkProps = newTab
    ? { target: '_blank', rel: 'noopener noreferrer', href: href || url }
    : { href: href || url }
  return linkProps
}
