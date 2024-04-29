import React, { Fragment } from 'react'

import { Page } from '../../../payload/payload-types.js'
import { ArchiveBlock } from '../../_blocks/ArchiveBlock'
import { CallToActionBlock } from '../../_blocks/CallToAction'
import { Cards } from '../../_blocks/Cards'
import { CommentsBlock, type CommentsBlockProps } from '../../_blocks/Comments/index'
import { ContentBlock } from '../../_blocks/Content'
import { MediaBlock } from '../../_blocks/MediaBlock'
import { Quote } from '../../_blocks/Quote'
import { RelatedPosts, type RelatedPostsProps } from '../../_blocks/RelatedPosts'
import { VoronaHome } from '../../_blocks/VoronaHome'
import { BlockWrapper } from '../../_blocks/VoronaHome/components/BlockWrapper'
import { toKebabCase } from '../../_utilities/toKebabCase'

const blockComponents = {
  cta: CallToActionBlock,
  content: ContentBlock,
  mediaBlock: MediaBlock,
  archive: ArchiveBlock,
  relatedPosts: RelatedPosts,
  comments: CommentsBlock,
  voronaHome: VoronaHome,
  cards: Cards,
  quote: Quote,
}

export const Blocks: React.FC<{
  blocks: (Page['layout'][0] | RelatedPostsProps | CommentsBlockProps)[]
  disableTopPadding?: boolean // TODO: check what is with padding here
}> = props => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockName, blockType } = block
          // TODO: refactor this
          let invertBackground = false
          let colorizeBlock = false
          let blockColorFrom = ''
          let blockColorTo = ''
          let blockColorToDark = ''
          let blockColorFromDark = ''
          let header = ''
          let enableColorizing = false
          let textToColorize = ''
          let textColorFrom = ''
          let textColorTo = ''
          let textColorFromDark = ''
          let textColorToDark = ''

          if ('invertBackground' in block) {
            invertBackground = block.invertBackground
          }
          if ('colorizeBlock' in block) {
            colorizeBlock = block.colorizeBlock
          }
          if ('blockColorFrom' in block) {
            blockColorFrom = block.blockColorFrom
          }
          if ('blockColorTo' in block) {
            blockColorTo = block.blockColorTo
          }
          if ('blockColorFromDark' in block) {
            blockColorFromDark = block.blockColorFromDark
          }
          if ('blockColorToDark' in block) {
            blockColorToDark = block.blockColorToDark
          }
          if ('header' in block) {
            header = block.header
          }
          if ('enableColorizing' in block) {
            enableColorizing = block.enableColorizing
          }
          if ('textToColorize' in block) {
            textToColorize = block.textToColorize
          }
          if ('textColorFrom' in block) {
            textColorFrom = block.textColorFrom
          }
          if ('textColorTo' in block) {
            textColorTo = block.textColorTo
          }
          if ('textColorFromDark' in block) {
            textColorFromDark = block.textColorFromDark
          }
          if ('textColorToDark' in block) {
            textColorToDark = block.textColorToDark
          }
          let renderHeader = () => {
            let rawParts
            if (header && enableColorizing && textToColorize && header.includes(textToColorize)) {
              rawParts = header.split(textToColorize)
              if (header.startsWith(textToColorize)) {
                return (
                  <>
                    <span
                      className={[
                        'text-transparent bg-clip-text bg-gradient-to-br',
                        textColorFrom,
                        textColorTo,
                        textColorFromDark && `dark:${textColorFromDark}`,
                        textColorToDark && `dark:${textColorToDark}`,
                      ]
                        .filter(Boolean)
                        .join(' ')}
                    >
                      {textToColorize}
                    </span>
                    {rawParts.join('')}
                  </>
                )
              }
              if (header.endsWith(textToColorize)) {
                return (
                  <>
                    {rawParts.join('')}
                    <span
                      className={[
                        'text-transparent bg-clip-text bg-gradient-to-br',
                        textColorFrom,
                        textColorTo,
                        textColorFromDark && `dark:${textColorFromDark}`,
                        textColorToDark && `dark:${textColorToDark}`,
                      ]
                        .filter(Boolean)
                        .join(' ')}
                    >
                      {textToColorize}
                    </span>
                  </>
                )
              }
              return (
                <>
                  {rawParts[0]}
                  <span
                    className={[
                      'text-transparent bg-clip-text bg-gradient-to-br',
                      textColorFrom,
                      textColorTo,
                      textColorFromDark && `dark:${textColorFromDark}`,
                      textColorToDark && `dark:${textColorToDark}`,
                    ]
                      .filter(Boolean)
                      .join(' ')}
                  >
                    {textToColorize}
                  </span>
                  {rawParts[1]}
                </>
              )
            }
            return header
          }

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              return (
                <BlockWrapper
                  key={index}
                  isInverted={invertBackground}
                  className={[
                    colorizeBlock && 'bg-gradient-to-br',
                    colorizeBlock && Boolean(blockColorFrom) && blockColorFrom,
                    colorizeBlock && Boolean(blockColorTo) && blockColorTo,
                    colorizeBlock && Boolean(blockColorFromDark) && `dark:${blockColorFromDark}`,
                    colorizeBlock && Boolean(blockColorToDark) && `dark%${blockColorToDark}`,
                  ]
                    .filter(Boolean)
                    .join(' ')}
                >
                  {header && <h2 className="text-5xl font-extrabold mb-4">{renderHeader()}</h2>}
                  <Block id={toKebabCase(blockName)} {...block} />
                </BlockWrapper>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
