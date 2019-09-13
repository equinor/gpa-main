package com.equinor.neqsim.entities

import javax.persistence.*

@Entity
class Ship {
    var name: String,
    var country: String,

    @Id @GeneratedValue var id: Long? = null

//TODO: Relationship?
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "calculation_id")
    var calculation: Calculation? = null,
}
