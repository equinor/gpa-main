import React from "react";
import { StandardBoolean, StLabelLeft } from "../../elements/Inputs";
import { FormSection } from "../../ui/FormSection";
import styled from "styled-components";
import { StandardSelect } from "../../elements/Selects";
import { IStandard } from "../../../common/Interfaces";

export interface IStandardSectionProps {
    standard: IStandard;

    setStandard(standard: IStandard): void;
}

export const StandardSection: React.FC<IStandardSectionProps> = (props) => (
    <FormSection legendText='Standard (ISO6976)' index={4}>
        <StStandardInputs>
            <StStandardInput>
                <StLabelLeft>
                    Combustion temperature
                </StLabelLeft>
                <StandardSelect
                    options={[
                        {
                            value: 0,
                            label: "0"
                        },
                        {
                            value: 15,
                            label: "15"
                        },
                        {
                            value: 20,
                            label: "20"
                        },
                        {
                            value: 25,
                            label: "25"
                        },
                        {
                            value: 60,
                            label: "60"
                        }
                    ]}
                    onChange={(e: any) => {
                        props.setStandard({ ...props.standard, combustionTemperature: e.value })
                    }}
                    value={props.standard.combustionTemperature ? {
                        label: props.standard.combustionTemperature.toString(),
                        value: props.standard.combustionTemperature.toString()
                    } : null}
                ></StandardSelect>
            </StStandardInput>
            <StStandardInput>
                <StLabelLeft>
                    Measurement temperature
                </StLabelLeft>
                <StandardSelect
                    options={[
                        {
                            value: 0,
                            label: "0"
                        },
                        {
                            value: 15,
                            label: "15"
                        },
                        {
                            value: 20,
                            label: "20"
                        },
                        {
                            value: 60,
                            label: "60"
                        }
                    ]}
                    onChange={(e: any) => { props.setStandard({ ...props.standard, measurementTemperature: e.value }) }}
                    value={props.standard.measurementTemperature ? {
                        label: props.standard.measurementTemperature.toString(),
                        value: props.standard.measurementTemperature.toString()
                    } : null}
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