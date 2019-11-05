package com.equinor.neqsim.entities

import com.equinor.neqsim.utils.Auditable
import javax.persistence.*

@Entity
class Fluid (
    var nitrogen: Double,
    var nitrogen_unit: String = "mol/sec",
    var methane: Double,
    var methane_unit: String = "mol/sec",
    var ethane: Double,
    var ethane_unit: String = "mol/sec",
    var propane: Double,
    var propane_unit: String = "mol/sec",
    var iButane: Double,
    var iButane_unit: String = "mol/sec",
    var nButane: Double,
    var nButane_unit: String = "mol/sec",
    var iPentane: Double,
    var iPentane_unit: String = "mol/sec",
    var nPentane: Double,
    var nPentane_unit: String = "mol/sec",
    var nHexane: Double,
    var nHexane_unit: String = "mol/sec",

    @Id
    @GeneratedValue
    var id: Long? = null
): Auditable()
