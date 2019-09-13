package com.equinor.neqsim.entities

import javax.persistence.*

@Entity
class Calculation {
    @Id @GeneratedValue var id: Long? = null

//TODO: Relationship?
    @OneToOne(fetch = FetchType.Lazy, mappedBy = "calculation")
    var ship: Ship,

    @OneToOne(fetch = FetchType.Lazy, mappedBy = "calculation")
    var fluid: Fluid,

    @OneToOne(fetch = FetchType.Lazy, mappedBy = "calculation")
    var transport: Transport,

    @OneToOne(fetch = FetchType.Lazy, mappedBy = "calculation")
    var standard: Standard,

    @OneToMany(fetch = FetchType.Lazy, mappedBy = "calculation")
    var result: MutableSet<ResultRow> = mutableSetOf(),
}
