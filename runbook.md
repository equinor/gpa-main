# Runbook

## Architecture contract and C4 models
Architecture contract and C4 models are located in /docs. Upload drawio.xml to www.draw.io to see and modify the models, or open them as images.

## Setting up development environment
### 1) Clone the libraries
Project:
git clone https://github.com/equinor/neqsimweb2

Dependency:
git clone https://github.com/equinor/neqsim

### 2) Run the project
Database: /
docker-compose up db

Api: /api
Import and run gradle project .kt

Client: /web
npm start

### 3) Run tests
Client: /web
npm test

## Pipeline
### 1) Deploy to pipeline
git push 
-> pull request (tests for client are automatically run on pull request)

### 2) Deploy to the environments
Project automatically deployed from:
master branch to https://oauth-proxy-neqsim-dev.playground.radix.equinor.com/
release branch to: https://neqsim.app.playground.radix.equinor.com/calculator

### 3) Watch status of applications
Radix Playground: https://console.playground.radix.equinor.com/applications/neqsim

## Setup on Cloud
### Radix
Secrets
API: DB_URL, DB_USERNAME, DB_PASSWORD
OAUTH-PROXY: OAUTH2_PROXY_CLIENT_ID, OAUTH2_PROXY_CLIENT_SECRET, OAUTH2_REDIRECT_URL

### Azure
ResourceGroup: neqsimRGDev
PostgresSQL servers: neqsim-dev, neqsim-prod
Key vault: Neqsim