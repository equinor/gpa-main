import './Dates.css';

import Flatpickr from 'react-flatpickr';
import React from "react";
import styled from 'styled-components';
import { EColor } from '../../common/Color';

interface IStandardDatePickerProps {
    onChange: Function;
    value?: Date;
    disabled?: boolean;
    minDate?: Date;
}

export const StandardDatePicker = (props: IStandardDatePickerProps) => {
    return (
        <StFlatPicker>
            <Flatpickr
                placeholder={"Date"}
                value={props.value}
                onChange={(e: any) => {
                    if (e.length !== 0) {
                        props.onChange(new Date(e).toISOString())
                    }
                    else {
                        props.onChange("")
                    }
                }
                }
                options={{
                    dateFormat: "d.m. H:i",
                    enableTime: true,
                    time_24hr: true,
                    minDate: props.minDate
                }}
                className="flatPickerTheme"
                disabled={props.disabled}
            />
        </StFlatPicker>
    )
}

const StFlatPicker = styled.div`
    > input {
        width: 100%;
        height: 38px;
        border: 0;
        background-color: ${EColor.LIGHT_GRAY};
        color: ${EColor.BLACK};
        border-bottom: 1px solid ${EColor.GRAY};
        padding: 2px 10px 0 10px;
        font-family: Equinor, 'serif';
        box-sizing: border-box; 
    }
    .selected {
        background: ${EColor.GREEN} !important;
        border-color: ${EColor.GREEN} !important;
    }
    .today {
        border-bottom-color: white !important;
    }
`;