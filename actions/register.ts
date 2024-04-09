'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { z } from 'zod'

import { authSchema } from '@/lib/schemas'
import { createClient } from '@/lib/supabase/server'

export const register = async (values: z.infer<typeof authSchema>) => {
  const validateFields = authSchema.safeParse(values)

  if (!validateFields.success) {
    return { error: validateFields.error }
  }

  const supabase = createClient()

  const { email, password } = validateFields.data

  const { error } = await supabase.auth.signUp({ email, password })

  if (error) {
    return { error: error.message }
  }

  revalidatePath('/')
  redirect('/auth/sign-in')
}
