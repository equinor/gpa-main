package com.equinor.neqsim.resolvers

import com.coxautodev.graphql.tools.GraphQLQueryResolver
import com.equinor.neqsim.entities.Calculation
import com.equinor.neqsim.repositories.CalculationRepository
import org.springframework.data.repository.findByIdOrNull
import org.springframework.stereotype.Component
import javax.persistence.EntityNotFoundException

@Component
class CalculationQueryResolver(private val calculationRepository: CalculationRepository): GraphQLQueryResolver {

    fun calculation(id: String): Calculation {
        return calculationRepository.findByIdOrNull(id.toLong()) ?: throw EntityNotFoundException()
    }

    fun calculations(): MutableIterable<Calculation> {
        return calculationRepository.findAll()
    }
}
