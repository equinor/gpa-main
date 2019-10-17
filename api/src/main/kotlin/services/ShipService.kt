package com.equinor.neqsim.services

import com.equinor.neqsim.entities.Ship
import com.equinor.neqsim.repositories.ShipRepository
import org.springframework.data.domain.Example
import org.springframework.data.domain.Sort
import org.springframework.data.jpa.domain.Specification
import org.springframework.data.jpa.repository.Query
import org.springframework.data.repository.findByIdOrNull
import org.springframework.data.repository.query.Param
import org.springframework.stereotype.Service

@Service
class ShipService(private val shipRepository: ShipRepository) {
    fun findAll(): MutableIterable<Ship> = shipRepository.findAll(Sort.by(Sort.Direction.DESC, "createdDate"))

    fun loadOrPrepareShip(name: String, country: String): Ship {
        val example = Example.of(Ship(name, country))
        val ships: List<Ship> = shipRepository.findAll(example);
        val ship: Ship = if (ships.size == 1)
            ships[0];
        else
            Ship(name, country);
        return ship;
    }
}