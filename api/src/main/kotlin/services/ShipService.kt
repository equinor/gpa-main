package com.equinor.neqsim.services

import com.equinor.neqsim.entities.Ship
import com.equinor.neqsim.repositories.ShipRepository
import org.springframework.stereotype.Service

@Service
class ShipService(private val shipRepository: ShipRepository) {

    fun findAll(): MutableIterable<Ship> = shipRepository.findAll()

}