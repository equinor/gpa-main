package com.equinor.neqsim.entities

import com.equinor.neqsim.utils.Auditable
import javax.persistence.*

@Entity
class Standard (
    var combustionTemperature: Double,
    var measurementTemperature: Double,
    var idealGasReferenceState: Boolean,
    var standardVersion: String,

    @Id @GeneratedValue var id: Long? = null,

    @OneToOne(fetch = FetchType.LAZY)
    @MapsId
    var calculation: Calculation? = null
): Auditable()
