import React, { FC } from 'react'

import { CollaborationPrinciple, CollaborationPrincipleProps } from './CollaborationPrinciple'
import { TabWrapper } from './TabWrapper'

interface CollaborationProps {
  collaborationPrinciples?: CollaborationPrincipleProps[]
}

export const Collaboration: FC<CollaborationProps> = ({ collaborationPrinciples }) => {
  return (
    <TabWrapper>
      <div>
        <p>We offer two collaboration options depending on the project's size and complexity</p>
        <div className="mt-4 flex-col">
          {collaborationPrinciples?.map(({ title, color, description, icon, services }, i) => (
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
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/-3PUQZqnuuE?si=jgk8_FWdF78_aEaB"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </TabWrapper>
  )
}
