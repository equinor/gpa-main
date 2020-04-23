import styled from 'styled-components/macro';
import { EColor } from '../../common/Color';
import React, { FC, useState } from 'react';
import { EquinorIcon, EIcon } from '../../assets/svg/EquinorIcon';
// @ts-ignore
import { TextField } from '@equinor/eds-core-react';

//standard TextInput
export interface IStandardInputProps {
  id: string;
  label: string;
  labelRight?: string;
  placeholder: string;
  value: string | number | undefined;
  onChange: (e: React.FormEvent<HTMLInputElement>) => any;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => any;
  onKeyUp?: (e: React.KeyboardEvent<HTMLInputElement>) => any;
  type: 'text' | 'number';
  required?: boolean;
  step?: string; //step for number input
}

export const StandardInput = (props: IStandardInputProps) => {
  const [invalid, setInvalid] = useState<boolean>(false);

  const { labelRight, label, onBlur, value, step = '1', ...restProps } = props;

  return (
    <StInput
      {...restProps}
      label={`${label}${props.required ? '*' : ''}`}
      meta={labelRight}
      value={value !== null ? value : ''}
      onBlur={e => {
        //required
        if (props.required && e.target.value === '') {
          setInvalid(true);
        } else if (props.required && e.target.value !== '') {
          setInvalid(false);
        }
        //action
        if (props.onBlur) props.onBlur(e);
      }}
      step={props.type === 'number' ? step : undefined}
      invalid={invalid}
    />
  );
};

//standard Boolean
export interface IStandardBooleanProps {
  text: string;
  value: boolean;
  onChange: Function;
  required?: boolean;
}

const StStandardBoolean = styled.div`
  display: inline-flex;
  flex-wrap: nowrap;
  cursor: pointer;
  > svg {
  }
  > span:nth-of-type(1) {
    font-size: 12px;
    padding: 4px 0 0 15px;
    box-sizing: border-box;
  }
  > span:nth-of-type(2) {
    font-size: 12px;
    padding: 4px 0 0 3px;
    box-sizing: border-box;
    color: red;
    font-weight: bold;
  }
`;

export const StandardBoolean = (props: IStandardBooleanProps) => {
  return (
    <StStandardBoolean
      onClick={e => {
        props.onChange(!props.value);
      }}
    >
      {!props.value && <EquinorIcon icon={EIcon.CHECKBOX_OFF} size={19} />}
      {props.value && <EquinorIcon icon={EIcon.CHECKBOX_ON} size={19} />}
      <span>{props.text}</span>
      {props.required && <span>&nbsp;*</span>}
    </StStandardBoolean>
  );
};

export const StLabel = styled.label`
  display: flex;
  color: ${EColor.GRAY};
  font-size: 12px;
  font-family: Equinor, serif;
  padding: 5px 10px 6px 10px;
  box-sizing: border-box;
  flex-direction: row;
  height: 23px;
  > span:nth-child(2) {
    font-weight: bold;
    color: ${EColor.DANGER_RED};
  }
`;

interface IStInput {
  invalid?: boolean;
  type: string;
  id: any;
  placeholder: string;
  value: any;
  label: string;
  meta?: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => any;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => any;
  onKeyUp?: (e: React.KeyboardEvent<HTMLInputElement>) => any;
  step?: string;
  required?: boolean;
}

const StInput: FC<IStInput> = props => (
  <TextField variant={props.invalid ? 'error' : undefined} {...props} />
);

export const StLabelRight = styled(StLabel)`
  text-align: right;
  > span {
    width: 100%;
  }
`;
