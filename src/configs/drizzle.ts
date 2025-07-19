import "dotenv/config"
import { Pool } from "pg"
import { env } from "../lib/env"
import * as schema from "@/db/schema"
import { drizzle } from "drizzle-orm/node-postgres"


const pool = new Pool({
  connectionString: env.DATABASE_URL,
})

export const db = drizzle(pool, { schema })
