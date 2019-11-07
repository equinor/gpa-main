import React from "react";
import styled from "styled-components/macro";
import { EColor } from "../../common/Color";
import { CSVLink } from "react-csv";

interface IStandardTable {
    header: string[];
    headerSecondary?: string[];
    rows: IStandardTableRow[];
    selectRow?: Function;
    disableHover?: boolean;
    exportToExcel?: string; //filename without extension
}

export interface IStandardTableRow {
    value?: any;
    display: any[];
}

export const StandardTable = (props: IStandardTable) => {
    return (
        <>
            {props.exportToExcel &&
                <StExport>
                    <CSVLink
                        data={exportData()}
                        filename={props.exportToExcel + ".csv"}
                        className="btn btn-primary"
                        target="_blank"
                    >
                        Export to Excel
                    </CSVLink>
                </StExport>
            }
            <StStandardTable disableHover={props.disableHover}>
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
                            <tr key={index}
                                onClick={typeof props.selectRow !== "undefined" ? () => {
                                    if (props.selectRow) {
                                        props.selectRow(row)
                                    }
                                } : undefined}
                            >
                                {row.display.map((cell, index2) => {
                                    return (
                                        <td key={index2}>
                                            {parseFloat(cell) === 0 ? 0 : cell}
                                        </td>
                                    )
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </StStandardTable>
        </>
    )

    function exportData() {
        const exportData: string[][] = [];
        exportData.push(props.header);
        if (props.headerSecondary) {
            exportData.push(props.headerSecondary);
        }
        props.rows.forEach((row) => {
            exportData.push(row.display);
        })
        return exportData;
    }
}

const StExport = styled.div`
    float: left;
    width: 100%;
    text-align: right;
    padding: 0 0 10px 0;
    a {
        color: ${EColor.GREEN};
        text-decoration: none;
        font-size: 13px;
    }
    a:hover {
        text-decoration: underline;
    }
`;

const StStandardTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    > thead {
        tr {
            background-color: ${EColor.LIGHT_GRAY};
            border-bottom: 1px solid  #DCDCDC;
        }
        tr:first-child {
            text-align: left;
            font-size: 14px;
            font-weight: 500;
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
                background-color: ${(props: IStTable) => props.disableHover ? EColor.LIGHT_GRAY : EColor.LIGHT_GREEN};
                cursor: ${(props: IStTable) => props.disableHover ? "" : "pointer"};
            }
        }
        td {
            padding: 12px 10px;
            font-size: 14px;
        }
    }
`;

interface ISimpleTable {
    rows: IStandardTableRow[];
    selectRow?: Function;
    disableHover?: boolean;
}

export const SimpleTable = (props: ISimpleTable) => {
    return (
        <StSimpleTable disableHover={props.disableHover}>
            <tbody>
                {props.rows.map((row, index) => {
                    return (
                        <tr key={index}
                            onClick={typeof props.selectRow !== "undefined" ? () => {
                                if (props.selectRow) {
                                    props.selectRow(row)
                                }
                            } : undefined}
                        >
                            {row.display.map((cell, index2) => {
                                return (
                                    <td key={index2}>{cell}</td>
                                )
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </StSimpleTable>
    )
}

interface IStTable {
    disableHover?: boolean;
}

const StSimpleTable = styled.table`
    border-collapse: collapse;
    > tbody {
        tr {
            border-bottom: 1px solid  #DCDCDC;
            :hover {
                background-color: ${(props: IStTable) => props.disableHover ? "" : EColor.LIGHT_GREEN};
                cursor: ${(props: IStTable) => props.disableHover ? "" : "pointer"};
            }
        }
        td {
            padding: 12px 10px;
            font-size: 14px;
        }
    }
`;