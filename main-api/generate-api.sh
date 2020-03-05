#!/usr/bin/env bash

docker run --rm -v ${PWD}:/local openapitools/openapi-generator-cli generate \
    -i /local/openapi/api.yaml \
    -g python-flask \
    -o /local/gen/api
