package com.equinor.neqsim.entities

import javax.persistence.*

@Entity
class Ship (
    var name: String,
    var country: String,

    @Id @GeneratedValue var id: Long? = null,

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "ship")
    var calculations: MutableSet<Calculation> = mutableSetOf()
)
