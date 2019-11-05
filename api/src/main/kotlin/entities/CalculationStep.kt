package com.equinor.neqsim.entities

import com.equinor.neqsim.utils.Auditable
import javax.persistence.*

@Entity
class CalculationStep (
    var time: Double,
    var time_unit: String = "hrs",
    var wi: Double,
    var wi_unit: String = "MJ/m^3",
    var gcv: Double,
    var gcv_unit: String = "MJ/m^3",
    var gcvmass: Double,
    var gcvmass_unit: String = "MJ/kg",
    var density: Double,
    var density_unit: String = "kg/m^3",
    var temp: Double,
    var temp_unit: String = "C",
    var volume: Double,
    var volume_unit: String = "m^3",
    var energy: Double,
    var energy_unit: String = "GJ",

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "gas_id")
    var gas: Fluid? = null,

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "liquid_id")
    var liquid: Fluid? = null,

    @Id @GeneratedValue var id: Long? = null,

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "calculation_id")
    var calculation: Calculation? = null
): Auditable()
