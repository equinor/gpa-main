import React from "react";
import styled from "styled-components/macro";
import { H2, H3 } from "../../elements/Texts";
import { EColor } from "../../../common/Color";
import { StandardTable } from "../../elements/Tables";

export const ResultContainer = (props: any) => {
    return (
        <StResultContainer style={props.style}>
            <H2 style={{ width: "100%" }}>Results</H2>
            <div style={{ display: "flex" }}>
                {sampleData.map((result: IResult, index) => {
                    return (
                        <StResult key={index}>
                            <span style={{ fontSize: "18px", margin: "20px 0 10px 0" }}>{result.title.toUpperCase()}</span>
                            <span style={{ fontSize: "10px" }}>{result.unit}</span>
                            <span style={{ color: "#73B1B5", fontSize: "14px", margin: "21px 0px 13px 0" }}>{result.initValue}</span>
                            <span style={{ color: EColor.GREEN, fontSize: "14px", fontWeight: 500 }}>{result.endValue}</span>
                        </StResult>
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
                header={sampleResult.header}
                headerSecondary={sampleResult.headerSecondary}
                rows={sampleResult.rows}
            ></StandardTable>
        </StResultContainer>
    )
}

const StResultContainer = styled.div`
    width: 100%;
`;

const StResult = styled.div`
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

interface IResult {
    title: string,
    unit: string,
    initValue: number,
    endValue: number
}

const sampleData: IResult[] = [
    {
        title: "Time",
        unit: "hrs",
        initValue: 0,
        endValue: 0
    },
    {
        title: "WI",
        unit: "MJ/m^3",
        initValue: 14.435,
        endValue: 54.803
    },
    {
        title: "GCV",
        unit: "MJ/m^3",
        initValue: 32.234,
        endValue: 42.578
    },
    {
        title: "GCV",
        unit: "MJ/kg",
        initValue: 123.456,
        endValue: 54.557
    },
    {
        title: "DENSITY",
        unit: "kg/m^3",
        initValue: 12.532,
        endValue: 449.644
    },
    {
        title: "TEMP.",
        unit: "C",
        initValue: 15.345,
        endValue: -161.120
    },
    {
        title: "VOLUME",
        unit: "m^3",
        initValue: 150135,
        endValue: 140000
    },
    {
        title: "ENERGY",
        unit: "MJ",
        initValue: 3435945245,
        endValue: 3435949230
    },
]

const sampleResult = {
    header: ["TIME", "WI", "GCV", "GCV", "DENSITY", "TEMP.", "VOLUME", "ENERGY"],
    headerSecondary: ["hrs", "MJ/m^3", "MJ/m^3", "MJ/kg", "kg/m^3", "C", "m^3", "MJ"],
    rows: [
        [1234, 1234, "1234", 1234, 1234, 1234, "1234", 1234],
        [1234, 1234, "1234", 1234, 1234, 1234, "1234", 1234],
        [1234, 1234, "1234", 1234, 1234, 1234, "1234", 1234],
        [1234, 1234, "1234", 1234, 1234, 1234, "1234", 1234],
        [1234, 1234, "1234", 1234, 1234, 1234, "1234", 1234],
        [1234, 1234, "1234", 1234, 1234, 1234, "1234", 1234],
        [1234, 1234, "1234", 1234, 1234, 1234, "1234", 1234],
        [1234, 1234, "1234", 1234, 1234, 1234, "1234", 1234],
        [1234, 1234, "1234", 1234, 1234, 1234, "1234", 1234]
    ]
}