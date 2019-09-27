import { FormSection } from "../../ui/FormSection"
import React from 'react';
import styled from 'styled-components/macro';
import { StandardInput, StLabel } from "../../elements/Inputs";
import { StandardDatePicker } from "../../elements/Dates";

export interface ITransport {

}

export interface ITransportSectionProps {
}

export const TransportSection: React.FC<ITransportSectionProps> = (props) => (
    <FormSection legendText='Transport' index={3}>
        <StTransportInputs>
            <StTransportInput>
                <StandardInput
                    id="transport-volume"
                    label="Volume"
                    label2="m^3"
                    onChange={() => { }}
                    placeholder="Volume"
                    value={""}
                    type="text"
                ></StandardInput>
            </StTransportInput>
            <StTransportInput>
                <StandardInput
                    id="transport-pressure"
                    label="Pressure"
                    label2="bara"
                    onChange={() => { }}
                    placeholder="Pressure"
                    value={""}
                    type="text"
                ></StandardInput>
            </StTransportInput>
            <StTransportInput>
                <StandardInput
                    id="transport-boilOffRate"
                    label="Boil off rate"
                    label2="bara"
                    onChange={() => { }}
                    placeholder="Boil off rate"
                    value={""}
                    type="text"
                ></StandardInput>
            </StTransportInput>
            <StTransportInput style={{flexDirection: "row", display: "flex"}}>
                <div style={{width: "50%"}}>
                    <StLabel>From</StLabel>
                    <StandardDatePicker
                        onChange={(e: any) => { }}
                    ></StandardDatePicker>
                </div>
                <div style={{width: "50%"}}>
                    <StLabel>To</StLabel>
                    <StandardDatePicker
                        onChange={(e: any) => { }}
                    ></StandardDatePicker>
                </div>
            </StTransportInput>
            <StDateInfo>
                <span><b>13</b> days and <b>5</b> hours</span>
            </StDateInfo>
        </StTransportInputs>
    </FormSection>
);

const StTransportInputs = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
`;
const StTransportInput = styled.div`
    width: 225px;
    margin: 0 30px 20px 0;
`;
const StDateInfo = styled.div`
    padding-top: 36px;
    box-sizing: border-box;
    > span {
        font-size: 12px;
    }
`;