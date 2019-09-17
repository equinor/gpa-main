package com.equinor.neqsim.entities

import javax.persistence.*

@Entity
class Calculation(
    @OneToOne(fetch = FetchType.EAGER, mappedBy = "calculation", cascade = [CascadeType.ALL])
    var fluid: Fluid,

    @OneToOne(fetch = FetchType.EAGER, mappedBy = "calculation", cascade = [CascadeType.ALL])
    var transport: Transport,

    @OneToOne(fetch = FetchType.EAGER, mappedBy = "calculation", cascade = [CascadeType.ALL])
    var standard: Standard,

    @ManyToOne(fetch = FetchType.EAGER, cascade = [CascadeType.PERSIST, CascadeType.REFRESH, CascadeType.MERGE])
    @JoinColumn(name = "ship_id")
    var ship: Ship,

    @OneToMany(fetch = FetchType.EAGER, mappedBy = "calculation")
    var result: MutableSet<ResultRow> = mutableSetOf(),

    @Id @GeneratedValue var id: Long? = null
)
