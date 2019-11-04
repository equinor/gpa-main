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

    fun gcv(calculationStep: CalculationStep): MetricType {
        return MetricType(
            value = calculationStep.gcv,
            unit = calculationStep.gcv_unit
        )
    }

    fun gcvmass(calculationStep: CalculationStep): MetricType {
        return MetricType(
            value = calculationStep.gcvmass,
            unit = calculationStep.gcvmass_unit
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

    fun xmethane(calculationStep: CalculationStep): MetricType {
        return MetricType(
            value = calculationStep.xmethane,
            unit = calculationStep.xmethane_unit
        )
    }

    fun xethane(calculationStep: CalculationStep): MetricType {
        return MetricType(
            value = calculationStep.xethane,
            unit = calculationStep.xethane_unit
        )
    }

    fun xpropane(calculationStep: CalculationStep): MetricType {
        return MetricType(
            value = calculationStep.xpropane,
            unit = calculationStep.xpropane_unit
        )
    }

    fun xic4(calculationStep: CalculationStep): MetricType {
        return MetricType(
            value = calculationStep.xic4,
            unit = calculationStep.xic4_unit
        )
    }

    fun xnc4(calculationStep: CalculationStep): MetricType {
        return MetricType(
            value = calculationStep.xnc4,
            unit = calculationStep.xnc4_unit
        )
    }

    fun xic5(calculationStep: CalculationStep): MetricType {
        return MetricType(
            value = calculationStep.xic5,
            unit = calculationStep.xic5_unit
        )
    }

    fun xnc5(calculationStep: CalculationStep): MetricType {
        return MetricType(
            value = calculationStep.xnc5,
            unit = calculationStep.xnc5_unit
        )
    }

    fun xnc6(calculationStep: CalculationStep): MetricType {
        return MetricType(
            value = calculationStep.xnc6,
            unit = calculationStep.xnc6_unit
        )
    }

    fun xnitrogen(calculationStep: CalculationStep): MetricType {
        return MetricType(
            value = calculationStep.xnitrogen,
            unit = calculationStep.xnitrogen_unit
        )
    }

    fun ymethane(calculationStep: CalculationStep): MetricType {
        return MetricType(
            value = calculationStep.ymethane,
            unit = calculationStep.ymethane_unit
        )
    }

    fun yethane(calculationStep: CalculationStep): MetricType {
        return MetricType(
            value = calculationStep.yethane,
            unit = calculationStep.yethane_unit
        )
    }

    fun ypropane(calculationStep: CalculationStep): MetricType {
        return MetricType(
            value = calculationStep.ypropane,
            unit = calculationStep.ypropane_unit
        )
    }

    fun yic4(calculationStep: CalculationStep): MetricType {
        return MetricType(
            value = calculationStep.yic4,
            unit = calculationStep.yic4_unit
        )
    }

    fun ync4(calculationStep: CalculationStep): MetricType {
        return MetricType(
            value = calculationStep.ync4,
            unit = calculationStep.ync4_unit
        )
    }

    fun yic5(calculationStep: CalculationStep): MetricType {
        return MetricType(
            value = calculationStep.yic5,
            unit = calculationStep.yic5_unit
        )
    }

    fun ync5(calculationStep: CalculationStep): MetricType {
        return MetricType(
            value = calculationStep.ync5,
            unit = calculationStep.ync5_unit
        )
    }

    fun ync6(calculationStep: CalculationStep): MetricType {
        return MetricType(
            value = calculationStep.ync6,
            unit = calculationStep.ync6_unit
        )
    }

    fun ynitrogen(calculationStep: CalculationStep): MetricType {
        return MetricType(
            value = calculationStep.ynitrogen,
            unit = calculationStep.ynitrogen_unit
        )
    }
}