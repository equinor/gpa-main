package com.equinor.neqsim.entities

import javax.persistence.*

@Entity
class ResultRow (
    var time: Double,
    var time_unit: String = "hrs",
    var wi: Double,
    var wi_unit: String = "MJ/m^3",
    var gcv: Double,
    var gcv_unit: String = "MJ/m^3",
    var gcv2: Double,
    var gcv2_unit: String = "MJ/kg",
    var density: Double,
    var density_unit: String = "kg/m^3",
    var temp: Double,
    var temp_unit: String = "C",
    var volume: Double,
    var volume_unit: String = "m^3",
    var energy: Double,
    var energy_unit: String = "MJ",

    @Id @GeneratedValue var id: Long? = null,

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "calculation_id")
    var calculation: Calculation? = null
)
