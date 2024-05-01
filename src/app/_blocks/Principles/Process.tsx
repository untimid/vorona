import React, { FC } from 'react'

import RichText from '../../_components/RichText'
import { YouTubePlayer } from '../../_components/YouTubePlayer'
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
      {videoSrc && <YouTubePlayer videoSrc={videoSrc} />}
    </TabWrapper>
  )
}
