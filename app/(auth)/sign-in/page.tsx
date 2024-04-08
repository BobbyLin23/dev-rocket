import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { GithubLogo } from '@/components/github-logo'
import { GoogleLogo } from '@/components/google-logo'

export default function Page() {
  return (
    <div className="flex w-[400px] flex-col gap-y-8">
      <div>
        <h1 className="text-2xl font-semibold">Welcome back</h1>
        <p className="text-muted-foreground">Sign in to your account</p>
      </div>
      <div className="space-y-4">
        <Button className="w-full" variant="secondary">
          <GithubLogo className="mr-2" />
          Continue with Github
        </Button>
        <Button className="w-full" variant="outline">
          <GoogleLogo className="mr-2" />
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
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
            <Link href="#" className="ml-auto inline-block text-sm underline">
              Forgot your password?
            </Link>
          </div>
          <Input
            id="password"
            type="password"
            placeholder="********"
            required
          />
        </div>
        <Button type="submit" className="w-full">
          Sign in
        </Button>
      </div>
      <div className="mt-4 text-center text-sm">
        Don&apos;t have an account?{' '}
        <Link href="/sign-up" className="underline hover:opacity-75">
          Sign Up Now
        </Link>
      </div>
    </div>
  )
}
