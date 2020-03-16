package com.equinor.neqsim

import graphql.scalars.ExtendedScalars
import graphql.schema.GraphQLScalarType
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration

@Configuration
class AppConfiguration {
    @Bean
    fun dateTime(): GraphQLScalarType {
        return ExtendedScalars.DateTime
    }
}
