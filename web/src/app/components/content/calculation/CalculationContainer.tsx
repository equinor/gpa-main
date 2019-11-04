import moment from 'moment';
import React, { useState } from 'react';
import styled from 'styled-components/macro';

import { EColor } from '../../../common/Color';
import { ICalculation, IResult } from '../../../common/Interfaces';
import { IStandardTableRow, StandardTable } from '../../elements/Tables';
import { H2 } from '../../elements/Texts';
import { agingHeaders, liquidHeaders, gasHeaders } from '../../../common/tableHeaders/CalculationHeaders';

export interface ICalculationContainer {
    calculation: ICalculation;
    style?: Object;
}

export const CalculationContainer: React.FunctionComponent<ICalculationContainer> = (props) => {

    const [moreResults, showMoreResults] = useState<boolean>(false);
    const [resultType, setResultType] = useState<"ageing" | "gasComposition" | "liquidComposition">("ageing");

    const initRow: IResult = props.calculation.result[0];
    const endRow: IResult = props.calculation.result[props.calculation.result.length - 1];

    //table more results
    let tableRows: IStandardTableRow[];
    let headers: {
        title: string,
        internalName: string
    }[];
    if (resultType === "liquidComposition") {
        tableRows = props.calculation.result.map((result: IResult) => {
            return {
                value: result.id,
                display: [
                    result.time.value.toFixed(liquidHeaders[0].fixed),
                    result.xnitrogen.value.toFixed(liquidHeaders[1].fixed),
                    result.xmethane.value.toFixed(liquidHeaders[2].fixed),
                    result.xethane.value.toFixed(liquidHeaders[3].fixed),
                    result.xpropane.value.toFixed(liquidHeaders[4].fixed),
                    result.xic4.value.toFixed(liquidHeaders[5].fixed),
                    result.xnc4.value.toFixed(liquidHeaders[6].fixed),
                    result.xic5.value.toFixed(liquidHeaders[7].fixed),
                    result.xnc5.value.toFixed(liquidHeaders[8].fixed),
                    result.xnc6.value.toFixed(liquidHeaders[9].fixed)
                ]
            }
        })
        headers = liquidHeaders;
    }
    else if (resultType === "gasComposition") {
        tableRows = props.calculation.result.map((result: IResult) => {
            return {
                value: result.id,
                display: [
                    result.time.value.toFixed(gasHeaders[0].fixed),
                    result.ynitrogen.value.toFixed(gasHeaders[1].fixed),
                    result.ymethane.value.toFixed(gasHeaders[2].fixed),
                    result.yethane.value.toFixed(gasHeaders[3].fixed),
                    result.ypropane.value.toFixed(gasHeaders[4].fixed),
                    result.yic4.value.toFixed(gasHeaders[5].fixed),
                    result.ync4.value.toFixed(gasHeaders[6].fixed),
                    result.yic5.value.toFixed(gasHeaders[7].fixed),
                    result.ync5.value.toFixed(gasHeaders[8].fixed),
                    result.ync6.value.toFixed(gasHeaders[9].fixed)
                ]
            }
        })
        headers = gasHeaders;
    }
    else {
        tableRows = props.calculation.result.map((result: IResult) => {
            return {
                value: result.id,
                display: [
                    result.time.value.toFixed(agingHeaders[0].fixed),
                    result.wi.value.toFixed(agingHeaders[1].fixed),
                    result.gcv.value.toFixed(agingHeaders[2].fixed),
                    result.gcvmass.value.toFixed(agingHeaders[3].fixed),
                    result.density.value.toFixed(agingHeaders[4].fixed),
                    result.temp.value.toFixed(agingHeaders[5].fixed),
                    result.volume.value.toFixed(agingHeaders[6].fixed),
                    result.energy.value.toFixed(agingHeaders[7].fixed)
                ]
            }
        })
        headers = agingHeaders;
    }

    //card result
    const cardResults: ICardResult[] = agingHeaders.map((header) => {
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
                                className={resultType === "liquidComposition" ? "active" : ""}
                                onClick={() => {
                                    setResultType("liquidComposition")
                                }}
                            >Liquid composition</span>
                        </div>
                        {resultType === "ageing" &&
                            <p>Ageing text</p>
                        }
                        {resultType === "gasComposition" &&
                            <p>Gas text</p>
                        }
                        {resultType === "liquidComposition" &&
                            <p>Liquid text</p>
                        }
                    </StMoreResults>
                    <StStandardTable>
                        <StandardTable
                            header={headers.map((header) => {
                                return header.title;
                            })}
                            headerSecondary={headers.map((header => {
                                return initRow[header.internalName as never]["unit"];
                            }))}
                            rows={tableRows}
                            exportToExcel={"ShipAgeing-" + props.calculation.ship.name}
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