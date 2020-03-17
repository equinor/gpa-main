package com.equinor.neqsim.resolvers

import com.coxautodev.graphql.tools.GraphQLQueryResolver
import com.equinor.neqsim.entities.Calculation
import com.equinor.neqsim.services.LNGAgeingService
import org.springframework.data.domain.Sort
import org.springframework.stereotype.Component

@Component
class CalculationQueryResolver(private val lngAgeingService: LNGAgeingService): GraphQLQueryResolver {

    fun calculation(id: String): Calculation {
        return lngAgeingService.findOne(id)
    }

    fun calculations(): MutableIterable<Calculation> {
        return lngAgeingService.findAll()
    }
}
