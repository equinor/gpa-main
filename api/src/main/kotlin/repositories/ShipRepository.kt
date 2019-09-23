package com.equinor.neqsim.repositories

import com.equinor.neqsim.entities.Ship
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface ShipRepository : JpaRepository<Ship, Long>