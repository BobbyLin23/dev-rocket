export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-full">
      <div className="flex h-full w-full flex-col border-r lg:w-2/5">
        <div className="p-6 text-xl font-semibold">Dev Rocket</div>
        <div className="mx-auto flex-1 pt-10">{children}</div>
        <div className="p-6 text-center text-xs text-muted-foreground">
          By continuing, you agree to{' '}
          <span className="cursor-pointer underline hover:opacity-75">
            Terms of Service
          </span>{' '}
          and{' '}
          <span className="cursor-pointer underline hover:opacity-75">
            Privacy Policy
          </span>
          .
        </div>
      </div>
      <div className="hidden h-full lg:block lg:flex-1">right</div>
    </div>
  )
}
