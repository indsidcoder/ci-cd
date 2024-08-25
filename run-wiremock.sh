#! /bin/bash


CONTAINER_NAME="wiremock"

docker rm -f ${CONTAINER_NAME} || true

docker run -it --name ${CONTAINER_NAME} -p 8080:8080 -v $(pwd)/mock-endpoints:/home/wiremock/mappings wiremock/wiremock:3.9.1 --root-dir /home/wiremock