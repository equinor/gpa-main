package com.equinor.neqsim.entities

import com.equinor.neqsim.utils.Auditable
import java.time.OffsetDateTime
import javax.persistence.*

@Entity
class Transport (
    var volume: Double,
    var pressure: Double,
    var boilOffRate: Double,
    var fromDate: OffsetDateTime,
    var toDate: OffsetDateTime,

    @Id @GeneratedValue var id: Long? = null,

    @OneToOne(fetch = FetchType.LAZY)
    @MapsId
    var calculation: Calculation? = null
): Auditable()
