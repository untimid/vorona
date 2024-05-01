import React from 'react'

export const LoadingShimmer: React.FC<{
  number?: number
  height?: number // in `base` units
}> = props => {
  const arrayFromNumber = Array.from(Array(props.number || 1).keys())

  return (
    <div>
      {arrayFromNumber.map((_, index) => (
        <div key={index} />
      ))}
    </div>
  )
}
