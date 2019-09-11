package com.equinor.neqsim.repositories

import com.equinor.neqsim.entities.Component
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface ComponentRepository : JpaRepository<Component, Long>