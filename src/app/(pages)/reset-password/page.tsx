import React from 'react'
import { Metadata } from 'next'

import { Gutter } from '../../_components/Gutter'
import { mergeOpenGraph } from '../../_utilities/mergeOpenGraph'
import { ResetPasswordForm } from './ResetPasswordForm'

export default async function ResetPassword() {
  return (
    <Gutter>
      <h1 className="vrn-h1">Reset Password</h1>
      <p className="vrn-p">Please enter a new password below.</p>
      <ResetPasswordForm />
    </Gutter>
  )
}

export const metadata: Metadata = {
  title: 'Reset Password',
  description: 'Enter a new password.',
  openGraph: mergeOpenGraph({
    title: 'Reset Password',
    url: '/reset-password',
  }),
}
