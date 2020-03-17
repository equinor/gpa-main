package com.equinor.neqsim.resolvers

import com.coxautodev.graphql.tools.GraphQLQueryResolver
import com.equinor.neqsim.entities.Ship
import com.equinor.neqsim.services.ShipService
import org.springframework.stereotype.Component

@Component
class ShipQueryResolver(private val shipService: ShipService): GraphQLQueryResolver {

    fun ships(): MutableIterable<Ship> {
        return shipService.findAll()
    }
}