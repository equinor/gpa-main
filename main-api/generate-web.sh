#!/usr/bin/env bash

mkdir -p gen
docker run --rm \
    -v ${PWD}:/local \
    --user $(id -u):$(id -g) \
    openapitools/openapi-generator-cli generate \
    -i /local/openapi/api.yaml \
    -g typescript-fetch \
    -o /local/gen/web \
    --additional-properties=npmName=@equinor/gpa-api,npmVersion=${API_VERSION},typescriptThreePlus=true
jq '.+{files: ["dist/**"], repository: {type: "git", url: "https://github.com/equinor/gpa-main"}}' gen/web/package.json | jq '.author = { name: "GPA Team - OpenApi generator", email: "fg_gpa@equinor.com"}' > package-tmp.json
mv package-tmp.json ./gen/web/package.json
echo "//registry.npmjs.org/:_authToken=\${NPM_TOKEN}" > ./gen/web/.npmrc