import "dotenv/config"
import { defineConfig } from "drizzle-kit"
import { DATABASE_URL } from "./src/configs/database"

export default defineConfig({
  out: "./db/migrations",
  schema: "./db/schema",
  dialect: "postgresql",
  dbCredentials: {
    url: DATABASE_URL,
  },
})
