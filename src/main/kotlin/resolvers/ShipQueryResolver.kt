package com.equinor.neqsim.resolvers

import com.coxautodev.graphql.tools.GraphQLQueryResolver
import com.equinor.neqsim.entities.Ship
import com.equinor.neqsim.repositories.ShipRepository
import org.springframework.stereotype.Component

@Component
class ShipQueryResolver(private val shipRepository: ShipRepository): GraphQLQueryResolver {

    fun ships(): MutableIterable<Ship> {
        val ships = shipRepository.findAll()
        return ships
    }
}