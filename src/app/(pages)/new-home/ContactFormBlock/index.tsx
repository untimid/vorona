'use client'
import React, { FC } from 'react'
import { Button, Checkbox, Input, Textarea } from '@nextui-org/react'

import { BlockWrapper } from '../components'

export const MailIcon = ({ className }: { className: string }) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 24 24"
    width="1em"
    className={className}
  >
    <path
      d="M17 3.5H7C4 3.5 2 5 2 8.5V15.5C2 19 4 20.5 7 20.5H17C20 20.5 22 19 22 15.5V8.5C22 5 20 3.5 17 3.5ZM17.47 9.59L14.34 12.09C13.68 12.62 12.84 12.88 12 12.88C11.16 12.88 10.31 12.62 9.66 12.09L6.53 9.59C6.21 9.33 6.16 8.85 6.41 8.53C6.67 8.21 7.14 8.15 7.46 8.41L10.59 10.91C11.35 11.52 12.64 11.52 13.4 10.91L16.53 8.41C16.85 8.15 17.33 8.2 17.58 8.53C17.84 8.85 17.79 9.33 17.47 9.59Z"
      fill="currentColor"
    />
  </svg>
)

export const ContactFormBlock: FC = () => {
  return (
    <BlockWrapper className="w-full bg-red-100">
      <div className="grid sm:gap-4 sm:grid-cols-1 md:gap-8 md:grid-cols-2 lg:gap-12">
        <h2 className="text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-br from-yellow-500 to-purple-600 pb-1">
          Shall we discuss this further?
        </h2>
        <div className="flex flex-col">
          <Input
            type="text"
            label="Name"
            placeholder="Ivan Ivanov"
            labelPlacement="outside"
            className="mb-4"
          />
          <Input
            type="email"
            label="Email"
            placeholder="you@example.com"
            labelPlacement="outside"
            className="mb-4"
            startContent={
              <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
            }
          />
          <Textarea
            label="Description"
            labelPlacement="outside"
            placeholder="Please, tell us a bit about your project or task"
            rows={4}
            classNames={{ inputWrapper: 'h-auto' }}
            className="mb-4"
          />
          <Checkbox className="mb-4">I agree with the personal data processing policy</Checkbox>
          <Button color="primary" variant="solid" className="self-start">
            Get a consult
          </Button>
        </div>
      </div>
    </BlockWrapper>
  )
}
