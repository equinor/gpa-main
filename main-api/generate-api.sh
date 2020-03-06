#!/usr/bin/env bash

docker run --rm -v ${PWD}:/local openapitools/openapi-generator-cli generate \
    -i /local/openapi/api.yaml \
    -g python-flask \
    -o /local/gen/api \
    --additional-properties=packageName=gpa_api,packageVersion=0.1.0