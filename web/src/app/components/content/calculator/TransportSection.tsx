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
    let daysDiff;
    let hoursDiff;
    if (props.transport.fromDate && props.transport.toDate) {
        const from = moment(props.transport.fromDate);
        const to = moment(props.transport.toDate);
        daysDiff = to.diff(from, 'days').toString();
        hoursDiff = (to.diff(from, 'hours') % 24).toString();
    }
    return (
        <FormSection legendText='Transport' index={3}>
            <StTransportInputs>
                <StTransportInput>
                    <StandardInput
                        id="transport-volume"
                        label="Volume"
                        label2="m3"
                        onChange={(e: any) => {
                            setTransport("volume", e.target.value);
                        }}
                        onBlur={(e: any) => {
                            setTransport("volume", e.target.value, true);
                        }}
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
                        onChange={(e: any) => {
                            setTransport("pressure", e.target.value);
                        }}
                        onBlur={(e: any) => {
                            setTransport("pressure", e.target.value, true);
                        }}
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
                        onChange={(e: any) => {
                            setTransport("boilOffRate", e.target.value);
                        }}
                        onBlur={(e: any) => {
                            setTransport("boilOffRate", e.target.value, true);
                        }}
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
                            disabled={!props.transport.fromDate}
                            minDate={new Date(props.transport.fromDate)}
                        ></StandardDatePicker>
                    </div>
                </StTransportInput>
                <StDateInfo>
                    {props.transport.fromDate < props.transport.toDate && daysDiff && hoursDiff &&
                        <span><b>{daysDiff}</b> days and <b>{hoursDiff}</b> hours</span>
                    }
                </StDateInfo>
            </StTransportInputs>
        </FormSection>
    )

    function setTransport(name: keyof ITransport, value: any, toFixed?: boolean) {
        let transport: ITransport = props.transport;
        if (value !== "") {
            const formattedValue = toFixed ? parseFloat(parseFloat(value).toFixed(2)) : parseFloat(value);
            transport[name] = formattedValue as never;
            props.setTransport({ ...props.transport });
        }
        else {
            transport[name] = null as never;
            props.setTransport({... props.transport});
        }
    }
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