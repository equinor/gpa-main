package com.equinor.neqsim.resolvers

import com.coxautodev.graphql.tools.GraphQLResolver
import com.equinor.neqsim.entities.CalculationStep
import com.equinor.neqsim.utils.MetricType
import org.springframework.stereotype.Component

@Component
class CalculationStepResolver(): GraphQLResolver<CalculationStep> {

    fun time(calculationStep: CalculationStep): MetricType {
        return MetricType(
            value = calculationStep.time,
            unit = calculationStep.time_unit
        )
    }

    fun density(calculationStep: CalculationStep): MetricType {
        return MetricType(
            value = calculationStep.density,
            unit = calculationStep.density_unit
        )
    }

    fun energy(calculationStep: CalculationStep): MetricType {
        return MetricType(
            value = calculationStep.energy,
            unit = calculationStep.energy_unit
        )
    }

    fun gcv(calculationStep: CalculationStep, isMass: Boolean): MetricType {
        //missing proper calculation
        if (isMass) {
            return MetricType(
                value = calculationStep.gcv * 10,
                unit = calculationStep.gcv_unit
            )
        }
        return MetricType(
            value = calculationStep.gcv,
            unit = calculationStep.gcv_unit
        )
    }

    fun temp(calculationStep: CalculationStep): MetricType {
        return MetricType(
            value = calculationStep.temp,
            unit = calculationStep.temp_unit
        )
    }

    fun wi(calculationStep: CalculationStep): MetricType {
        return MetricType(
            value = calculationStep.wi,
            unit = calculationStep.wi_unit
        )
    }

    fun volume(calculationStep: CalculationStep): MetricType {
        return MetricType(
            value = calculationStep.volume,
            unit = calculationStep.volume_unit
        )
    }
}