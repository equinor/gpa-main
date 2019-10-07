package com.equinor.neqsim.services

import com.equinor.neqsim.entities.Ship
import com.equinor.neqsim.repositories.ShipRepository
import org.springframework.data.domain.Sort
import org.springframework.stereotype.Service

@Service
class ShipService(private val shipRepository: ShipRepository) {

    fun findAll(): MutableIterable<Ship> = shipRepository.findAll(Sort.by(Sort.Direction.DESC, "createdDate"))

    fun loadOrPrepareShip(name: String, country: String) {
        //Find one
        //If found: Return Ship;
        //If not: Return Create ship
    }
}