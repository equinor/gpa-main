import styled from 'styled-components/macro';
import { EColor } from '../../common/Color';
import React, { useState } from 'react';
import { EquinorIcon, EIcon } from '../../assets/svg/EquinorIcon';

//standard TextInput
export interface IStandardInputProps {
  id: string;
  label: string;
  labelRight?: string;
  placeholder: string;
  value: string | number | undefined;
  onChange: Function;
  onBlur?: Function;
  onKeyUp?: Function;
  type: "text" | "number";
  required?: boolean;
  step?: string; //step for number input
}
export const StandardInput = (props: IStandardInputProps) => {
  const [invalid, setInvalid] = useState<boolean>(false);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
      {/* Labels */}
      <StLabel htmlFor={props.id}>
        <span>{props.label}</span>
        {props.required &&
          <span>&nbsp;*</span>
        }
      </StLabel>
      {props.labelRight &&
        <StLabelRight htmlFor={props.id}>
          <span>{props.labelRight}</span>
        </StLabelRight>
      }
      {/* Text */}
      {props.type === "text" &&
        <StTextInput
          id={props.id}
          placeholder={props.placeholder}
          value={props.value}
          onChange={e => props.onChange(e)}
          onBlur={(e) => {
            //required
            if (props.required && e.target.value === "") {
              setInvalid(true);
            }
            else if (props.required && e.target.value !== "") {
              setInvalid(false);
            }
            //action
            if (props.onBlur) props.onBlur(e);
          }}
          onKeyUp={(e) => {
            if (props.onKeyUp) props.onKeyUp(e);
          }}
          invalid={invalid}
        />
      }
      {/* Number */}
      {props.type === "number" &&
        <StNumberInput
          id={props.id}
          placeholder={props.placeholder}
          value={props.value !== null ? props.value : ""}
          onChange={e => props.onChange(e)}
          onBlur={(e) => {
            //required
            if (props.required && e.target.value === "") {
              setInvalid(true);
            }
            else if (props.required && e.target.value !== "") {
              setInvalid(false);
            }
            //action
            if (props.onBlur) props.onBlur(e);
          }}
          onKeyUp={(e) => {
            if (props.onKeyUp) props.onKeyUp(e);
          }}
          step={props.step ? props.step : "1"}
          required={props.required}
          invalid={invalid}
        />
      }
    </div>
  )
}

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
    <StStandardBoolean onClick={(e) => {
      props.onChange(!props.value);
    }}>
      {!props.value &&
        <EquinorIcon icon={EIcon.CHECKBOX_OFF} size={19}></EquinorIcon>
      }
      {props.value &&
        <EquinorIcon icon={EIcon.CHECKBOX_ON} size={19}></EquinorIcon>
      }
      <span>{props.text}</span>
      {props.required &&
          <span>&nbsp;*</span>
        }
    </StStandardBoolean>
  )
}

export const StLabel = styled.label`
  display: flex;
  flex-direction: column;
  color: ${EColor.GRAY};
  font-size: 12px;
  font-family: Equinor,serif;
  padding: 5px 10px 6px 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  height: 23px;
  > span:nth-child(2) {
    font-weight: bold;
    color: ${EColor.DANGER_RED}
  }
`;

interface IStInput {
  invalid?: boolean;
}

const StInput = styled.input`
  padding: 7px 10px 6px 10px;
  background-color: ${EColor.LIGHT_GRAY};
  border: none;
  border-bottom: 1px solid;
  border-color: ${(props: IStInput) => props.invalid ? EColor.DANGER_RED : EColor.GRAY};
  font-size: 16px;
  font-family: Equinor,serif;
  line-height: 24px;
  width: 100%;
  box-sizing: border-box;
  color: ${EColor.BLACK};
`;

export const StLabelRight = styled(StLabel)`
  text-align: right;
  > span {
    width: 100%;
  }
`;

const StTextInput = styled(StInput).attrs({
  type: 'text',
})`
    max-width: 300px;
`;

const StNumberInput = styled(StInput).attrs({
  type: 'number',
})`
  max-width: 300px;
`;
