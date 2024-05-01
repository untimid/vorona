import React from 'react'

import serialize from './serialize'

const RichText: React.FC<{ className?: string; content: any; noSpacings?: boolean }> = ({
  className,
  content,
  noSpacings,
}) => {
  if (!content) {
    return null
  }

  return (
    <div className={[!noSpacings && 'vrn-pb-m', className].filter(Boolean).join(' ')}>
      {serialize(content)}
    </div>
  )
}

export default RichText
