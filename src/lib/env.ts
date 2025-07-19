import { z } from "zod"

const envSchema = z.object({
  BETTER_AUTH_URL: z.string().url(),
  DATABASE_URL: z.string().url(),
})

export const env = envSchema.parse(process.env)
