import { z } from "zod"

const envSchema = z.object({
  PG_HOST: z.string().min(1, "PG_HOST est requis"),
  PG_PORT: z.coerce.number().min(1, "PG_PORT doit être un numéro valide"),
  PG_USER: z.string().min(1, "PG_USER est requis"),
  PG_PASSWORD: z.string().min(1, "PG_PASSWORD est requis"),
  PG_DATABASE: z.string().min(1, "PG_DATABASE est requis"),
  BETTER_AUTH_URL: z.string().url("BETTER_AUTH_URL doit être une URL valide"),
})

export const env = envSchema.parse(process.env)
