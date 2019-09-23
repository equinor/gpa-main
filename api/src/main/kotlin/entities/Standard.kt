package com.equinor.neqsim.entities

import javax.persistence.*

@Entity
class Standard (
    var combustionTemperature: Double,
    var measurementTemperature: Double,
    var idealGasReferenceState: Boolean,

    @Id @GeneratedValue var id: Long? = null,

    @OneToOne(fetch = FetchType.LAZY)
    @MapsId
    var calculation: Calculation? = null
)
