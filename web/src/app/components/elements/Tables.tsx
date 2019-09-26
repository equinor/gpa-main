import React from "react";
import styled from "styled-components/macro";
import { EColor } from "../../common/Color";

interface IStandardTable {
    header: string[];
    headerSecondary: string[];
    rows: any[][];
}

export const StandardTable = (props: IStandardTable) => {
    return (
        <StStandardTable>
            <thead>
                <tr>
                    {props.header.map((value, index) => {
                        return (
                            <td key={index}>{value}</td>
                        )
                    })}
                </tr>
                {props.headerSecondary &&
                    <tr>
                        {props.headerSecondary.map((value, index) => {
                            return (
                                <td key={index}>{value}</td>
                            )
                        })}
                    </tr>
                }
            </thead>
            <tbody>
                {props.rows.map((row, index) => {
                    return (
                        <tr key={index}>
                            {row.map((cell, index2) => {
                                return (
                                    <td key={index2}>{cell}</td>
                                )
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </StStandardTable>
    )
}

const StStandardTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    > thead {
        tr {
            background-color: ${EColor.LIGHT_GRAY};
            border-bottom: 2px solid  #DCDCDC;
        }
        tr:first-child {
            text-align: left;
            font-size: 14px;
            font-weight: bold;
        }
        tr:nth-child(2) {
            text-align: right;
            font-size: 12px;
            color: #949494;
        }
        td {
            padding: 14px 10px 12px 10px;
        }
    }
    > tbody {
        tr {
            border-bottom: 1px solid  #DCDCDC;
            :hover {
                background-color: #fdfdfd;
            }
        }
        td {
            padding: 12px 10px;
            font-size: 14px;
        }
    }
`;