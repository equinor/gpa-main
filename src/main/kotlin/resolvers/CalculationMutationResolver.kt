package com.equinor.neqsim.resolvers

import com.coxautodev.graphql.tools.GraphQLMutationResolver
import com.equinor.neqsim.entities.*
import com.equinor.neqsim.repositories.CalculationRepository
import org.springframework.stereotype.Component

@Component
class CalculationMutationResolver (private val calculationRepository: CalculationRepository): GraphQLMutationResolver {
    fun newCalculation(ship: Ship, fluid: Fluid, transport: Transport, standard: Standard, result: ResultRow): Calculation {
        val calculation = Calculation(ship, fluid, transport, standard, result)
        calculationRepository.save(calculation)
        return calculation
    }
}