# Operational Runbook
# Neqsim

November, 2019

# 1 Introduction
## 1.1	Purpose of this template
This runbook provides the complete operational documentation of Neqsim. The document should be used to understand how the system is configured and functions, including how to perform system administrative tasks. 
The primary audience for this document are personnel responsible for managing and operating the system.

## 1.2 Scope
This runbook shall cover the implementation and deployment of Neqsim. It does not cover the the dependency library used for the actual calculations.

## 1.4	Legal
? The document and the information it contains is considered to be open source.

# 2 Architecture
## 2.1	Architecture Overview
Neqsim is a web application with API and PostgreSQL database. It provides the calculations through its dependency, which is not covered in the scope. 

C4 models are in the docs: https://github.com/equinor/neqsimweb2/tree/master/docs

## 2.2 Hardware
The application runs in Omnia Radix with databases in Azure. Tests are run in Github.

## 2.3 Software
PostgreSQL in Azure. API written in Kotlin and using Spring Boot. React Frontend in Typescript.

## 2.4 Information
Flow of information is visualised in C4 models in docs folder. Web client communicates with backend through GraphQL APIs. PostgreSQL database is mapped through JPA entities. 

## 2.5	Interfaces and Dependencies
Main dependency is on Neqsim core library: https://github.com/equinor/neqsim. Using Azure Active Directory for Auth.

## 2.6	Test and Quality Assurance
Client tests are run on each pull request. This includes unit and snapshot tests. Master branch is linked with dev environment on Radix, release branch with prod environment.

# 3	Configuration
## 3.1	System Configuration
See README file

### Our environment
Master branch to https://oauth-proxy-neqsim-dev.playground.radix.equinor.com/
Release branch to: https://neqsim.app.playground.radix.equinor.com/calculator
Radix Playground: https://console.playground.radix.equinor.com/applications/neqsim

### Setup on Cloud
Radix config in file radixconfig.yaml

#### Azure
Azure portal: Resource group neqsimRGDev

## 3.2	Security Configuration
Access control is done through AzureAD, every employee has access
Authentication through OAuth Proxy

# 4	Operations
# 4.1	Change Management
Push new code either to master for dev environment or to release branch for production environment. Github will run tests before pulling and pipeline will run the jobs on Radix.

# 4.2	Access Management
Access control to deployed application can be done on Radix or/and on Azure portal. Github is open source with contributor control.
Add developer to AD group: cb5d6403-0bf5-4369-8ba1-5475836ca549 for Radix administrator access. 
Administrator should be owner of the resource group: neqsimRGDev

# 4.3	Operational Monitoring
Defaults by Radix

# 4.4	Functional Updates
No procedures

# 4.5	Capacity Management
Azure can be set to use more resources for scaling

# 4.6	Backup and Restore
Handled by Github

# 4.7	Decommissioning
?

# 5	Troubleshooting
All tests and changes shall be made on dev environment and communicated with the user

# 6	Security
?
## 6.1	Risk Assessment
## 6.2	Vulnerability Assessment
## 6.3	Security Updates
## 6.4	Security Monitoring
## 6.5	Incident Handling

# 7	Disaster Recovery
## 7.1	Disaster Recovery
## 7.2	Business Continuity

# 8	Service Level Agreements

