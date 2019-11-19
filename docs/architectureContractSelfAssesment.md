# Neqsim

## Overview
NeqSim (Non-Equilibrium Simulator) is a tool for estimation of fluid behavior and process design for oil and gas production. The basis for NeqSim is a library of fundamental mathematical models related to phase behavior and physical properties of oil and gas. The Radixs portal is a web-based user interface for NeqSim.

Currently NeqSim includes the LNG ageing tool. It calculates the effect of boil off from LNG ships during transport from loading to off-loading. The calculations are based on known volume and composition of loaded LNG. The boil off rate, pressure and ship transport time are used as input for the calculations.

This solution replaces the original one and moves it to the cloud using Radix and Azure.

The development work has started in September 2019.

The software has been developed by SIT developers in Trondheim.

## Self assessment

### General
1. __Which business area is the solution meant for? (Business capability)__ 
TPD

2. __Application description (brief)__
See overview

3. __Main technologies (programming languages, frameworks, run-time environments etc)__
Client: React, Typescript, Apollo
API/backend: Kotlin, Graphql, Spring Boot 
Database: PostgreSQL
Hosting: Radix, Azure, Docker

4. __Where will the software be hosted__
Radix, Azure
Testing: https://neqsim.app.playground.radix.equinor.com/
Deployed: http://neqsim.equinor.com/

5. __Link to architecture diagrams (preferably C4 Model for software architecture)__
xxxxxxxxxxxxxxxxxxxxxxxxx //(put to github repo)

6. __Has the EITA contact been involved to ensure alignment with the strategy for the business area?__ 
? (Need to ask) EITA contact to be assigned

### Software Development
1. __Does the software use any technology components not registered as Now/green (or not listed at all) in https://techlifecycle.equinor.com? If yes, please list them.__ 
No

2. __Does the application expose relevant data/functionality only using approved API mechanisms, as listed in https://techlifecycle.equinor.com ?__ 
Yes

3. __Are your API(s) listed in the API Portal at https://api.equinor.com?__ 
No

4. __Have you evaluated how the application should handle personal data, with GDPR regulations in mind? This includes logging of information that can identify a person, like name name, userID, email, etc.__ 
? This application does not store any personal data. If any logging is done, it is by Radix/Azure

5. __Is the software subject to export control?__ 
No, it is open source

6. __TR1621, 2.8.1: "All software developed by/for Equinor shall be made opensource, unless IP rights prevents this or there are unacceptable risks." Have you made your software open source? If not, please explain why.__ 
Yes

7. __If you are considering buying (or already have bought) software tools / frameworks - have you considered open source alternatives?__ 
N/A. Project is using only open source

8. __Have all team members participated on software developer onboarding within the last 12 months?__ 
Yes

9. __Does the team follow a documented Software Development Lifecycle Process? Describe very briefly.__ 
Yes, https://wiki.equinor.com/wiki/index.php/Software_development_process

10. __Do you do auditable code reviews for at least the major/central parts of the code?__ 
Yes

11. __Do you deliver your software in iterations, with short feedback loops?__ 
Yes

12. __Do you have a process for continous improvement (e.g. by regular retrospectives)?__ 
? No retrospectives, just feedbacks and reviews

13. __Do the software developers have direct contact with the users of the software?__ 
Yes

14. __Do you have an automated CI/CD pipeline?__ 
Yes, automated pipeline 

15. __Please describe (using keywords) how the software is being tested?__ 
! User testing, unit and snapshot testing. To do: testing on API/Backend

16. __Do you have automated tests, run as part of your CI/CD pipeline?__ 
Yes, for client testing

17. __Have you assessed the technical debt in the software? How will you handle it?__ 
It was assessed. It is a new project, we refactor it continuously

18. __If your application contains a GUI, are you aligning your design with the emerging Equinor Design System: https://eds.equinor.com__ 
Yes, we used EDS to design the prototypes. Then we coded the components ourselves, because it is not ready yet in EDS

### Security and information management
1. __Do you know who the information owner is?__ 
?  

2. __What is the classification of the information handled by the software (open, internal, restricted, confidential)?__ 
? Internal

3. __Have you assessed how the information classification impact the security in the software?__ 
? To be assessed

4. __Has a Security Risk Assessment been performed (ordered in Services@Equinor as "Information Risk Assessment)?__ 
No

5. __If you will move data into the Data Lake Legal Risk Assessment(s) must be performed; one LRA for moving data into the lake, another LRA for exposing data from the lake through an API. Have you done this, if relevant?__ 
? N/A //Is it relevant to Radix cloud?

6. __Will you (or have you) ordered a penetration test?__ 
No

### Operations
1. __Which team / department will have the operational reponsibility for the software?__ 
? 

2. __Has the RunBook been created?__ 
Yes

3. __Has service design been done (LM of the department with operational responsibility is responsible)?__ 
? Not yet

### Other
1. __Are there other topics or issues you would like to discuss? Please list them.__
No

# Project and Leading advisors summary

- **Leading advisor** (primary contact): ? Øyvind Rønne
- **EITA architect** (primary contact): ? 

Use `R` for `recommend` or `NR` for `Not Recommended` to visualize the “state” of the issues raised.

| Responsible      | Content                                                   | Result (Recommend-R or Not Recommended-NR) | Comments      |
|------------------|-----------------------------------------------------------|--------------------------------------------|---------------|
| EITA             | Aligned with BA strategy                                  |                 ?                          | Comments here |
| EITA             | Aligned with (or develop) TO-BE architecture for the area |                 ?                          | Comments here |
| Leading advisors | Comply with technical direction                           |                 ?                          | Comments here |
| Leading advisors | IT Technology                                             |                 ?                          | Comments here |
| Leading advisors | Information Management                                    |                 ?                          | Comments here |

---


# Actions

| Responsible      | Action                                                                           | Deadline         | 
|------------------|----------------------------------------------------------------------------------|------------------|
| Team             | Deploy and stabilize MVP                                                         | End of 2019      |


---

# Meeting log

## 12.11.2019: Specified scope for the MVP

**Participants**:
Jan Kondula, Jostein Aune Solaas, Tatiana Anatolyevna Igumnova, Ingvald Skaug

## Next meeting

## Discussions