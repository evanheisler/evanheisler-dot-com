# Evan Heisler Dot Com

## Helpful links

- [Docker cheatsheet](https://devhints.io/docker-compose)

## Getting Started

### Create

```bash
docker-compose up
```

### Update (docker images)

Whenever you add packages or alter core files…

```bash
docker-compose down
docker-compose up --build
```

### Start

```bash
docker-compose start # docker-compose stop
```

## Data Migration

Get prod database from Heroku

```bash
heroku pg:backups:capture
heroku pg:backups:download
```

Insert into Docker Postgres database instance

```bash
docker exec -i <container_name, i.e. postgres> pg_restore -U <user> -v -d <database> < latest.dump
```

## Database Bankruptcy

1. Start postgres container
2. Open CLI and connect to _other_ database with `psql postgres strapi` (dbname dbuser)
3. `DROP DATABASE strapi;`
4. `CREATE DATABASE strapi;`
5. Run migration

## Deploy

### Client

```bash
cd client && vercel --prod
```

### Backend

```bash
git subtree push --prefix app heroku master
```
