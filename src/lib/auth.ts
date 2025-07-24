import * as schema from "@/db/schema"
import { db } from "../configs/drizzle"
import { betterAuth } from "better-auth"
import { drizzleAdapter } from "better-auth/adapters/drizzle"

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema: { ...schema },
    usePlural: true,
  }),
})
