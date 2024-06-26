'use client'

import React, { useCallback, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '@nextui-org/button'
import { Link as KitLink } from '@nextui-org/link'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'

import { Input } from '../../../_components/Input'
import { Message } from '../../../_components/Message'
import { useAuth } from '../../../_providers/Auth'

type FormData = {
  email: string
  password: string
}

const LoginForm: React.FC = () => {
  const searchParams = useSearchParams()
  const allParams = searchParams.toString() ? `?${searchParams.toString()}` : ''
  const redirect = useRef(searchParams.get('redirect'))
  const { login } = useAuth()
  const router = useRouter()
  const [error, setError] = React.useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm<FormData>()

  const onSubmit = useCallback(
    async (data: FormData) => {
      try {
        await login(data)
        if (redirect?.current) router.push(redirect.current as string)
        else router.push('/account')
      } catch (_) {
        setError('There was an error with the credentials provided. Please try again.')
      }
    },
    [login, router],
  )

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p className="vrn-p">
        {`This is where your users will login to manage their account, view their comment history, and more. To manage all users, `}
        <Link href="/admin/collections/users">login to the admin dashboard</Link>
        {'.'}
      </p>
      <Message error={error} />
      <Input
        name="email"
        label="Email Address"
        required
        register={register}
        error={errors.email}
        type="email"
      />
      <Input
        name="password"
        type="password"
        label="Password"
        required
        register={register}
        error={errors.password}
      />
      <Button type="submit" color="primary" disabled={isLoading}>
        {isLoading ? 'Processing' : 'Login'}
      </Button>
      <div>
        <KitLink href={`/create-account${allParams}`}>Create an account</KitLink>
        <br />
        <KitLink href={`/recover-password${allParams}`}>Recover your password</KitLink>
      </div>
    </form>
  )
}

export default LoginForm
