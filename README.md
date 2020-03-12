# Read me
## Setting up development environment
### 1) Clone the libraries
Project:
git clone https://github.com/equinor/gpa-main

Dependency:
git clone https://github.com/equinor/neqsim

### 2) Run the project
Database: /
docker-compose up db

Api: /api
Import to IntelliJ and run NeqsimApiApplication.kt

Client: /web
npm install
npm start

### 3) Run tests
Client: /web
npm test

## Pipeline
### 1) Deploy to pipeline
git push 
-> pull request (tests for client are automatically run on pull request)

### 2) Deploy to the environments
Project is automatically deployed from master and release branch (playground and production)

## Secrets
API: DB URL, USERNAME, PASSWORD
OAUTH: Application ID and Secret, Web url set
