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
    var gcvmass_unit: String = "?",
    var density: Double,
    var density_unit: String = "kg/m^3",
    var temp: Double,
    var temp_unit: String = "C",
    var volume: Double,
    var volume_unit: String = "m^3",
    var energy: Double,
    var energy_unit: String = "MJ",
    var xmethane: Double,
    var xmethane_unit: String = "?",
    var xethane: Double,
    var xethane_unit: String = "?",
    var xpropane: Double,
    var xpropane_unit: String = "?",
    var xic4: Double,
    var xic4_unit: String = "?",
    var xnc4: Double,
    var xnc4_unit: String = "?",
    var xic5: Double,
    var xic5_unit: String = "?",
    var xnc5: Double,
    var xnc5_unit: String = "?",
    var xnc6: Double,
    var xnc6_unit: String = "?",
    var xnitrogen: Double,
    var xnitrogen_unit: String = "?",
    var ymethane: Double,
    var ymethane_unit: String = "?",
    var yethane: Double,
    var yethane_unit: String = "?",
    var ypropane: Double,
    var ypropane_unit: String = "?",
    var yic4: Double,
    var yic4_unit: String = "?",
    var ync4: Double,
    var ync4_unit: String = "?",
    var yic5: Double,
    var yic5_unit: String = "?",
    var ync5: Double,
    var ync5_unit: String = "?",
    var ync6: Double,
    var ync6_unit: String = "?",
    var ynitrogen: Double,
    var ynitrogen_unit: String = "?",

    @Id @GeneratedValue var id: Long? = null,

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "calculation_id")
    var calculation: Calculation? = null
): Auditable()
