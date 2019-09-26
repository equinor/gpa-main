import React from "react";
import { StandardInput, StandardBoolean, StLabel } from "../../elements/Inputs";
import { FormSection } from "../../ui/FormSection";
import styled from "styled-components";
import { StandardSelect } from "../../elements/Selects";

export interface IStandard {

}

export interface IStandardSectionProps {

}

export const StandardSection: React.FC<IStandardSectionProps> = (props) => (
    <FormSection legendText='Standard (ISO6976)' index={4}>
        <StStandardInputs>
            <StStandardInput>
                <StLabel>
                    Combustion temperature
                </StLabel>
                <StandardSelect
                    options={[
                        {
                            value: "1",
                            label: "Value 1"
                        },
                        {
                            value: "2",
                            label: "Value 2"
                        },
                        {
                            value: "3",
                            label: "Value 3"
                        },
                    ]}
                    onChange={() => { }}
                ></StandardSelect>
            </StStandardInput>
            <StStandardInput>
                <StLabel>
                Measurement temperature
                </StLabel>
                <StandardSelect
                    options={[
                        {
                            value: "1",
                            label: "Value 1"
                        },
                        {
                            value: "2",
                            label: "Value 2"
                        },
                        {
                            value: "3",
                            label: "Value 3"
                        },
                    ]}
                    onChange={() => { }}
                ></StandardSelect>
            </StStandardInput>
            <div style={{ width: "100%" }}>
                <StandardBoolean
                    value={false}
                    text={"Ideal gas reference state"}
                    onChange={() => { }}
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