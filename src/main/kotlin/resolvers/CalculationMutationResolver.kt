package com.equinor.neqsim.resolvers

import com.coxautodev.graphql.tools.GraphQLMutationResolver
import com.equinor.neqsim.entities.*
import com.equinor.neqsim.repositories.CalculationRepository
import com.equinor.neqsim.tools.FluidInput
import com.equinor.neqsim.tools.ShipInput
import com.equinor.neqsim.tools.StandardInput
import com.equinor.neqsim.tools.TransportInput
import org.springframework.stereotype.Component
import java.time.OffsetDateTime

@Component
class CalculationMutationResolver(private val calculationRepository: CalculationRepository) : GraphQLMutationResolver {

    fun addCalculation(
        shipInput: ShipInput,
        fluidInput: FluidInput,
        transportInput: TransportInput,
        standardInput: StandardInput
    ): Calculation {

        val ship = Ship(name = shipInput.name, country = shipInput.country)
        val fluid = Fluid(
            nitrogen = fluidInput.methane.value,
            nitrogen_unit = fluidInput.methane.unit,
            methane = fluidInput.methane.value,
            methane_unit = fluidInput.methane.unit,
            ethane = fluidInput.ethane.value,
            ethane_unit = fluidInput.ethane.unit,
            propane = fluidInput.propane.value,
            propane_unit = fluidInput.propane.unit,
            iButane = fluidInput.iButane.value,
            iButane_unit = fluidInput.iButane.unit,
            nButane = fluidInput.nButane.value,
            nButane_unit = fluidInput.nButane.unit,
            iPentane = fluidInput.iPentane.value,
            iPentane_unit = fluidInput.iPentane.unit,
            nPentane = fluidInput.nPentane.value,
            nPentane_unit = fluidInput.nPentane.unit,
            nHexane = fluidInput.nHexane.value,
            nHexane_unit = fluidInput.nHexane.unit
        )

        val transport = Transport(
            toDate = transportInput.toDate,
            fromDate = transportInput.fromDate,
            boilOffRate = transportInput.boilOffRate,
            pressure = transportInput.pressure,
            volume = transportInput.volume
        )

        val standard = Standard(
            combustionTemperature = standardInput.combustionTemperature,
            measurementTemperature = standardInput.measurementTemperature,
            idealGasReferenceState = standardInput.idealGasReferenceState
        )

        val calculation = Calculation(
            ship = ship,
            fluid = fluid,
            transport = transport,
            standard = standard
        )
        ship.calculations.add(calculation)
        fluid.calculation = calculation
        transport.calculation = calculation
        standard.calculation = calculation
        calculationRepository.save(calculation)
        return calculation
    }
}
