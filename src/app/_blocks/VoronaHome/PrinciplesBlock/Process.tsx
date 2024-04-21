import React, { FC } from 'react'

import { PrincipleStepType, ProcessPrinciple } from './ProcessPrinciple'
import { TabWrapper } from './TabWrapper'

export interface ProcessProps {
  steps?: PrincipleStepType[]
  description: string
  videoSrc?: string
}

export const Process: FC<ProcessProps> = ({ steps, description, videoSrc }) => {
  return (
    <TabWrapper>
      <div>
        <p>{description}</p>
        <ProcessPrinciple steps={steps} />
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
