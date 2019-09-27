import styled from 'styled-components/macro';
import { EColor } from '../../common/Color';
import React from 'react';
import { EquinorIcon, EIcon } from '../../assets/svg/EquinorIcon';

export const StLabel = styled.label`
  display: flex;
  flex-direction: column;
  color: ${EColor.GRAY};
  font-size: 12px;
  font-family: Equinor,serif;
  padding: 5px 10px 6px 10px;
  box-sizing: border-box;
`;

const StInput = styled.input`
  padding: 7px 10px 6px 10px;
  background-color: ${EColor.LIGHT_GRAY};
  border: none;
  border-bottom: 1px solid ${EColor.GRAY};
  font-size: 16px;
  font-family: Equinor,serif;
  line-height: 24px;
  width: 100%;
  box-sizing: border-box;
  color: ${EColor.BLACK};
`;

const StLabel2 = styled(StLabel)`
  text-align: right;
`;

const TextInput = styled(StInput).attrs({
  type: 'text',
})`
    max-width: 300px;
`;

const NumberInput = styled(StInput).attrs({
  type: 'number',
})`
  max-width: 135px;
  min-width: 135px;
`;

//standard TextInput
export interface IStandardInputProps {
  id: string;
  label: string;
  label2?: string;
  placeholder: string;
  value: string;
  onChange: Function;
  type: "text" | "number";
}
export const StandardInput = (props: IStandardInputProps) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {/* Labels */}
      <StLabel htmlFor={props.id} style={props.label2 ? { width: "50%" } : { width: "100%" }}>
        {props.label}
      </StLabel>
      {props.label2 &&
        <StLabel2 htmlFor={props.id} style={{ width: "50%" }}>
          {props.label2}
        </StLabel2>
      }
      {/* Text */}
      {props.type === "text" &&
        <TextInput
          id={props.id}
          placeholder={props.placeholder}
          value={props.value}
          onChange={e => props.onChange(e)}
        />
      }
      {/* Number */}
      {props.type === "number" &&
        <NumberInput
          id={props.id}
          placeholder={props.placeholder}
          value={props.value}
          onChange={e => props.onChange(e)}
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