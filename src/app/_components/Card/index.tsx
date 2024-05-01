import React, { Fragment } from 'react'
import Link from 'next/link'

import { Post, Project } from '../../../payload/payload-types'
import { Media } from '../Media'

export const Card: React.FC<{
  alignItems?: 'center'
  className?: string
  showCategories?: boolean
  hideImagesOnMobile?: boolean
  title?: string
  relationTo?: 'projects' | 'posts'
  doc?: Project | Post
  orientation?: 'horizontal' | 'vertical'
}> = props => {
  const {
    relationTo,
    showCategories,
    title: titleFromProps,
    doc,
    className,
    orientation = 'vertical',
  } = props

  const { slug, title, categories, meta } = doc || {}
  const { description, image: metaImage } = meta || {}

  const hasCategories = categories && Array.isArray(categories) && categories.length > 0
  const titleToUse = titleFromProps || title
  const sanitizedDescription = description?.replace(/\s/g, ' ') // replace non-breaking space with white space
  const href = `/${relationTo}/${slug}`

  return (
    <div>
      <Link href={href}>
        {!metaImage && <div>No image</div>}
        {metaImage && typeof metaImage !== 'string' && <Media resource={metaImage} fill />}
      </Link>
      <div>
        {showCategories && hasCategories && (
          <div>
            {showCategories && hasCategories && (
              <div>
                {categories?.map((category, index) => {
                  if (typeof category === 'object') {
                    const { title: titleFromCategory } = category

                    const categoryTitle = titleFromCategory || 'Untitled category'

                    const isLast = index === categories.length - 1

                    return (
                      <Fragment key={index}>
                        {categoryTitle}
                        {!isLast && <Fragment>, &nbsp;</Fragment>}
                      </Fragment>
                    )
                  }

                  return null
                })}
              </div>
            )}
          </div>
        )}
        {titleToUse && (
          <h4 className="vrn-h4">
            <Link href={href}>{titleToUse}</Link>
          </h4>
        )}
        {description && <div>{description && <p>{sanitizedDescription}</p>}</div>}
      </div>
    </div>
  )
}
