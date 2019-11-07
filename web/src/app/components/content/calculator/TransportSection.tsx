import moment from 'moment';
import React from 'react';
import styled from 'styled-components/macro';

import { ITransport } from '../../../common/Interfaces';
import { isFilled } from '../../../utils/functions';
import { StandardDatePicker } from '../../elements/Dates';
import { StandardInput } from '../../elements/Inputs';
import { FormSection } from '../../ui/FormSection';

export interface ITransportSectionProps {
    transport: ITransport;

    setTransport(transport: ITransport): void;
}

export const TransportSection: React.FC<ITransportSectionProps> = (props) => {
    let daysDiff;
    let hoursDiff;
    if (isFilled(props.transport.fromDate) && isFilled(props.transport.toDate)) {
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
                        labelRight="m3"
                        onChange={(e: any) => {
                            setTransport("volume", e.target.value);
                        }}
                        onBlur={(e: any) => {
                            setTransport("volume", e.target.value, true);
                        }}
                        placeholder="Volume"
                        value={props.transport.volume}
                        type="number"
                        required={true}
                    ></StandardInput>
                </StTransportInput>
                <StTransportInput>
                    <StandardInput
                        id="transport-pressure"
                        label="Pressure"
                        labelRight="bar"
                        onChange={(e: any) => {
                            setTransport("pressure", e.target.value);
                        }}
                        onBlur={(e: any) => {
                            setTransport("pressure", e.target.value, true);
                        }}
                        placeholder="Pressure"
                        value={props.transport.pressure}
                        type="number"
                        required={true}
                    ></StandardInput>
                </StTransportInput>
                <StTransportInput>
                    <StandardInput
                        id="transport-boilOffRate"
                        label="Boil off rate"
                        labelRight="Vol% per day"
                        onChange={(e: any) => {
                            setTransport("boilOffRate", e.target.value);
                        }}
                        onBlur={(e: any) => {
                            setTransport("boilOffRate", e.target.value, true);
                        }}
                        placeholder="Boil off rate"
                        value={props.transport.boilOffRate}
                        type="number"
                        required={true}
                    ></StandardInput>
                </StTransportInput>
                <StTransportInput style={{ flexDirection: "row", display: "flex" }}>
                    <div style={{ width: "50%" }}>
                        <StandardDatePicker
                            id="transportFrom"
                            onChange={(e: any) => { props.setTransport({ ...props.transport, fromDate: e }) }}
                            value={isFilled(props.transport.fromDate) ? new Date(props.transport.fromDate) : undefined}
                            required={true}
                            label={"From"}
                        ></StandardDatePicker>
                    </div>
                    <div style={{ width: "50%" }}>
                        <StandardDatePicker
                            id="transportTo"
                            onChange={(e: any) => { props.setTransport({ ...props.transport, toDate: e }) }}
                            value={isFilled(props.transport.toDate) ? new Date(props.transport.toDate) : undefined}
                            disabled={!props.transport.fromDate}
                            minDate={isFilled(props.transport.fromDate) ? new Date(props.transport.fromDate) : undefined}
                            required={true}
                            label={"To"}
                        ></StandardDatePicker>
                    </div>
                </StTransportInput>
                {isFilled(props.transport.fromDate) && isFilled(props.transport.toDate) &&
                    <StDateInfo>
                        {props.transport.fromDate < props.transport.toDate && daysDiff && hoursDiff &&
                            <span><b>{daysDiff}</b> days and <b>{hoursDiff}</b> hours</span>
                        }
                    </StDateInfo>
                }
            </StTransportInputs>
        </FormSection>
    )

    function setTransport(name: keyof ITransport, value: any, toFixed?: boolean) {
        let transport: ITransport = props.transport;
        if (value !== "") {
            const formattedValue = toFixed ? parseFloat(parseFloat(value).toFixed(3)) : parseFloat(value);
            transport[name] = formattedValue as never;
            props.setTransport({ ...props.transport });
        }
        else {
            transport[name] = null as never;
            props.setTransport({ ...props.transport });
        }
    }
};

const StTransportInputs = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 635px;
    margin: 10px 0 0 0;
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