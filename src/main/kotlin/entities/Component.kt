package com.equinor.neqsim.entities

import javax.persistence.*

@Entity
class Component(
    var name: String,
    var amount: Double,

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "fluid_id")
    var fluid: Fluid? = null,
    @Id @GeneratedValue var id: Long? = null
)