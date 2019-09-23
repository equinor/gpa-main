package com.equinor.neqsim.repositories

import com.equinor.neqsim.entities.Fluid
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface FluidRepository : JpaRepository<Fluid, Long>