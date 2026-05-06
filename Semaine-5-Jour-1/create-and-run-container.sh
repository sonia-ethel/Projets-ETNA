#!/bin/bash

IMAGE_NAME=$1
HOST_PORT=$2
CONTAINER_PORT=$3

docker build -t $IMAGE_NAME .
docker run -d -p $HOST_PORT:$CONTAINER_PORT $IMAGE_NAME