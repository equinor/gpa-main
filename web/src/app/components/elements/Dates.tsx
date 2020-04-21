import './Dates.css';

import Flatpickr from 'react-flatpickr';
import React, { useState } from 'react';
import styled from 'styled-components';
import { EColor } from '../../common/Color';
import { StLabel, StLabelRight } from './Inputs';
import { EquinorIcon, EIcon } from '../../assets/svg/EquinorIcon';

interface IStandardDatePickerProps {
  id: string;
  onChange: Function;
  value?: Date | undefined;
  disabled?: boolean;
  minDate?: Date;
  required?: boolean;
  label: string;
}

export const StandardDatePicker = (props: IStandardDatePickerProps) => {
  const [invalid, setInvalid] = useState<boolean>(false);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {/* Labels */}
      <StLabel htmlFor={props.id} style={{ width: '50%' }}>
        <span>{props.label}</span>
        {props.required && <span>&nbsp;*</span>}
      </StLabel>
      {props.value && (
        <StClear
          htmlFor={props.id}
          style={{ width: '50%' }}
          onClick={() => {
            props.onChange(undefined);
            if (props.required) {
              setInvalid(true);
            }
          }}
        >
          <span>
            <EquinorIcon icon={EIcon.ERROR} size={9}></EquinorIcon>
          </span>
        </StClear>
      )}

      {/* Picker */}
      <StFlatPicker invalid={invalid}>
        <Flatpickr
          placeholder={'Date'}
          value={props.value}
          onChange={(e: any) => {
            props.onChange(new Date(e).toISOString());
            if (props.required) {
              setInvalid(false);
            }
          }}
          options={{
            dateFormat: 'd.m. H:i',
            enableTime: true,
            time_24hr: true,
            minDate: props.minDate,
          }}
          className="flatPickerTheme"
          disabled={props.disabled}
          required={props.required}
        />
      </StFlatPicker>
    </div>
  );
};

interface IStFlatPicker {
  invalid?: boolean;
}

const StFlatPicker = styled.div`
  display: flex;
  flex-wrap: wrap;

  > input {
    width: 100%;
    height: 38px;
    border: 0;
    background-color: ${EColor.LIGHT_GRAY};
    color: ${EColor.BLACK};
    border-bottom: 1px solid;
    border-color: ${(props: IStFlatPicker) =>
      props.invalid ? EColor.DANGER_RED : EColor.GRAY};
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

const StClear = styled(StLabelRight)`
  cursor: pointer;
  > span path {
    fill: ${EColor.GRAY};
  }
  &:hover {
    > span path {
      fill: ${EColor.BLACK};
    }
  }
`;
