'use client'
import React, { FC, PropsWithChildren } from 'react'
import { useTheme } from 'next-themes'

interface BlockWrapperProps extends PropsWithChildren {
  className?: string
  isInverted?: boolean
}
const getClassForTheme = (isInverted: BlockWrapperProps['isInverted']) => {
  if (isInverted) return 'bg-foreground text-foreground'
  return ''
}

export const BlockWrapper: FC<BlockWrapperProps> = ({
  children,
  className,
  isInverted = false,
}) => {
  const { theme } = useTheme()

  return (
    <div
      className={[
        getClassForTheme(isInverted),
        'bg-color-white p-4 py-8 sm:p-8 md:p-12 lg:p-16 flex-col',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div className="w-full max-w-[1420px] lg:mx-auto">{children}</div>
    </div>
  )
}
