package com.equinor.neqsim.resolvers

import com.coxautodev.graphql.tools.GraphQLResolver
import com.equinor.neqsim.entities.ResultRow
import com.equinor.neqsim.tools.MetricType
import org.springframework.stereotype.Component

@Component
class ResultRowResolver(): GraphQLResolver<ResultRow> {

    fun time(resultRow: ResultRow): MetricType {
        return MetricType(
            value = resultRow.time,
            unit = resultRow.time_unit
        )
    }

    fun density(resultRow: ResultRow): MetricType {
        return MetricType(
            value = resultRow.density,
            unit = resultRow.density_unit
        )
    }

    fun energy(resultRow: ResultRow): MetricType {
        return MetricType(
            value = resultRow.energy,
            unit = resultRow.energy_unit
        )
    }

    fun gcv(resultRow: ResultRow): MetricType {
        return MetricType(
            value = resultRow.gcv,
            unit = resultRow.gcv_unit
        )
    }

    fun gcv2(resultRow: ResultRow): MetricType {
        return MetricType(
            value = resultRow.gcv2 ?: 0.0,
            unit = resultRow.gcv2_unit
        )
    }

    fun temp(resultRow: ResultRow): MetricType {
        return MetricType(
            value = resultRow.temp,
            unit = resultRow.temp_unit
        )
    }

    fun wi(resultRow: ResultRow): MetricType {
        return MetricType(
            value = resultRow.wi,
            unit = resultRow.wi_unit
        )
    }

    fun volume(resultRow: ResultRow): MetricType {
        return MetricType(
            value = resultRow.volume,
            unit = resultRow.volume_unit
        )
    }
}