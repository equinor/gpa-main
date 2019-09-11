package com.equinor.neqsim.resolvers

import com.coxautodev.graphql.tools.GraphQLMutationResolver
import com.equinor.neqsim.entities.Component
import com.equinor.neqsim.entities.Fluid
import com.equinor.neqsim.repositories.ComponentRepository
import com.equinor.neqsim.repositories.FluidRepository
import org.springframework.data.repository.findByIdOrNull
import javax.persistence.EntityNotFoundException
import org.springframework.stereotype.Component as SpringComponent

@SpringComponent
class ComponentMutationResolver(private val fluidRepository: FluidRepository, private val componentRepository: ComponentRepository) : GraphQLMutationResolver {
    fun addComponent(name: String, amount: Double, fluidId: String): Fluid {
        val fluidReference = fluidRepository.getOne(fluidId.toLong())
        val component = Component(name, amount, fluidReference)
        componentRepository.save(component)
        return fluidRepository.findByIdOrNull(fluidId.toLong()) ?: throw EntityNotFoundException()
    }
}