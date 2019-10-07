package com.equinor.neqsim.utils

import org.springframework.data.annotation.CreatedDate
import org.springframework.data.annotation.LastModifiedDate
import org.springframework.data.jpa.domain.support.AuditingEntityListener
import java.util.*
import javax.persistence.EntityListeners
import javax.persistence.MappedSuperclass
import javax.persistence.Temporal
import javax.persistence.TemporalType

@MappedSuperclass
@EntityListeners(AuditingEntityListener::class)
abstract class Auditable {

    @CreatedDate
    @Temporal(TemporalType.TIMESTAMP)
    protected var createdDate: Date? = null;


    @LastModifiedDate
    @Temporal(TemporalType.TIMESTAMP)
    protected var lastModifiedDate: Date? = null;
}