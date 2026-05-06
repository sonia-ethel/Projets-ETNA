#!/bin/bash


if [ "$1" = "-a" ] || [ "$1" = "--all" ]
then
    docker stop $(docker ps -q)
else
    for CONTAINER_ID in $@
    do
        echo $CONTAINER_ID
        docker stop $CONTAINER_ID
    done
fi


#for CONTAINER_ID in $@
#do
#    echo $CONTAINER_ID
#    docker stop $CONTAINER_ID
#done