#!/bin/bash

docker build -t mon-image .
docker run -v /home/sonia/data:/app/data mon-image