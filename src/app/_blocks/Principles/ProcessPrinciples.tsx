'use client'
import React, { FC, useCallback, useEffect, useMemo, useState } from 'react'
import { CircularProgress } from '@nextui-org/react'

import RichText from '../../_components/RichText'
import { Delayer } from './Delayer'
import type { ProcessProps } from './Process'
import { TextTyper } from './TextTyper'

const DEFAULT_STEP_DELAY = 3000
const DEFAULT_TYPING_DELAY = 500

type ProcessPrinciplesProps = Pick<ProcessProps, 'steps' | 'typingDelay' | 'stepDelay'>

export const ProcessPrinciples: FC<ProcessPrinciplesProps> = ({
  steps,
  typingDelay = DEFAULT_TYPING_DELAY,
  stepDelay = DEFAULT_STEP_DELAY,
}) => {
  const sortedStepsArray = useMemo(() => steps.sort((a, b) => a.percentage - b.percentage), [steps])
  const [step, setStep] = useState(0)

  const stepForward = useCallback(() => {
    setStep(step + 1 < sortedStepsArray.length ? step + 1 : 0)
  }, [setStep, step, sortedStepsArray])

  useEffect(() => {
    const intervalID = setInterval(stepForward, stepDelay)
    return () => clearInterval(intervalID)
  }, [stepForward, stepDelay])

  const { title, percentage, description } = sortedStepsArray[step]

  return (
    <div className="flex">
      <CircularProgress
        className={`bg-gradient-to-br ${
          percentage === 100 ? 'from-amber-500 to-purple-600' : 'from-cyan-500 to-yellow-600'
        } rounded-lg me-4 ${
          percentage === 100 ? 'shadow-lg shadow-yellow-500/50' : 'shadow-lg shadow-cyan-500/50'
        } transition-all delay-100`}
        classNames={{
          svg: 'w-36 h-36 drop-shadow-md',
          indicator: 'stroke-white',
          track: 'stroke-white/10',
          value: 'text-3xl font-semibold text-white',
        }}
        value={percentage}
        strokeWidth={4}
        showValueLabel={true}
        aria-label={`Progress ${percentage}`}
      />
      <div>
        <h4 className="vrn-h4 text-transparent bg-clip-text bg-gradient-to-br from-amber-500 to-purple-600">
          <TextTyper key={title} text={title} interval={typingDelay / title.length} />
        </h4>
        <Delayer key={title} delay={typingDelay}>
          <RichText content={description} />
        </Delayer>
      </div>
    </div>
  )
}
