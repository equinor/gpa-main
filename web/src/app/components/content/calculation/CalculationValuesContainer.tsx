import React from 'react';
import styled from 'styled-components';

import { ICalculation } from '../../../common/Interfaces';
import { H2 } from '../../elements/Texts';
import { CalculationSection } from "./CalculationSection";
import moment from 'moment';

interface ICalculationValuesContainer {
    calculation: ICalculation;
}

export const CalculationValuesContainer: React.FunctionComponent<ICalculationValuesContainer> = (props) => {

    let daysDiff;
    let hoursDiff;
    if (props.calculation.transport.fromDate && props.calculation.transport.toDate) {
        const from = moment(props.calculation.transport.fromDate);
        const to = moment(props.calculation.transport.toDate);
        daysDiff = to.diff(from, 'days').toString();
        hoursDiff = (to.diff(from, 'hours') % 24).toString();
    }

    return (
        <StCalculationValuesContainer>
            <H2>Values</H2>
            <CalculationSection
                number={1}
                title={"Ship"}
                rows={[
                    { display: ["Name", props.calculation.ship.name] },
                    { display: ["Country", props.calculation.ship.country] }
                ]}
            ></CalculationSection>
            <CalculationSection
                number={2}
                title={"Liquid"}
                rows={[
                    { display: ["nitrogen", props.calculation.fluid.nitrogen.value, "methane", props.calculation.fluid.methane.value, "iButane", props.calculation.fluid.iButane.value, "nPentane", props.calculation.fluid.nPentane.value] },
                    { display: ["", "", "ethane", props.calculation.fluid.ethane.value, "nButane", props.calculation.fluid.nButane.value, "nHexane", props.calculation.fluid.nHexane.value] },
                    { display: ["", "", "propane", props.calculation.fluid.propane.value, "iPentane", props.calculation.fluid.iPentane.value, "", ""] }
                ]}
                style={{ margin: "30px 0 0 0" }}
            ></CalculationSection>
            <CalculationSection
                number={3}
                title={"Transport"}
                rows={[
                    { display: ["Volume (m³)", props.calculation.transport.volume, "Pressure (bar)", props.calculation.transport.pressure, "", "", ""] },
                    {
                        display: [
                            "Boil off rate (Vol% per day)",
                            props.calculation.transport.boilOffRate,
                            "From",
                            moment(props.calculation.transport.fromDate).format("DD.MM. HH:MM"),
                            "To",
                            moment(props.calculation.transport.toDate).format("DD.MM. HH:MM"),
                            (daysDiff && hoursDiff) ? daysDiff + " days and " + hoursDiff + " hours" : ""
                        ]
                    },
                ]}
                style={{ margin: "30px 0 0 0" }}
            ></CalculationSection>
            <CalculationSection
                number={4}
                title={"Standard (ISO6976)"}
                rows={[
                    {
                        display: [
                            "Combustion temperature", props.calculation.standard.combustionTemperature,
                            "Measurement temperature", props.calculation.standard.measurementTemperature,
                            "Standard version", props.calculation.standard.standardVersion
                        ]
                    },
                    { display: ["Ideal gas reference state", props.calculation.standard.idealGasReferenceState ? "Yes" : "No", "", ""] }
                ]}
                style={{ margin: "30px 0 0 0" }}
            ></CalculationSection>
        </StCalculationValuesContainer>
    )
}

const StCalculationValuesContainer = styled.div`
    margin: 0 0 30px 0;
`;