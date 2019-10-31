FROM maven:3-jdk-8 as neqsim

RUN pwd && id
RUN git clone  -b 'v1.2' --single-branch --depth 1 https://github.com/equinor/neqsim && cd neqsim && mvn install -Drevision=1.2
RUN ls /root/.m2

FROM gradle:5.6-jdk11 as builder
COPY --from=neqsim /root/.m2 /root/.m2
COPY --chown=gradle:gradle . /home/gradle/src/
WORKDIR /home/gradle/src
RUN gradle build

FROM openjdk:11
EXPOSE 8080
COPY --from=builder /home/gradle/src/build/libs/*.jar /app/spring-boot-application.jar
WORKDIR /app

ENTRYPOINT ["java", "-jar", "/app/spring-boot-application.jar"]
