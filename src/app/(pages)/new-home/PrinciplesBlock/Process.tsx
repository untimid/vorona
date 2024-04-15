import React, { FC } from 'react'

import { PrincipleStepType, ProcessPrinciple } from './ProcessPrinciple'
import { TabWrapper } from './TabWrapper'

interface ProcessProps {
  steps?: PrincipleStepType[]
}

export const Process: FC<ProcessProps> = ({ steps }) => {
  return (
    <TabWrapper>
      <div>
        <p>
          We have a flexible development process that depends on your goals, tasks, and product. We
          prefer Agile
        </p>
        <ProcessPrinciple steps={steps} />
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
