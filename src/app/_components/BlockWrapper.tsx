'use client'
import React, { FC, PropsWithChildren } from 'react'
import { useTheme } from 'next-themes'

interface BlockWrapperProps extends PropsWithChildren {
  className?: string
  isInverted?: boolean
  noPadding?: boolean
}
const getClassForTheme = (isInverted: BlockWrapperProps['isInverted']) => {
  if (isInverted) return 'bg-foreground text-foreground'
  return ''
}

export const BlockWrapper: FC<BlockWrapperProps> = ({
  children,
  className,
  isInverted,
  noPadding,
}) => {
  const { theme } = useTheme()

  return (
    <div
      className={[
        getClassForTheme(isInverted),
        'bg-color-white p-4 py-8 sm:p-8 md:p-12 lg:p-16 flex-col',
        className,
        noPadding && 'py-0 pt-0 pb-0 px-0 sm:py-0 sm:px-0 md:px-0 md:py-0 lg:p-0 xl:p-0 2xl:p-0',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div className="w-full max-w-[1420px] h-full">{children}</div>
    </div>
  )
}
