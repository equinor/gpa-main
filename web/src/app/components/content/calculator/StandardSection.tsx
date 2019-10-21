import React from 'react';
import styled from 'styled-components';

import { IStandard } from '../../../common/Interfaces';
import { StandardBoolean } from '../../elements/Inputs';
import { StandardSelect } from '../../elements/Selects';
import { FormSection } from '../../ui/FormSection';

export interface IStandardSectionProps {
    standard: IStandard;

    setStandard(standard: IStandard): void;
}

export const StandardSection: React.FC<IStandardSectionProps> = (props) => (
    <FormSection legendText='Standard (ISO6976)' index={4}>
        <StStandardInputs>
            <StStandardInput>
                <StandardSelect
                    id="combustionTemperature"
                    label={"Combustion temperature"}
                    options={[
                        {
                            value: null,
                            label: "None"
                        },
                        {
                            value: "0",
                            label: "0"
                        },
                        {
                            value: "15",
                            label: "15"
                        },
                        {
                            value: "20",
                            label: "20"
                        },
                        {
                            value: "25",
                            label: "25"
                        },
                        {
                            value: "60",
                            label: "60"
                        }
                    ]}
                    onChange={(e: any) => {
                        props.setStandard({ ...props.standard, combustionTemperature: parseInt(e.value) })
                    }}
                    value={props.standard.combustionTemperature || props.standard.combustionTemperature === 0 ? {
                        label: props.standard.combustionTemperature.toString(),
                        value: props.standard.combustionTemperature.toString()
                    } : null}
                    required={true}
                ></StandardSelect>
            </StStandardInput>
            <StStandardInput>
                <StandardSelect
                    id="measurementTemperature"
                    label={"Measurement temperature"}
                    options={[
                        {
                            value: null,
                            label: "None"
                        },
                        {
                            value: "0",
                            label: "0"
                        },
                        {
                            value: "15",
                            label: "15"
                        },
                        {
                            value: "20",
                            label: "20"
                        },
                        {
                            value: "60",
                            label: "60"
                        }
                    ]}
                    onChange={(e: any) => { props.setStandard({ ...props.standard, measurementTemperature: parseInt(e.value) }) }}
                    value={props.standard.measurementTemperature || props.standard.measurementTemperature === 0 ? {
                        label: props.standard.measurementTemperature.toString(),
                        value: props.standard.measurementTemperature.toString()
                    } : null}
                    required={true}
                ></StandardSelect>
            </StStandardInput>
            <div style={{ width: "100%" }}>
                <StandardBoolean
                    value={props.standard.idealGasReferenceState}
                    text={"Ideal gas reference state"}
                    onChange={(e: boolean) => { props.setStandard({ ...props.standard, idealGasReferenceState: e }) }}
                ></StandardBoolean>
            </div>
        </StStandardInputs>
    </FormSection>
)

const StStandardInputs = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
`;

const StStandardInput = styled.div`
    width: 225px;
    margin: 0 30px 20px 0;
`;