import React from "react";
import { StandardInput, StandardBoolean } from "../../elements/Inputs";
import { FormSection } from "../../ui/FormSection";
import styled from "styled-components";

export interface IStandard {

}

export interface IStandardSectionProps {

}

export const StandardSection: React.FC<IStandardSectionProps> = (props) => (
    <FormSection legendText='Standard (ISO6976)' index={4}>
        <StStandardInputs>
            <StStandardInput>
                <StandardInput
                    id="combustion-temperature"
                    label="Combustion temperature"
                    onChange={() => { }}
                    placeholder="Combustion temperature"
                    value={""}
                    type="text"
                ></StandardInput>
            </StStandardInput>
            <StStandardInput>
                <StandardInput
                    id="measurement-temperature"
                    label="Measurement temperature"
                    onChange={() => { }}
                    placeholder="Measurement temperature"
                    value={""}
                    type="text"
                ></StandardInput>
            </StStandardInput>
            <div style={{ width: "100%" }}>
                <StandardBoolean
                    value={false}
                    text={"Ideal gas reference state"}
                    onChange={()=>{}}
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