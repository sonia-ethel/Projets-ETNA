# Groupe de montch_e 1076080


# Name
Compose ton vote

# Author
Sonia-Ethel Montchon


# Description
c'est une application de vote, voilaaaaaa


# explication des services

## poll : le formulaire de vote

C'est la page web où l'utilisateur vote
Technologie : Python/Flask
Communique avec : Redis


## redis : la file d'attente

Stocke les votes temporairement (comme une boîte aux lettres)
C'est une base de données ultra rapide mais pas permanente
Communique avec : poll et worker


## worker : le traducteur

Lit les votes depuis Redis
Les sauvegarde dans PostgreSQL de façon permanente
Technologie : Java
Communique avec : Redis et PostgreSQL


## db : la base de données permanente

Stocke tous les votes de façon permanente
Technologie : PostgreSQL
Communique avec : worker et result


## result : la page des résultats

Affiche les résultats en temps réel
Technologie : Node.js
Communique avec : PostgreSQL


# Les variables d'environnement de chaque service


## poll a besoin de savoir où est Redis :
environment:
  - REDIS_HOST=redis


## redis n'a pas besoin de variables — c'est lui que les autres cherchent !


## worker a besoin de savoir où sont Redis ET PostgreSQL :
environment:
  - REDIS_HOST=redis
  - POSTGRES_HOST=db
  - POSTGRES_PASSWORD=password
  - POSTGRES_USER=postgres
  - POSTGRES_DB=postgres


## db a besoin de ses propres infos de configuration :
environment:
  - POSTGRES_PASSWORD=password
  - POSTGRES_USER=postgres
  - POSTGRES_DB=postgres


## result a besoin de savoir où est PostgreSQL :
environment:
  - POSTGRES_HOST=db
  - POSTGRES_PASSWORD=password
  - POSTGRES_USER=postgres
  - POSTGRES_DB=postgres




## Installation
docker build -t monapp
docker run -d -p Port_HOTE:PORT_CONT


