package com.equinor.neqsim.repositories

import com.equinor.neqsim.entities.Calculation
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface CalculationRepository : JpaRepository<Calculation, Long>