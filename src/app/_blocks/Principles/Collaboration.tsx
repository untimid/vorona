import React, { FC } from 'react'

import RichText from '../../_components/RichText'
import type { PrinciplesProps } from './'
import { CollaborationPrinciple } from './CollaborationPrinciple'
import { TabWrapper } from './TabWrapper'

export type CollaborationProps = PrinciplesProps['collaborationPrinciples']

export const Collaboration: FC<CollaborationProps> = ({ principles, description, videoSrc }) => {
  return (
    <TabWrapper>
      <div>
        <RichText content={description} />
        <div className="mt-4 flex-col">
          {principles?.map(({ title, color, description, icon, services }, i) => (
            <CollaborationPrinciple
              key={`${title}-${i}`}
              title={title}
              description={description}
              icon={icon}
              services={services}
              color={color}
            />
          ))}
        </div>
      </div>
      {videoSrc && (
        <iframe
          width="560"
          height="315"
          src={videoSrc}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      )}
    </TabWrapper>
  )
}
