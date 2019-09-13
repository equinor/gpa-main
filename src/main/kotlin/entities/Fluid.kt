package com.equinor.neqsim.entities

import javax.persistence.*
import MetricType

@Entity
class Fluid {
    var nitrogen: MetricType,
    var methane: MetricType,
    var ethane: MetricType,
    var propane: MetricType,
    var iButane: MetricType,
    var nButane: MetricType,
    var iPentane: MetricType,
    var nPentane: MetricType,
    var nHexane: MetricType,

    @Id @GeneratedValue var id: Long? = null

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "calculation_id")
    var calculation: Calculation? = null,
}
