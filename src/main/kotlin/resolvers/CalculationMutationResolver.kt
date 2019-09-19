package com.equinor.neqsim.resolvers

import com.coxautodev.graphql.tools.GraphQLMutationResolver
import com.equinor.neqsim.entities.*
import com.equinor.neqsim.repositories.CalculationRepository
import com.equinor.neqsim.tools.*
import neqsim.fluidMechanics.flowSystem.twoPhaseFlowSystem.shipSystem.LNGship
import neqsim.thermo.system.SystemInterface
import neqsim.thermo.system.SystemSrkEos
import org.springframework.stereotype.Component

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

        // LNG ship calculation
        val system: SystemInterface = SystemSrkEos(273.15 - 161.4, transport.pressure)
        system.addComponent("nitrogen", fluid.nitrogen)
        system.addComponent("methane", fluid.methane)
        system.addComponent("ethane", fluid.ethane)
        system.addComponent("propane", fluid.propane)
        system.addComponent("iButane", fluid.iButane)
        system.addComponent("nButane", fluid.nButane)
        system.addComponent("iPentane", fluid.iPentane)
        system.addComponent("nPentane", fluid.nPentane)
        system.addComponent("nHexane", fluid.nHexane)
        val lngShip = LNGship(system, transport.volume, transport.boilOffRate).apply {
            standardISO6976.energyRefT = standard.combustionTemperature
            standardISO6976.volRefT = standard.measurementTemperature
            standardISO6976.referenceState = if (standard.idealGasReferenceState) "ideal" else "real"
        }
        lngShip.createSystem()
        lngShip.init()
        lngShip.solveSteadyState(0)
        lngShip.solveTransient(0)
        val result = lngShip.getResults("result")

        for (resultRow in result.drop(1)) {
            calculation.result.add(
                ResultRow(
                    time = stringToDouble(resultRow[1]),
                    temp = stringToDouble(resultRow[2]),
                    wi = stringToDouble(resultRow[3]),
                    gcv = stringToDouble(resultRow[4]),
                    density = stringToDouble(resultRow[5]),
                    volume = stringToDouble(resultRow[6]),
                    energy = stringToDouble(resultRow[7]),
                    calculation = calculation
                )
            )
        }

        calculationRepository.save(calculation)
        return calculation
    }
}
