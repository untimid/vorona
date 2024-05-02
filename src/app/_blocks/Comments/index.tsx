'use client'

import React, { Fragment } from 'react'
import Link from 'next/link'

import { Comment, Post, Project } from '../../../payload/payload-types'
import { Gutter } from '../../_components/Gutter'
import { HR } from '../../_components/HR'
import { Message } from '../../_components/Message'
import RichText from '../../_components/RichText'
import { formatDateTime } from '../../_utilities/formatDateTime'
import { CommonBlockProps } from '../commonTypes'
import { CommentForm } from './CommentForm'

export type CommentsBlockProps = {
  blockType: 'comments'
  blockName: string
  introContent?: any
  doc: Post | Project
  relationTo: 'posts' | 'projects'
  comments: Comment[]
} & CommonBlockProps

export const CommentsBlock: React.FC<CommentsBlockProps> = props => {
  const { introContent, doc, comments, id } = props

  return (
    <div id={`block-${id}`}>
      {introContent && (
        <Gutter>
          <RichText content={introContent} />
        </Gutter>
      )}
      <Gutter>
        <div>
          <HR />
          {comments?.map((com, index) => {
            const { populatedUser, comment, createdAt, _status } = com

            if (!comment) return null

            return (
              <Fragment key={index}>
                <div>
                  {_status === 'draft' && (
                    <Message
                      message={
                        <Fragment>
                          {
                            'This is a draft comment. You are seeing it because you are an admin. To approve this comment, '
                          }
                          <Link
                            href={`${process.env.NEXT_PUBLIC_SERVER_URL}/admin/collections/comments/${com.id}`}
                          >
                            navigate to the admin dashboard
                          </Link>
                          {' and click "publish".'}
                        </Fragment>
                      }
                    />
                  )}
                  <p className="vrn-p">"{comment}"</p>
                  {populatedUser && (
                    <p className="vrn-p">
                      {populatedUser?.name || 'Unnamed User'}
                      {createdAt && ` on ${formatDateTime(createdAt)}`}
                    </p>
                  )}
                </div>
                {index < comments.length - 1 && <HR />}
              </Fragment>
            )
          })}
          <HR />
          <CommentForm docID={doc.id} />
        </div>
      </Gutter>
    </div>
  )
}
