#!/bin/bash


if [ "$1" = "-a" ] || [ "$1" = "--all" ]
then
    docker rmi $(docker images -q)
elif [[ "$1" == *"*"* ]]
then
    docker rmi $(docker images --format "{{.Repository}}" | grep "$1")
else
    for IMAGE_NAME in $@
    do
        echo $IMAGE_NAME
        docker rmi $IMAGE_NAME
    done
fi
