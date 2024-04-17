'use client'
import React, { FC, useCallback, useEffect, useMemo, useState } from 'react'
import { CircularProgress } from '@nextui-org/react'

import { Delayer } from './Delayer'
import { TextTyper } from './TextTyper'

const INTERVAL = 3000
const TYPING_INTERVAL = 500

export type PrincipleStepType = {
  title: string
  description: string
  percentage: string
}

interface ProcessPrincipleProps {
  steps: PrincipleStepType[]
}

export const ProcessPrinciple: FC<ProcessPrincipleProps> = ({ steps }) => {
  const sortedStepsArray = useMemo(
    () => steps.sort((a, b) => parseFloat(a.percentage) - parseFloat(b.percentage)),
    [steps],
  )
  const [step, setStep] = useState(0)

  const stepForward = useCallback(() => {
    setStep(step + 1 < sortedStepsArray.length ? step + 1 : 0)
  }, [setStep, step, sortedStepsArray])

  useEffect(() => {
    const intervalID = setInterval(stepForward, INTERVAL)
    return () => clearInterval(intervalID)
  }, [stepForward])

  const { title, percentage, description } = sortedStepsArray[step]

  return (
    <div className="flex mt-4">
      <CircularProgress
        className={`bg-gradient-to-br ${
          percentage === '100' ? 'from-amber-500 to-purple-600' : 'from-cyan-500 to-yellow-600'
        } rounded-lg me-4 ${
          percentage === '100' ? 'shadow-lg shadow-yellow-500/50' : 'shadow-lg shadow-cyan-500/50'
        } transition-all delay-100`}
        classNames={{
          svg: 'w-36 h-36 drop-shadow-md',
          indicator: 'stroke-white',
          track: 'stroke-white/10',
          value: 'text-3xl font-semibold text-white',
        }}
        value={parseFloat(percentage)}
        strokeWidth={4}
        showValueLabel={true}
      />
      <div>
        <h4 className="text-2xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-br from-amber-500 to-purple-600">
          <TextTyper key={title} text={title} interval={TYPING_INTERVAL / title.length} />
        </h4>
        <Delayer key={title} delay={TYPING_INTERVAL}>
          <p>{description}</p>
        </Delayer>
      </div>
    </div>
  )
}
