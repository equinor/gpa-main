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
                    //ageing
                    time = stringToDouble(resultRow[0]),
                    temp = stringToDouble(resultRow[1]),
                    wi = stringToDouble(resultRow[2]),
                    gcv = stringToDouble(resultRow[3]),
                    gcvmass = stringToDouble(resultRow[16]),
                    density = stringToDouble(resultRow[4]),
                    volume = stringToDouble(resultRow[5]),
                    energy = stringToDouble(resultRow[15]),
                    //liquid
                    xmethane = stringToDouble(resultRow[6]),
                    xethane = stringToDouble(resultRow[7]),
                    xpropane = stringToDouble(resultRow[8]),
                    xic4 = stringToDouble(resultRow[9]),
                    xnc4 = stringToDouble(resultRow[10]),
                    xic5 = stringToDouble(resultRow[11]),
                    xnc5 = stringToDouble(resultRow[12]),
                    xnc6 = stringToDouble(resultRow[13]),
                    xnitrogen = stringToDouble(resultRow[14]),
                    //gas
                    ymethane = stringToDouble(resultRow[17]),
                    yethane = stringToDouble(resultRow[18]),
                    ypropane = stringToDouble(resultRow[19]),
                    yic4 = stringToDouble(resultRow[20]),
                    ync4 = stringToDouble(resultRow[21]),
                    yic5 = stringToDouble(resultRow[22]),
                    ync5 = stringToDouble(resultRow[23]),
                    ync6 = stringToDouble(resultRow[24]),
                    ynitrogen = stringToDouble(resultRow[25]),
                    calculation = calculation
                )
            )
        }

        calculationRepository.save(calculation)
        return calculation
    }

}