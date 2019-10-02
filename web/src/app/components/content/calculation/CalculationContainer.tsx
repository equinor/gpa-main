import React from 'react';
import styled from 'styled-components/macro';

import { EColor } from '../../../common/Color';
import { IStandardTableRow, StandardTable } from '../../elements/Tables';
import { H2, H3 } from '../../elements/Texts';
import { IFluidInput, IMetricInput } from '../calculator/CalculateFormContainer';
import { IShip } from '../calculator/ShipSection';
import { IStandard } from '../calculator/StandardSection';
import { ITransport } from '../calculator/TransportSection';

export interface ICalculationContainer {
    calculation: {
        id: string,
        fluid: IFluidInput;
        ship: IShip;
        standard: IStandard;
        transport: ITransport;
        result: IResult[];
    };
    style?: Object;
}

export const CalculationContainer = (props: ICalculationContainer) => {

    var header = ["TIME", "WI", "GCV", "DENSITY", "TEMP", "VOLUME", "ENERGY"];
    var rows: IStandardTableRow[] = [];
    var initRow: IResult;
    var endRow: IResult;
    var cardResults: ICardResult[] = [];

    //table
    props.calculation.result.forEach((result: IResult, index: number) => {
        if (index === 0) {
            initRow = result;
        }
        else if (index === props.calculation.result.length - 1) {
            endRow = result;
        }
        var row: IStandardTableRow = {
            value: result.id,
            display: [
                result.time.value,
                result.wi.value,
                result.gcv.value,
                result.density.value,
                result.temp.value,
                result.volume.value,
                result.energy.value
            ]
        }
        rows.push(row);
    })

    //card result (TODO: improve)
    header.forEach((title:string, index) =>{
        cardResults.push({
            title: title,
            unit: initRow[title.toLowerCase() as never]["unit"],
            initValue: initRow[title.toLowerCase() as never]["value"],
            endValue: endRow[title.toLowerCase() as never]["value"]
        })
    })

    return (
        <StCalculationContainer style={props.style}>
            <H2 style={{ width: "100%" }}>Results</H2>
            <div style={{ display: "flex" }}>
                {cardResults.map((result: ICardResult, index) => {
                    return (
                        <StCalculation key={index}>
                            <span style={{ fontSize: "18px", margin: "20px 0 10px 0" }}>{result.title.toUpperCase()}</span>
                            <span style={{ fontSize: "10px" }}>{result.unit}</span>
                            <span style={{ color: "#73B1B5", fontSize: "14px", margin: "21px 0px 13px 0" }}>{result.initValue}</span>
                            <span style={{ color: EColor.GREEN, fontSize: "14px", fontWeight: 500 }}>{result.endValue}</span>
                        </StCalculation>
                    )
                })}
            </div>
            <StLinks>
                <span>Show more results</span>
                &nbsp;•&nbsp;
                <span>Get componsition</span>
                &nbsp;•&nbsp;
                <span>Export to Excel</span>
            </StLinks>
            <H3 style={{ width: "100%", margin: "0 0 15px 0" }}>More results</H3>
            <StandardTable
                header={header}
                rows={rows}
            ></StandardTable>
        </StCalculationContainer>
    )
}

const StCalculationContainer = styled.div`
    width: 100%;
`;

const StCalculation = styled.div`
    width: 100px;
    height: 140px;
    background-color: ${EColor.LIGHT_GREEN};
    margin: 0 3px 0 0;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    > span {
        width: 100%;
        text-align: center;
    }
`;

const StLinks = styled.div`
    width: 100%;
    margin: 20px 0 30px 0;
    font-size: 16px;
    > span {
        cursor: pointer;
        text-decoration: underline;
        margin: 0 10px;
        :hover {
            text-decoration: none;
        }
    }
`;

export interface IResult {
    id?: string;
    density: IMetricInput;
    energy: IMetricInput;
    gcv: IMetricInput;
    temp: IMetricInput;
    time: IMetricInput;
    volume: IMetricInput;
    wi: IMetricInput;
}

export interface ICardResult {
    title: string;
    unit: any;
    initValue: any;
    endValue: any;
}