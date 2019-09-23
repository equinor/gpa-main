package com.equinor.neqsim.repositories

import com.equinor.neqsim.entities.Standard
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface StandardRepository : JpaRepository<Standard, Long>