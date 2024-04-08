'use client'

import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTransition } from 'react'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { GithubLogo } from '@/components/github-logo'
import { GoogleLogo } from '@/components/google-logo'
import { authSchema } from '@/lib/schemas'
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form'
import { register } from '@/actions/register'

export function RegisterForm() {
  const [isPending, startTransition] = useTransition()

  const form = useForm<z.infer<typeof authSchema>>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = form.handleSubmit((values: z.infer<typeof authSchema>) => {
    startTransition(() => {
      console.log(values)
      register(JSON.parse(JSON.stringify(values))).then((result) => {
        if (result) {
          toast.error(result.error.message)
        } else {
          toast.success(
            'Success! Please check your email to verify your account.'
          )
        }
      })
    })
  })

  return (
    <Form {...form}>
      <form onSubmit={onSubmit} className="flex w-[400px] flex-col gap-y-8">
        <div>
          <h1 className="text-2xl font-semibold">Get Started</h1>
          <p className="text-muted-foreground">Create a new account</p>
        </div>
        <div className="space-y-4">
          <Button className="w-full" disabled={isPending}>
            <GithubLogo className="mr-2 h-4 w-4" />
            Continue with Github
          </Button>
          <Button className="w-full" disabled={isPending}>
            <GoogleLogo className="mr-2 h-4 w-4" />
            Continue with Google
          </Button>
        </div>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-white px-2 text-sm text-muted-foreground dark:bg-black">
              or
            </span>
          </div>
        </div>
        <div className="grid gap-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="m@example.com"
                      disabled={isPending}
                      required
                      {...field}
                    />
                  </div>
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="grid gap-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="********"
                      required
                      disabled={isPending}
                      {...field}
                    />
                  </div>
                </FormControl>
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full" disabled={isPending}>
            Sign Up
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Have an account?{' '}
          <Link href="/auth/sign-in" className="underline hover:opacity-75">
            Sign In Now
          </Link>
        </div>
      </form>
    </Form>
  )
}
