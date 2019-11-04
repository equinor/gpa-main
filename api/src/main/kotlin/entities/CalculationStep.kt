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
    var xmethane: Double,
    var xmethane_unit: String = "mol/sec",
    var xethane: Double,
    var xethane_unit: String = "mol/sec",
    var xpropane: Double,
    var xpropane_unit: String = "mol/sec",
    var xic4: Double,
    var xic4_unit: String = "mol/sec",
    var xnc4: Double,
    var xnc4_unit: String = "mol/sec",
    var xic5: Double,
    var xic5_unit: String = "mol/sec",
    var xnc5: Double,
    var xnc5_unit: String = "mol/sec",
    var xnc6: Double,
    var xnc6_unit: String = "mol/sec",
    var xnitrogen: Double,
    var xnitrogen_unit: String = "mol/sec",
    var ymethane: Double,
    var ymethane_unit: String = "mol/sec",
    var yethane: Double,
    var yethane_unit: String = "mol/sec",
    var ypropane: Double,
    var ypropane_unit: String = "mol/sec",
    var yic4: Double,
    var yic4_unit: String = "mol/sec",
    var ync4: Double,
    var ync4_unit: String = "mol/sec",
    var yic5: Double,
    var yic5_unit: String = "mol/sec",
    var ync5: Double,
    var ync5_unit: String = "mol/sec",
    var ync6: Double,
    var ync6_unit: String = "mol/sec",
    var ynitrogen: Double,
    var ynitrogen_unit: String = "mol/sec",

    @Id @GeneratedValue var id: Long? = null,

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "calculation_id")
    var calculation: Calculation? = null
): Auditable()
