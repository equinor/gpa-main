package com.equinor.neqsim.resolvers

import com.coxautodev.graphql.tools.GraphQLMutationResolver
import com.equinor.neqsim.entities.Ship
import com.equinor.neqsim.repositories.ShipRepository
import org.springframework.stereotype.Component

@Component
class ShipMutationResolver (private val shipRepository: ShipRepository): GraphQLMutationResolver {
    fun newShip(name: String, country: String): Ship {
        val ship = Ship(name, country)
        shipRepository.save(ship)
        return ship
    }
}