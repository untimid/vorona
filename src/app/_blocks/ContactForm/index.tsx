'use client'
import React, { FC } from 'react'
import { Button, Checkbox, Input, Textarea } from '@nextui-org/react'

import type { Page } from '../../../payload/payload-types'
import RichText from '../../_components/RichText'

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

export type ContactFormProps = Extract<Page['layout'][0], { blockType: 'contactForm' }>

export const ContactForm: FC<ContactFormProps> = ({
  nameInput,
  emailInput,
  descriptionInput,
  agreementCheckboxText,
  submitButtonText,
}) => {
  return (
    <>
      <div className="grid sm:gap-4 sm:grid-cols-1 md:gap-8 md:grid-cols-2 lg:gap-12">
        <div className="flex flex-col">
          <Input
            type="text"
            label={nameInput.label}
            placeholder={nameInput.placeholder}
            labelPlacement="outside"
            className="mb-4"
          />
          <Input
            type="email"
            label={emailInput.label}
            placeholder={emailInput.placeholder}
            labelPlacement="outside"
            className="mb-4"
            startContent={
              <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
            }
          />
          <Textarea
            label={descriptionInput.label}
            labelPlacement="outside"
            placeholder={descriptionInput.placeholder}
            rows={4}
            classNames={{ inputWrapper: 'h-auto' }}
            className="mb-4"
          />
          <Checkbox className="mb-4">
            <RichText content={agreementCheckboxText} />
          </Checkbox>
          <Button color="primary" variant="solid" className="self-start">
            {submitButtonText}
          </Button>
        </div>
      </div>
    </>
  )
}
