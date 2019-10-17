import styled from 'styled-components/macro';
import { EColor } from '../../common/Color';
import React, { useState } from 'react';
import { EquinorIcon, EIcon } from '../../assets/svg/EquinorIcon';

//standard TextInput
export interface IStandardInputProps {
  id: string;
  label: string;
  label2?: string;
  placeholder: string;
  value: string | number | undefined;
  onChange: Function;
  onBlur?: Function;
  onKeyUp?: Function;
  type: "text" | "number";
  required?: boolean;
}
export const StandardInput = (props: IStandardInputProps) => {
  const [invalid, setInvalid] = useState<boolean>(false);

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {/* Labels */}
      <StLabelLeft htmlFor={props.id} style={props.label2 ? { width: "50%" } : { width: "100%" }}>
        <span>{props.label}</span>
        {props.required &&
          <span>&nbsp;*</span>
        }
      </StLabelLeft>
      {props.label2 &&
        <StLabelRight htmlFor={props.id} style={{ width: "50%" }}>
          <span>{props.label2}</span>
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
          step="0.01"
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
}

const StStandardBoolean = styled.div`
  display: inline-flex;
  flex-wrap: nowrap;
  cursor: pointer;
  > svg {
    
  }
  > span {
    font-size: 12px;
    padding: 4px 0 0 15px;
    box-sizing: border-box;
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
    </StStandardBoolean>
  )
}

export const StLabelLeft = styled.label`
  display: flex;
  flex-direction: column;
  color: ${EColor.GRAY};
  font-size: 12px;
  font-family: Equinor,serif;
  padding: 5px 10px 6px 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
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

const StLabelRight = styled(StLabelLeft)`
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
