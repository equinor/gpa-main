package com.equinor.neqsim.resolvers

import com.coxautodev.graphql.tools.GraphQLQueryResolver
import com.equinor.neqsim.entities.Fluid
import com.equinor.neqsim.repositories.FluidRepository
import org.springframework.stereotype.Component

@Component
class FluidQueryResolver(private val fluidRepository: FluidRepository): GraphQLQueryResolver {

    fun fluids(): MutableIterable<Fluid> {
        val fluids = fluidRepository.findAll()
        return fluids
    }
}