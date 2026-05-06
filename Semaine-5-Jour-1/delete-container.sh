#!/bin/bash


if [ "$1" = "-a" ] || [ "$1" = "--all" ]
then
    docker rm $(docker ps -qa)
else
    for CONTAINER_ID in $@
    do
        echo $CONTAINER_ID
        docker rm $CONTAINER_ID
    done
fi
