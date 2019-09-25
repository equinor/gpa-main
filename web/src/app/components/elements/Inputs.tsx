import styled from 'styled-components/macro';
import { Color } from '../../common/Color';
import React from 'react';

const S_Input = styled.input`
  padding: 5px 10px;
  background-color: ${Color.LIGHT_GRAY};
  color: ${Color.GRAY};
  border: none;
  border-bottom: 1px solid ${Color.GRAY};
  font-size: 16px;
  font-family: Equinor,serif;
  line-height: 24px;
  width: 100%;
  box-sizing: border-box;
`;

export const S_Label = styled.label`
  display: flex;
  flex-direction: column;
  color: ${Color.GRAY};
  font-size: 12px;
  font-family: Equinor,serif;
  padding: 5px 10px 6px 10px;
  box-sizing: border-box;
  width: 50%;
`;

export const S_Label2 = styled(S_Label)`
  text-align: right;
`;

export const TextInput = styled(S_Input).attrs({
  type: 'text',
})`
    max-width: 300px;
`;

export const NumberInput = styled(S_Input).attrs({
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
    <div style={{display: "flex", flexWrap: "wrap"}}>
      <S_Label htmlFor={props.id}>
        {props.label}
      </S_Label>
      {props.label2 &&
        <S_Label2 htmlFor={props.id}>
          {props.label2}
        </S_Label2>
      }
      {props.type === "text" &&
        <TextInput
          id={props.id}
          placeholder={props.placeholder}
          value={props.value}
          onChange={e => props.onChange(e)}
        />
      }
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