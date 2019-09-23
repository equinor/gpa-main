
package com.equinor.neqsim.tools

import java.time.OffsetDateTime
import java.util.*

class MetricInput (
    val value: Double,
    val unit: String
)

class MetricType (
    val value: Double,
    val unit: String
)

class ShipInput (
    val name: String,
    val country: String
)

class StandardInput (
    val combustionTemperature: Double,
    val measurementTemperature: Double,
    val idealGasReferenceState: Boolean
)

class TransportInput (
    val volume: Double,
    val pressure: Double,
    val boilOffRate: Double,
    val toDate: OffsetDateTime,
    val fromDate: OffsetDateTime
)

data class FluidInput (
    val nitrogen: MetricInput,
    val methane: MetricInput,
    val ethane: MetricInput,
    val propane: MetricInput,
    val iButane: MetricInput,
    val nButane: MetricInput,
    val iPentane: MetricInput,
    val nPentane: MetricInput,
    val nHexane: MetricInput
)
