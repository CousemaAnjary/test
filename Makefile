# ----------------------------------------------------------------------
#  Drizzle Makefile
# ----------------------------------------------------------------------

# Générer les migrations 
generate:
	npx drizzle-kit generate

# Exécuter les migrations
migrate:
	npx drizzle-kit migrate

# Drizzle studio
studio:
	npx drizzle-kit studio


# ----------------------------------------------------------------------
# Docker Makefile
# ----------------------------------------------------------------------

# Démarrer les conteneurs (et reconstruire les images si nécessaire)
up:
	docker compose up --build 

# Démarrer en arrière-plan (mode détaché)
up-d:
	docker compose up -d --build

# Arrêter les conteneurs
down:
	docker compose down

# Redémarrer les conteneurs
restart:
	docker compose down && docker compose up -d --build

# Supprimer les conteneurs, volumes, et images orphelins
clean:
	docker compose down -v --remove-orphans

# Afficher les logs en temps réel
logs:
	docker compose logs -f

# Voir les conteneurs en cours
ps:
	docker compose ps	