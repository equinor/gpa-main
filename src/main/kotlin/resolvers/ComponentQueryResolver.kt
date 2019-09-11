package com.equinor.neqsim.resolvers

import com.coxautodev.graphql.tools.GraphQLQueryResolver
import com.equinor.neqsim.entities.Component
import com.equinor.neqsim.repositories.ComponentRepository
import org.springframework.stereotype.Component as SpringComponent

@SpringComponent
class ComponentQueryResolver(private val componentRepository: ComponentRepository): GraphQLQueryResolver {

    fun components(): MutableIterable<Component> {
        return componentRepository.findAll()
    }
}