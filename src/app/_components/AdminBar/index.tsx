'use client'

import React, { useEffect } from 'react'
import { useSelectedLayoutSegments } from 'next/navigation'
import { PayloadAdminBar, PayloadAdminBarProps } from 'payload-admin-bar'

import { BlockWrapper } from '../../_components/BlockWrapper'
import { useAuth } from '../../_providers/Auth'

const collectionLabels = {
  pages: {
    singular: 'Page',
    plural: 'Pages',
  },
  posts: {
    singular: 'Post',
    plural: 'Posts',
  },
  projects: {
    singular: 'Project',
    plural: 'Projects',
  },
}

const Title: React.FC = () => <span>{':> админка'}</span>

export const AdminBar: React.FC<{
  adminBarProps?: PayloadAdminBarProps
}> = props => {
  const { adminBarProps } = props || {}
  const segments = useSelectedLayoutSegments()
  const collection = collectionLabels?.[segments?.[1]] ? segments?.[1] : 'pages'
  const [show, setShow] = React.useState(false)

  const { user } = useAuth()

  useEffect(() => {
    if (user) {
      setShow(true)
    }
  }, [user])

  const isAdmin = user?.roles?.includes('admin')

  if (!isAdmin) return null

  return (
    <div
      className={[
        'z-50 w-full sticky top-0 bg-gray-600 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 -mb-11',
        !show && 'hidden absolute',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <BlockWrapper className="py-1 md:py-1 lg:py-1">
        <PayloadAdminBar
          {...adminBarProps}
          collection={collection}
          collectionLabels={{
            singular: collectionLabels[collection]?.singular || 'Page',
            plural: collectionLabels[collection]?.plural || 'Pages',
          }}
          key={user?.id} // use key to get the admin bar to re-run its `me` request
          cmsURL={process.env.NEXT_PUBLIC_SERVER_URL}
          className={'relative p-0 bg-transparent text-xl'}
          classNames={{
            user: 'me-2',
            logo: 'me-2',
            controls: 'grid gap-3',
          }}
          logo={<Title />}
        />
      </BlockWrapper>
    </div>
  )
}
