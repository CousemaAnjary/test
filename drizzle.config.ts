import "dotenv/config"
import { defineConfig } from "drizzle-kit"
import { env } from "./src/lib/env"

export default defineConfig({
  out: "./db/migrations",
  schema: "./db/schema",
  dialect: "postgresql",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
})
