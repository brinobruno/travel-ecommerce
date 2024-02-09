import { z } from 'zod'

export const envSchema = z.object({
  NEXT_PUBLIC_API_URL: z.string(),
  NEXT_PUBLIC_CURRENCY_API_URL: z.string(),
})

export const env = envSchema.parse(process.env)
