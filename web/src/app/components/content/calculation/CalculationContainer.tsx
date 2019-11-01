import moment from 'moment';
import React, { useState } from 'react';
import styled from 'styled-components/macro';

import { EColor } from '../../../common/Color';
import { ICalculation, IResult } from '../../../common/Interfaces';
import { IStandardTableRow, StandardTable } from '../../elements/Tables';
import { H2 } from '../../elements/Texts';

export interface ICalculationContainer {
    calculation: ICalculation;
    style?: Object;
}

export const CalculationContainer: React.FunctionComponent<ICalculationContainer> = (props) => {

    const [moreResults, showMoreResults] = useState<boolean>(false);
    const [resultType, setResultType] = useState<"ageing" | "gasComposition" | "compositionDetails">("ageing");

    const initRow: IResult = props.calculation.result[0];
    const endRow: IResult = props.calculation.result[props.calculation.result.length - 1];

    //unit headers and definitions
    const unitHeaders = [{
        title: "TIME",
        internalName: "time",
        fixed: 1
    },
    {
        title: "WI",
        internalName: "wi",
        fixed: 2
    },
    {
        title: "GCV",
        internalName: "gcv",
        fixed: 2
    },
    {
        title: "GCV",
        internalName: "gcvMass",
        fixed: 3
    },
    {
        title: "DENSITY",
        internalName: "density",
        fixed: 3
    },
    {
        title: "TEMP",
        internalName: "temp",
        fixed: 2
    },
    {
        title: "VOLUME",
        internalName: "volume",
        fixed: 2
    },
    {
        title: "ENERGY",
        internalName: "energy",
        fixed: 2
    }];;

    //table more results
    let tableRows: IStandardTableRow[];
    let headers: {
        title: string,
        internalName: string
    }[];
    if (resultType === "compositionDetails") {
        tableRows = [];
        headers = [];
    }
    else if (resultType === "gasComposition") {
        tableRows = [];
        headers = [];
    }
    else {
        tableRows = props.calculation.result.map((result: IResult) => {
            return {
                value: result.id,
                display: [
                    result.time.value.toFixed(unitHeaders[0].fixed),
                    result.wi.value.toFixed(unitHeaders[1].fixed),
                    result.gcv.value.toFixed(unitHeaders[2].fixed),
                    result.gcvMass.value.toFixed(unitHeaders[3].fixed),
                    result.density.value.toFixed(unitHeaders[4].fixed),
                    result.temp.value.toFixed(unitHeaders[5].fixed),
                    result.volume.value.toFixed(unitHeaders[6].fixed),
                    result.energy.value.toFixed(unitHeaders[7].fixed)
                ]
            }
        })
        headers = unitHeaders;
    }

    //card result
    const cardResults: ICardResult[] = unitHeaders.map((header) => {
        const title = header.title as never;
        const internalName = header.internalName as never;
        return {
            title: title,
            unit: initRow[internalName]["unit"],
            initValue: initRow[internalName]["value"],
            endValue: endRow[internalName]["value"],
            fixed: header.fixed
        }
    })

    return (
        <StCalculationContainer style={props.style}>
            <H2 style={{ width: "100%" }}>
                Results
                <span style={{
                    fontSize: "15px",
                    color: EColor.GRAY,
                    margin: "-1px 0 0 10px"
                }}>{moment(props.calculation.createdDate).fromNow()}</span>
            </H2>
            <div style={{ display: "flex" }}>
                {cardResults.map((result: ICardResult, index) => {
                    return (
                        <StCalculation key={index}>
                            <span style={{ fontSize: "18px", margin: "20px 0 10px 0" }}>{result.title.toUpperCase()}</span>
                            <span style={{ fontSize: "10px" }}>{result.unit}</span>
                            <span style={{ color: "#73B1B5", fontSize: "14px", margin: "21px 0px 13px 0" }}>{result.initValue.toFixed(result.fixed)}</span>
                            <span style={{ color: EColor.GREEN, fontSize: "14px", fontWeight: 500 }}>{result.endValue.toFixed(result.fixed)}</span>
                        </StCalculation>
                    )
                })}
            </div>
            <StLinks>
                <span onClick={() => {
                    showMoreResults(!moreResults);
                }}>
                    {!moreResults &&
                        <>Show more results</>
                    }
                    {moreResults &&
                        <>Hide more results</>
                    }
                </span>
            </StLinks>
            {
                moreResults &&
                <>
                    <StMoreResults>
                        <div style={{
                            float: "left",
                            width: "100%"
                        }}>
                            <span
                                className={resultType === "ageing" ? "active" : ""}
                                onClick={() => {
                                    setResultType("ageing")
                                }}
                            >Ageing</span>
                            <span
                                className={resultType === "gasComposition" ? "active" : ""}
                                onClick={() => {
                                    setResultType("gasComposition")
                                }}
                            >Gas composition</span>
                            <span
                                className={resultType === "compositionDetails" ? "active" : ""}
                                onClick={() => {
                                    setResultType("compositionDetails")
                                }}
                            >Liquid composition</span>
                        </div>
                        {resultType === "ageing" &&
                            <p>Lorem</p>
                        }
                        {resultType === "gasComposition" &&
                            <p>Lipsum</p>
                        }
                        {resultType === "compositionDetails" &&
                            <p>Dolor</p>
                        }
                    </StMoreResults>
                    <StStandardTable>
                        <StandardTable
                            header={headers.map((header) => {
                                return header.title;
                            })}
                            headerSecondary={headers.map((header=>{
                                return initRow[header.internalName as never]["unit"];
                            }))}
                            rows={tableRows}
                            exportToExcel={"ShipAgeing-"+props.calculation.ship.name}
                        ></StandardTable>
                    </StStandardTable>
                </>
            }
        </StCalculationContainer >
    )
}

const StCalculationContainer = styled.div`
    width: 100%;
`;

const StCalculation = styled.div`
    min-width: 100px;
    padding: 0 10px;
    box-sizing: border-box;
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
        background-color: ${EColor.LIGHT_GRAY};
        padding: 10px 15px;
        cursor: pointer;
        text-decoration: underline;
        :hover {
            text-decoration: none;
        }
    }
`;

const StMoreResults = styled.div`
    width: 100%;
    float: left;
    span {
        font-size: 16px;
        font-weight: 500;
        color: ${EColor.GRAY};
        border-bottom: 2px solid ${EColor.LIGHT_GRAY};
        padding: 10px 15px;
        float: left;
        cursor: pointer;
        &.active {
            border-bottom: 2px solid ${EColor.GREEN};
            color: ${EColor.BLACK}
        }
        &:hover {
            background-color: ${EColor.LIGHT_GRAY};
        }
    }
    > p {
        font-size: 14px;
        line-height: 24px;
        color: ${EColor.BLACK};
        float: left;
        margin: 10px 0;
    }
`;

const StStandardTable = styled.div`
    margin: 0 0 30px 0;
    tbody tr:last-child {
        font-weight: bold;
    }
`;

export interface ICardResult {
    title: string;
    unit: any;
    initValue: any;
    endValue: any;
    fixed: number;
}