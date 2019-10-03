import React from 'react';
import styled from 'styled-components/macro';

import { EColor } from '../../../common/Color';
import { ICalculation, IResult } from '../../../common/Interfaces';
import { IStandardTableRow, StandardTable } from '../../elements/Tables';
import { H2, H3 } from '../../elements/Texts';

export interface ICalculationContainer {
    calculation: ICalculation;
    style?: Object;
}

export const CalculationContainer = (props: ICalculationContainer) => {

    const header = ["TIME", "WI", "GCV", "DENSITY", "TEMP", "VOLUME", "ENERGY"];
    const initRow: IResult = props.calculation.result[0];
    const endRow: IResult = props.calculation.result[props.calculation.result.length - 1];

    //table
    const rows: IStandardTableRow[] = props.calculation.result.map((result: IResult) => {
        return {
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
    })

    //card result
    const cardResults: ICardResult[] = header.map((title: string) => {
        var lTitle = title.toLowerCase() as never;
        return {
            title: title,
            unit: initRow[lTitle]["unit"],
            initValue: initRow[lTitle]["value"],
            endValue: endRow[lTitle]["value"]
        }
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

export interface ICardResult {
    title: string;
    unit: any;
    initValue: any;
    endValue: any;
}