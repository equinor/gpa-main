package com.equinor.neqsim.entities

import com.equinor.neqsim.utils.Auditable
import javax.persistence.*
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@EntityListeners(AuditingEntityListener::class)
class Calculation(
    @OneToOne(fetch = FetchType.EAGER, mappedBy = "calculation", cascade = [CascadeType.ALL])
    var transport: Transport,

    @OneToOne(fetch = FetchType.EAGER, mappedBy = "calculation", cascade = [CascadeType.ALL])
    var standard: Standard,

    @ManyToOne(fetch = FetchType.EAGER, cascade = [CascadeType.MERGE])
    @JoinColumn(name = "ship_id")
    var ship: Ship,

    @OneToOne(fetch = FetchType.EAGER, cascade = [CascadeType.MERGE])
    @JoinColumn(name = "fluid_id")
    var fluid: Fluid,

    @OneToMany(fetch = FetchType.EAGER, mappedBy = "calculation", cascade = [CascadeType.ALL])
    @OrderBy("time ASC")
    var result: MutableList<CalculationStep> = mutableListOf(),

    @Id @GeneratedValue var id: Long? = null
) : Auditable()
