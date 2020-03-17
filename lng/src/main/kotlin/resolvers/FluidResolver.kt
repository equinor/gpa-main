package com.equinor.neqsim.resolvers

import com.coxautodev.graphql.tools.GraphQLResolver
import com.equinor.neqsim.entities.Fluid
import com.equinor.neqsim.utils.MetricType
import org.springframework.stereotype.Component

@Component
class FluidResolver(): GraphQLResolver<Fluid> {

    fun nitrogen(fluid: Fluid): MetricType {
        return MetricType(
            value = fluid.nitrogen,
            unit = fluid.nitrogen_unit
        )
    }
    fun methane(fluid: Fluid): MetricType {
        return MetricType(
            value = fluid.methane,
            unit = fluid.methane_unit
        )
    }
    fun ethane(fluid: Fluid): MetricType {
        return MetricType(
            value = fluid.ethane,
            unit = fluid.ethane_unit
        )
    }
    fun propane(fluid: Fluid): MetricType {
        return MetricType(
            value = fluid.propane,
            unit = fluid.propane_unit
        )
    }
    fun iButane(fluid: Fluid): MetricType {
        return MetricType(
            value = fluid.iButane,
            unit = fluid.iButane_unit
        )
    }
    fun nButane(fluid: Fluid): MetricType {
        return MetricType(
            value = fluid.nButane,
            unit = fluid.nButane_unit
        )
    }
    fun iPentane(fluid: Fluid): MetricType {
        return MetricType(
            value = fluid.iPentane,
            unit = fluid.iPentane_unit
        )
    }
    fun nPentane(fluid: Fluid): MetricType {
        return MetricType(
            value = fluid.nPentane,
            unit = fluid.nPentane_unit
        )
    }
    fun nHexane(fluid: Fluid): MetricType {
        return MetricType(
            value = fluid.nHexane,
            unit = fluid.nHexane_unit
        )
    }
}