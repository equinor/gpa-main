FROM gradle:5.6-jdk11 as builder
COPY --chown=gradle:gradle . /home/gradle/src/
WORKDIR /home/gradle/src
RUN gradle build

FROM openjdk:11
EXPOSE 8080
COPY --from=builder /home/gradle/src/build/libs/*.jar /app/spring-boot-application.jar
WORKDIR /app

ENTRYPOINT ["java", "-jar", "/app/spring-boot-application.jar"]
