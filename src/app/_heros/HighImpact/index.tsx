'use client'
import React from 'react'
import { Button, Link } from '@nextui-org/react'

import { Page } from '../../../payload/payload-types'
import { BlockWrapper } from '../../_components/BlockWrapper'
import { Media } from '../../_components/Media'
import RichText from '../../_components/RichText'

export const HighImpactHero: React.FC<Page['hero']> = ({
  richText,
  media,
  links,
  colorizeBlock,
  blockColorFrom,
  blockColorTo,
  blockColorFromDark,
  blockColorToDark,
  header,
  enableColorizing,
  colorizeTemplates,
}) => {
  let content
  if (header && enableColorizing) {
    content = colorizeTemplates.reduce(
      (accum, { textToColorize, textColorFrom, textColorTo, textColorFromDark, textColorToDark }) =>
        accum.replace(
          textToColorize,
          ` <span
            class="
              ${[
                'text-transparent bg-clip-text bg-gradient-to-br',
                textColorFrom,
                textColorTo,
                textColorFromDark && `dark:${textColorFromDark}`,
                textColorToDark && `dark:${textColorToDark}`,
              ]
                .filter(Boolean)
                .join(' ')}"
          >
            ${textToColorize}
          </span>`,
        ),
      header,
    )
  }

  return (
    <>
      <BlockWrapper
        className={[
          'relative',
          colorizeBlock && 'bg-gradient-to-br',
          colorizeBlock && Boolean(blockColorFrom) && blockColorFrom,
          colorizeBlock && Boolean(blockColorTo) && blockColorTo,
          colorizeBlock && Boolean(blockColorFromDark) && `dark:${blockColorFromDark}`,
          colorizeBlock && Boolean(blockColorToDark) && `dark%${blockColorToDark}`,
          'h-3/4 overflow-hidden',
          'sm:h-100',
          'md:h-4/6',
          'lg:h-4/6',
        ]
          .filter(Boolean)
          .join(' ')}
        noPadding
      >
        <div
          className={['absolute w-full h-full start-0 top-0 z-10 bg-foreground']
            .filter(Boolean)
            .join(' ')}
        >
          {typeof media === 'object' && (
            <Media
              resource={media}
              // fill
              imgClassName="h-full w-auto sm:w-full sm:h-auto md:h-auto max-w-none sm:max-h-none md:max-h-none"
              videoClassName="h-full w-auto sm:w-full sm:h-auto"
              className="z-10 h-full w-full flex justify-center sm:block"
            />
          )}
        </div>
        <div className="z-20 relative flex flex-col w-full h-full bg-gray-200 dark:bg-gray-600 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 dark:bg-opacity-50 sm:bg-opacity-40 sm:dark:bg-opacity-30 p-4 py-8 sm:p-8 md:p-12 lg:p-16">
          {header && enableColorizing && (
            <h1 className="vrn-h1" dangerouslySetInnerHTML={{ __html: content }} />
          )}
          {header && !enableColorizing && <h1 className="vrn-h1">{header}</h1>}
          {Array.isArray(links) && links.length > 0 && (
            <ul className="flex vrn-gap-m w-full justify-end">
              {links.map(({ link }, i) => {
                return (
                  <li key={i}>
                    <Button
                      color="primary"
                      size="lg"
                      variant={
                        link.appearance === 'primary' || link.appearance === 'default'
                          ? 'solid'
                          : 'bordered'
                      }
                      as={Link}
                      href={link.url}
                      target={link.newTab ? '__blank' : ''}
                      rel={link.newTab ? 'noopener noreferrer' : ''}
                    >
                      {link.label || ''}
                    </Button>
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      </BlockWrapper>
      <BlockWrapper>
        <RichText content={richText} />
      </BlockWrapper>
    </>
  )
}
