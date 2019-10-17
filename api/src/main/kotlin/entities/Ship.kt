package com.equinor.neqsim.entities

import com.equinor.neqsim.utils.Auditable
import javax.persistence.*

@Entity
@Table(
    uniqueConstraints = [UniqueConstraint(columnNames = ["name", "country"])]
)
class Ship (
    @Column(unique = true)
    var name: String,
    var country: String,

    @Id @GeneratedValue var id: Long? = null,

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "ship")
    var calculations: MutableSet<Calculation> = mutableSetOf()
): Auditable()
