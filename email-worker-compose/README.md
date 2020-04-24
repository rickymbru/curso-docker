<h1 align="center"> 
    POSTGRES + PYTHON + NGINX + REDIS + COMPOSE
<h1>

## Overview
Basic Application with POSTGRES, NGINX (Reverse Proxy), PYHTON (Workers and App), REDIS (Queue) and docker compose

- **[postgree](https://www.postgresql.org/)**
- **[docker-compose](https://docs.docker.com/compose/)**
- **[nginx](https://www.nginx.com/blog/deploying-nginx-nginx-plus-docker/)**
- **[redis](https://redis.io/)**
- **[python](https://www.python.org/)**
- **[bottle](https://pypi.org/project/bottle/)**

## Comandos utilizados
``` bash
 docker-compose up -d
 docker-compose exec db psql -U postgres -c '\l'  # Test listing databases
 docker-compose exec db psql -U postgres -f 'scripts/check.sql'
 docker-compose exec db psql -U postgres -d email_sender -c 'select * from emails;'
 docker-compose up -d --scale worker=3
 docker-compose logs -f -t
```



