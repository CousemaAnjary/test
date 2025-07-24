import { env } from "../lib/env"

const { PG_HOST, PG_PORT, PG_USER, PG_PASSWORD, PG_DATABASE } = env

// encodeURIComponent() permet d'échapper les caractères spéciaux dans PG_USER et PG_PASSWORD
// Exemple : un mot de passe comme "mon:mot@de#passe" devient sûr dans l'URL
export const DATABASE_URL = `postgresql://${encodeURIComponent(PG_USER)}:${encodeURIComponent(PG_PASSWORD)}@${PG_HOST}:${PG_PORT}/${PG_DATABASE}`
