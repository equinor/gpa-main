package com.equinor.neqsim.entities

import javax.persistence.*

@Entity
class Standard {
    var combustionTemperature: Float,
    var measurementTemperature: Float,
    var idealGasReferenceState: Boolean,

    @Id @GeneratedValue var id: Long? = null

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "calculation_id")
    var calculation: Calculation? = null,
}
