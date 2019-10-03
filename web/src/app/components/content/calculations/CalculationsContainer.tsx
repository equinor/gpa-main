import React from "react";
import { StandardTable, IStandardTableRow } from "../../elements/Tables";

export interface ICalculationsContainer {
    rows: IStandardTableRow[];
    selectRow?: Function;
}

export const CalculationsContainer = (props: ICalculationsContainer) => {
    return (
        <div>
            <StandardTable
                header={[
                    "NAME", "COUNTRY", "CREATED"
                ]}
                rows={props.rows}
                selectRow={(row: any) => {
                    if (props.selectRow) {
                        props.selectRow(row);
                    }
                }}
            ></StandardTable>
        </div>
    )
}