package com.equinor.neqsim.entities

import javax.persistence.*
import MetricType

@Entity
class ResultRow {
    var time: MetricType,
    var wi: MetricType,
    var gcv: MetricType,
    var density: MetricType,
    var temp: MetricType,
    var volume: MetricType,
    var energy: MetricType,

    @Id @GeneratedValue var id: Long? = null

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "calculation_id")
    var calculation: Calculation? = null,
}
