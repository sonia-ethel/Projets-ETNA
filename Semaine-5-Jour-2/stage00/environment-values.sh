#!/bin/bash

docker build -t mon-image .
docker run -p 4242:4242 -e PORT=4242 -e POSTGRE_PASSWORD=etna42 -e POSTGRE_USER=admin mon-image