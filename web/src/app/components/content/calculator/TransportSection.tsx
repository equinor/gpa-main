import { FormSection } from "../../ui/FormSection"
import React from 'react';
import styled from 'styled-components/macro';
import { StandardInput, StLabel } from "../../elements/Inputs";
import { StandardDatePicker } from "../../elements/Dates";
import moment from "moment";

export interface ITransport {
    volume: number,
    pressure: number,
    boilOffRate: number,
    fromDate: string,
    toDate: string
}

export interface ITransportSectionProps {
    transport: ITransport;

    setTransport(transport: ITransport): void;
}

export const TransportSection: React.FC<ITransportSectionProps> = (props) => {
    var daysDiff;
    var hoursDiff;
    if (props.transport.fromDate && props.transport.toDate) {
        const from = moment(props.transport.fromDate);
        const to = moment(props.transport.toDate);
        daysDiff = to.diff(from, 'days');
        hoursDiff = to.diff(from, 'hours') % 24;
    }
    return (
        <FormSection legendText='Transport' index={3}>
            <StTransportInputs>
                <StTransportInput>
                    <StandardInput
                        id="transport-volume"
                        label="Volume"
                        label2="m^3"
                        onChange={(e: any) => { props.setTransport({ ...props.transport, volume: parseFloat(e.target.value) }) }}
                        placeholder="Volume"
                        value={props.transport.volume}
                        type="number"
                    ></StandardInput>
                </StTransportInput>
                <StTransportInput>
                    <StandardInput
                        id="transport-pressure"
                        label="Pressure"
                        label2="bara"
                        onChange={(e: any) => { props.setTransport({ ...props.transport, pressure: parseFloat(e.target.value) }) }}
                        placeholder="Pressure"
                        value={props.transport.pressure}
                        type="number"
                    ></StandardInput>
                </StTransportInput>
                <StTransportInput>
                    <StandardInput
                        id="transport-boilOffRate"
                        label="Boil off rate"
                        label2="bara"
                        onChange={(e: any) => { props.setTransport({ ...props.transport, boilOffRate: parseFloat(e.target.value) }) }}
                        placeholder="Boil off rate"
                        value={props.transport.boilOffRate}
                        type="number"
                    ></StandardInput>
                </StTransportInput>
                <StTransportInput style={{ flexDirection: "row", display: "flex" }}>
                    <div style={{ width: "50%" }}>
                        <StLabel>From</StLabel>
                        <StandardDatePicker
                            onChange={(e: any) => { props.setTransport({ ...props.transport, fromDate: e }) }}
                            value={new Date(props.transport.fromDate)}
                        ></StandardDatePicker>
                    </div>
                    <div style={{ width: "50%" }}>
                        <StLabel>To</StLabel>
                        <StandardDatePicker
                            onChange={(e: any) => { props.setTransport({ ...props.transport, toDate: e }) }}
                            value={new Date(props.transport.toDate)}
                        ></StandardDatePicker>
                    </div>
                </StTransportInput>
                <StDateInfo>
                    {daysDiff && hoursDiff &&
                        <span><b>{daysDiff}</b> days and <b>{hoursDiff}</b> hours</span>
                    }
                </StDateInfo>
            </StTransportInputs>
        </FormSection>
    )
};

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