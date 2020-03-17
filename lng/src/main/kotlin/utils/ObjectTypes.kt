
package com.equinor.neqsim.utils

class MetricInput (
    val value: Double,
    val unit: String
)

class MetricType (
    val value: Double,
    val unit: String
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
