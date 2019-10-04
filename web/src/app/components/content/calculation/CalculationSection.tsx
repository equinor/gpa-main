import React from "react";
import { StCircleIcon } from '../../ui/FormSection';
import { SimpleTable, IStandardTableRow } from '../../elements/Tables';
import { EColor } from '../../../common/Color';
import styled from "styled-components";

interface ICalculationSection {
    style?: Object;
    number: number;
    title: string;
    rows: IStandardTableRow[];
}

export const CalculationSection = (props: ICalculationSection) => {
    return (
        <div style={props.style}>
            <div style={{ display: "flex", alignItems: "center" }}>
                <StGreyCircleIcon>
                    <span>{props.number}</span>
                </StGreyCircleIcon>
                <StTitle>{props.title}</StTitle>
            </div>
            {}
            <StSimpleTable>
                <SimpleTable
                    rows={props.rows}
                    disableHover={true}
                ></SimpleTable>
            </StSimpleTable>
        </div>
    )
}

const StGreyCircleIcon = styled(StCircleIcon)`
  color: ${EColor.BLACK};
  background-color: ${EColor.LIGHT_GRAY};
`;

const StTitle = styled.span`
    font-size: 24px;
    font-family: Equinor,serif;
`;

const StSimpleTable = styled.div`
    margin: 15px 0 0 0;
    td:nth-child(even) {
        font-weight: bold;
    }
`;