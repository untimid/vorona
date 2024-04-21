import React, { FC } from 'react'

import { CollaborationPrinciple, CollaborationPrincipleProps } from './CollaborationPrinciple'
import { TabWrapper } from './TabWrapper'

export interface CollaborationProps {
  description: string
  principles?: CollaborationPrincipleProps[]
  videoSrc?: string
}

export const Collaboration: FC<CollaborationProps> = ({ principles, description, videoSrc }) => {
  return (
    <TabWrapper>
      <div>
        <p>{description}</p>
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
