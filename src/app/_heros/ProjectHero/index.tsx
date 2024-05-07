import React, { Fragment } from 'react'
import Link from 'next/link'

import { Project } from '../../../payload/payload-types'
import { Gutter } from '../../_components/Gutter'
import { Media } from '../../_components/Media'
import RichText from '../../_components/RichText'
import { formatDateTime } from '../../_utilities/formatDateTime'

export const ProjectHero: React.FC<{
  project: Project
}> = ({ project }) => {
  const { id, title, categories, meta: { image: metaImage, description } = {}, createdAt } = project

  return (
    <Fragment>
      <Gutter>
        <div>
          <div>
            <div>
              {createdAt && formatDateTime(createdAt)}
              &nbsp; &mdash; &nbsp;
              {categories?.map((category, index) => {
                if (typeof category === 'object' && category !== null) {
                  const { title: categoryTitle } = category

                  const titleToUse = categoryTitle || 'Untitled category'

                  const isLast = index === categories.length - 1

                  return (
                    <Fragment key={index}>
                      {titleToUse}
                      {!isLast && <Fragment>, &nbsp;</Fragment>}
                    </Fragment>
                  )
                }

                return null
              })}
            </div>
          </div>
          <h1 className="vrn-h1">{title}</h1>
          <div>
            <p className="vrn-p">
              {`${description ? `${description} ` : ''}To edit this project, `}
              <Link href={`${process.env.NEXT_PUBLIC_SERVER_URL}/admin/collections/projects/${id}`}>
                navigate to the admin dashboard
              </Link>
              {'.'}
            </p>
          </div>
        </div>
        <div>
          <div>
            {!metaImage && <div>No image</div>}
            {metaImage && typeof metaImage !== 'string' && <Media resource={metaImage} fill />}
          </div>
          {metaImage && typeof metaImage !== 'string' && metaImage?.caption && (
            <RichText content={metaImage.caption} />
          )}
        </div>
      </Gutter>
    </Fragment>
  )
}
