import { env } from "../lib/env"
const { PG_HOST, PG_PORT, PG_USER, PG_PASSWORD, PG_DATABASE } = env

// URL de connexion complète
export const DATABASE_URL = `postgresql://${PG_USER}:${PG_PASSWORD}@${PG_HOST}:${PG_PORT}/${PG_DATABASE}`
