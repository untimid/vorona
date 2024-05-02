import React, { FC } from 'react'

import RichText from '../../_components/RichText'
import { YouTubePlayer } from '../../_components/YouTubePlayer'
import type { PrinciplesProps } from './'
import { CollaborationPrinciple } from './CollaborationPrinciple'
import { TabWrapper } from './TabWrapper'

export type CollaborationProps = PrinciplesProps['collab']

export const Collaboration: FC<CollaborationProps> = ({ principles, description, videoSrc }) => {
  return (
    <TabWrapper>
      <div>
        <RichText content={description} />
        <div className="flex-col vrn-gap-l">
          {principles?.map(({ title, color, description, icon, jobs }, i) => (
            <CollaborationPrinciple
              key={`${title}-${i}`}
              title={title}
              description={description}
              icon={icon}
              jobs={jobs}
              color={color}
            />
          ))}
        </div>
      </div>
      {videoSrc && <YouTubePlayer videoSrc={videoSrc} />}
    </TabWrapper>
  )
}
