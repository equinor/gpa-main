package com.equinor.neqsim.entities

import javax.persistence.*
import java.util.Date;

@Entity
class Transport {
    var volume: Float,
    var pressure: Float,
    var boilOffRate: Float,
    var from: Date,
    var to: Date,

    @Id @GeneratedValue var id: Long? = null

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "calculation_id")
    var calculation: Calculation? = null,
}
