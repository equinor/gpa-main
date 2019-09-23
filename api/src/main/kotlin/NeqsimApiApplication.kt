package com.equinor.neqsim

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication


@SpringBootApplication
class NeqsimApiApplication

fun main(args: Array<String>) {
    runApplication<NeqsimApiApplication>(*args)
}
