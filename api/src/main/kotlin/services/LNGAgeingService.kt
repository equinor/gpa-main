package com.equinor.neqsim.services

import com.equinor.neqsim.entities.*
import com.equinor.neqsim.repositories.CalculationRepository
import com.equinor.neqsim.utils.stringToDouble
import neqsim.fluidMechanics.flowSystem.twoPhaseFlowSystem.shipSystem.LNGship
import neqsim.thermo.system.SystemInterface
import neqsim.thermo.system.SystemSrkEos
import org.springframework.data.domain.Sort
import org.springframework.data.repository.findByIdOrNull
import org.springframework.stereotype.Service
import java.time.temporal.ChronoUnit
import javax.persistence.EntityNotFoundException

@Service
class LNGAgeingService(private val calculationRepository: CalculationRepository) {

    fun findOne(id: String) = calculationRepository.findByIdOrNull(id.toLong()) ?: throw EntityNotFoundException()

    fun findAll(): MutableIterable<Calculation> =
        calculationRepository.findAll(Sort.by(Sort.Direction.DESC, "createdDate"))

    fun createCalculation(ship: Ship, fluid: Fluid, transport: Transport, standard: Standard): Calculation {
        val calculation = Calculation(
            ship = ship,
            fluid = fluid,
            transport = transport,
            standard = standard
        )
        ship.calculations.add(calculation)
        transport.calculation = calculation
        standard.calculation = calculation

        // LNG ship calculation
        val system: SystemInterface = SystemSrkEos(273.15 - 161.4, transport.pressure)
        system.addComponent("nitrogen", fluid.nitrogen)
        system.addComponent("methane", fluid.methane)
        system.addComponent("ethane", fluid.ethane)
        system.addComponent("propane", fluid.propane)
        system.addComponent("i-butane", fluid.iButane)
        system.addComponent("n-butane", fluid.nButane)
        system.addComponent("i-pentane", fluid.iPentane)
        system.addComponent("n-pentane", fluid.nPentane)
        system.addComponent("n-hexane", fluid.nHexane)
        system.mixingRule = 2
        val lngShip = LNGship(system, transport.volume, transport.boilOffRate / 100.0).apply {
            standardISO6976.energyRefT = standard.combustionTemperature
            standardISO6976.volRefT = standard.measurementTemperature
            standardISO6976.referenceState = if (standard.idealGasReferenceState) "ideal" else "real"
            endTime = transport.fromDate.until(transport.toDate, ChronoUnit.HOURS).toDouble()
        }
        lngShip.createSystem()
        lngShip.init()
        lngShip.solveSteadyState(0)
        lngShip.solveTransient(0)
        val result = lngShip.getResults("result")

        for (resultRow in result.drop(1)) {
            calculation.result.add(
                CalculationStep(
                    time = stringToDouble(resultRow[0]),
                    temp = stringToDouble(resultRow[1]),
                    wi = stringToDouble(resultRow[2]),
                    gcv = stringToDouble(resultRow[3]),
                    gcvmass = stringToDouble(resultRow[16]),
                    density = stringToDouble(resultRow[4]),
                    volume = stringToDouble(resultRow[5]),
                    energy = stringToDouble(resultRow[15]) / 1000,
                    gas = Fluid(
                        methane = stringToDouble(resultRow[17]),
                        ethane = stringToDouble(resultRow[18]),
                        propane = stringToDouble(resultRow[19]),
                        iButane = stringToDouble(resultRow[20]),
                        nButane = stringToDouble(resultRow[21]),
                        iPentane = stringToDouble(resultRow[22]),
                        nPentane = stringToDouble(resultRow[23]),
                        nHexane = stringToDouble(resultRow[24]),
                        nitrogen = stringToDouble(resultRow[25])
                    ),
                    liquid = Fluid(
                        methane = stringToDouble(resultRow[6]),
                        ethane = stringToDouble(resultRow[7]),
                        propane = stringToDouble(resultRow[8]),
                        iButane = stringToDouble(resultRow[9]),
                        nButane = stringToDouble(resultRow[10]),
                        iPentane = stringToDouble(resultRow[11]),
                        nPentane = stringToDouble(resultRow[12]),
                        nHexane = stringToDouble(resultRow[13]),
                        nitrogen = stringToDouble(resultRow[14])
                    ),
                    calculation = calculation
                )
            )
        }

        calculationRepository.save(calculation)
        return calculation
    }

}