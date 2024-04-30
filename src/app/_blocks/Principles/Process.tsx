import React, { FC } from 'react'

import RichText from '../../_components/RichText'
import type { PrinciplesProps } from './'
import { ProcessPrinciples } from './ProcessPrinciples'
import { TabWrapper } from './TabWrapper'

export type ProcessProps = PrinciplesProps['processPrinciples']

export const Process: FC<ProcessProps> = ({
  steps,
  description,
  videoSrc,
  typingDelay,
  stepDelay,
}) => {
  return (
    <TabWrapper>
      <div>
        <RichText content={description} />
        <ProcessPrinciples steps={steps} typingDelay={typingDelay} stepDelay={stepDelay} />
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
