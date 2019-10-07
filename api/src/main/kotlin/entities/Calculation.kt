package com.equinor.neqsim.entities

import com.equinor.neqsim.utils.Auditable
import javax.persistence.*
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@EntityListeners(AuditingEntityListener::class)
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

    @OneToMany(fetch = FetchType.EAGER, mappedBy = "calculation", cascade = [CascadeType.ALL])
    var result: MutableSet<CalculationStep> = mutableSetOf(),

    @Id @GeneratedValue var id: Long? = null
) : Auditable()
