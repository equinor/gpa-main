package com.equinor.neqsim.repositories

import com.equinor.neqsim.entities.ResultRow
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface ResultRowRepository : JpaRepository<ResultRow, Long>