package com.equinor.neqsim.repositories

import com.equinor.neqsim.entities.Transport
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface TransportRepository : JpaRepository<Transport, Long>