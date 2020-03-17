package com.equinor.neqsim

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.data.jpa.repository.config.EnableJpaAuditing


@SpringBootApplication
@EnableJpaAuditing
class NeqsimApiApplication

fun main(args: Array<String>) {
    runApplication<NeqsimApiApplication>(*args)
}
