import org.jetbrains.kotlin.gradle.tasks.KotlinCompile

plugins {
    kotlin("jvm") version "1.3.50"
    kotlin("plugin.spring") version "1.3.50"
    kotlin("plugin.jpa") version "1.3.50"
    kotlin("plugin.allopen") version "1.3.50"

    id("org.springframework.boot") version "2.1.7.RELEASE"
    id("io.spring.dependency-management") version "1.0.8.RELEASE"

    application
}

group = "com.equinor.neqsim"
version = "1.0-SNAPSHOT"

application {
    mainClassName = "com.equinor.neqsim.NeqsimApiApplicationKt"
}

allOpen {
    annotation("javax.persistence.Entity")
    annotation("javax.persistence.Embeddable")
    annotation("javax.persistence.MappedSuperclass")
}

repositories {
    mavenCentral()
    maven { url = uri("https://repo.spring.io/milestone") }
    mavenLocal()
}

dependencies {

    implementation(kotlin("stdlib-jdk8"))
    implementation("org.springframework.boot:spring-boot-starter")

    implementation("com.graphql-java-kickstart:graphql-spring-boot-starter:5.10.0")
    implementation("com.graphql-java-kickstart:graphiql-spring-boot-starter:5.10.0")
    implementation("com.graphql-java-kickstart:graphql-java-tools:5.6.1")

    implementation("com.graphql-java:graphql-java-extended-scalars:1.0")

    runtimeOnly("org.postgresql:postgresql")
    implementation("org.springframework.boot:spring-boot-starter-data-jpa")

    implementation("org.jetbrains.kotlin:kotlin-reflect")
    testImplementation("org.springframework.boot:spring-boot-starter-test")
    implementation("org.springframework:NeqSim:1.1")
}

tasks.withType<KotlinCompile> {
    kotlinOptions.jvmTarget = "1.8"
}