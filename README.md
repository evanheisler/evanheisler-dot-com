# Evan Heisler Dot Com

## Helpful links

- [Docker cheatsheet](https://devhints.io/docker-compose)

## Getting Started

### Create

```bash
docker-compose up
```

### Update (images)

```bash
docker-compose up --build
```

### Start

```bash
docker-compose start # docker-compose stop
```

## Deploy

### Client

```bash
cd client && vercel --prod
```

### Backend

```bash
git subtree push --prefix app heroku master
```
