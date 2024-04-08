'use server'

import { z } from 'zod'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/lib/supabase/server'
import { authSchema } from '@/lib/schemas'

export async function login(values: z.infer<typeof authSchema>) {
  const validateFields = authSchema.safeParse(values)

  if (!validateFields.success) {
    return { error: validateFields.error }
  }

  const { email, password } = validateFields.data

  const supabase = createClient()

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    return { error }
  }

  revalidatePath('/')
  redirect('/')
}
