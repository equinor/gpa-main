package com.equinor.neqsim.resolvers

import com.coxautodev.graphql.tools.GraphQLQueryResolver
import com.equinor.neqsim.entities.Calculation
import com.equinor.neqsim.repositories.CalculationRepository
import org.springframework.stereotype.Component

@Component
class CalculationQueryResolver(private val calculationRepository: CalculationRepository): GraphQLQueryResolver {

    fun calculation(id: ID):Calculation {
        val calculation = calculationRepository.findById(id.toLong())
        return calculation
    }

    fun calculations(): MutableIterable<Calculation> {
        val calculations = calculationRepository.findAll()
        return calculations
    }

    fun calculationResults(id: ID): Calculation {
        val calculation = calculationRepository.findById(id.toLong())
        return calculation.result
    }
}