package com.equinor.neqsim.resolvers

import com.coxautodev.graphql.tools.GraphQLMutationResolver
import com.equinor.neqsim.entities.Fluid
import com.equinor.neqsim.repositories.FluidRepository
import org.springframework.stereotype.Component

@Component
class FluidMutationResolver (private val fluidRepository: FluidRepository): GraphQLMutationResolver {
    fun newFluid(name: String): Fluid {
        val fluid = Fluid(name)
        fluidRepository.save(fluid)
        return fluid
    }
}