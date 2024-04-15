import React, { FC, useEffect, useState } from 'react'
interface TextTyperProps {
  text: string
  interval: number
}

export const TextTyper: FC<TextTyperProps> = ({ text, interval }) => {
  const [typedLength, setTypedLength] = useState(1)

  useEffect(() => {
    if (typedLength === text.length) {
      return
    }
    const intervalID = setInterval(() => {
      if (typedLength + 1 > text.length) {
        setTypedLength(1)
      } else {
        setTypedLength(typedLength + 1)
      }
    }, interval)

    return () => clearInterval(intervalID)
  }, [typedLength, setTypedLength, text, interval])
  return <>{text.substring(0, typedLength)}</>
}
