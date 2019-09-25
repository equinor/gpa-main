import { FormSection } from "../../ui/FormSection"
import React from 'react';
import styled from 'styled-components/macro';
import { TextInput, S_Label, S_Label2, StandardInput } from "../../elements/Inputs";

export interface ITransport {

}

export interface ITransportSectionProps {
}

export const TransportSection: React.FC<ITransportSectionProps> = (props) => (
    <FormSection legendText='Transport' index={3}>
        <S_TransportInputs>
            <S_TransportInput>
                <StandardInput
                    id="transport-volume"
                    label="Volume"
                    label2="m^3"
                    onChange={() => { }}
                    placeholder="Volume"
                    value={""}
                    type="text"
                ></StandardInput>
            </S_TransportInput>
            <S_TransportInput>
                <StandardInput
                    id="transport-pressure"
                    label="Pressure"
                    label2="bara"
                    onChange={() => { }}
                    placeholder="Pressure"
                    value={""}
                    type="text"
                ></StandardInput>
            </S_TransportInput>
            <S_TransportInput>
                <StandardInput
                    id="transport-boilOffRate"
                    label="Boil off rate"
                    label2="bara"
                    onChange={() => { }}
                    placeholder="Boil off rate"
                    value={""}
                    type="text"
                ></StandardInput>
            </S_TransportInput>
            <S_TransportInput>
                <S_Label htmlFor='transport-from'>
                    Date
                </S_Label>
                <TextInput
                    id='transport-from'
                    placeholder='from'
                    value={""}
                    onChange={e => { }}
                />
            </S_TransportInput>
            <S_DateInfo>
                <span><b>13</b> days and <b>5</b> hours</span>
            </S_DateInfo>
        </S_TransportInputs>
    </FormSection>
);

const S_TransportInputs = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
`;
const S_TransportInput = styled.div`
    width: 225px;
    margin: 0 30px 20px 0;
`;
const S_DateInfo = styled.div`
    padding-top: 29px;
    box-sizing: border-box;
    > span {
        font-family: Equinor;
        font-size: 12px;
    }
`;