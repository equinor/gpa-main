package com.equinor.neqsim.entities

import javax.persistence.*

@Entity
class Fluid(
    var name: String,
    @OneToMany(fetch = FetchType.EAGER, mappedBy = "fluid")
    var components: MutableSet<Component> = mutableSetOf(),
    @Id @GeneratedValue var id: Long? = null
)