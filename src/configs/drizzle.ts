import "dotenv/config"
import { Pool } from "pg"
import * as schema from "@/db/schema"
import { DATABASE_URL } from "./database"
import { drizzle } from "drizzle-orm/node-postgres"


const pool = new Pool({
  connectionString: DATABASE_URL,
})


export const db = drizzle(pool, { schema })
