import React, { useState } from "react";
import Select from 'react-select'
import { EColor } from "../../common/Color";
import { StLabel, StLabelRight } from "./Inputs";

export interface IOption {
  value: string | number | null;
  label: string;
}

interface IStandardSelectProps {
  id: string;
  options: IOption[];
  onChange: Function;
  value?: IOption | null;
  required?: boolean;
  label: string;
  labelRight?: string;
}

export const StandardSelect = (props: IStandardSelectProps) => {
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
      {/* Input */}
      <div style={{ width: "100%" }}>
        <Select
          options={props.options}
          onChange={(e: any) => {
            props.onChange(e);
            if (props.required) {
              if (e.value) {
                setInvalid(false);
              }
              else {
                setInvalid(true);
              }
            }
          }}
          styles={invalid ? invalidStyles : customStyles}
          value={props.value}
        />
      </div>
    </div>
  )
}



const customStyles = {
  control: (styles: any, state: any) => (
    {
      ...styles,
      backgroundColor: EColor.LIGHT_GRAY,
      border: 0,
      borderBottom: "1px solid " + EColor.GRAY,
      borderRadius: 0,
      boxShadow: state.isFocused ? 0 : 0,
      cursor: "pointer",
      '&:hover': {
        border: state.isFocused ? 0 : 0,
        borderBottom: "1px solid " + EColor.GRAY
      }
    }
  ),
  option: (styles: any, state: any) => (
    {
      ...styles,
      backgroundColor: (state.isSelected) ? EColor.GREEN : "white",
      cursor: "pointer",
      '&:hover': {
        backgroundColor: (state.isFocused) ? EColor.LIGHT_GREEN : "white",
        color: "black"
      }
    }
  ),
  menu: (styles: any, state: any) => (
    {
      ...styles,
      margin: "0px 0 0 0",
      borderRadius: 0
    }
  ),

}

const invalidStyles = {
  control: (styles: any, state: any) => (
    {
      ...styles,
      backgroundColor: EColor.LIGHT_GRAY,
      border: 0,
      borderBottom: "1px solid " + EColor.DANGER_RED,
      borderRadius: 0,
      boxShadow: state.isFocused ? 0 : 0,
      cursor: "pointer",
      '&:hover': {
        border: state.isFocused ? 0 : 0,
        borderBottom: "1px solid " + EColor.DANGER_RED,
      }
    }
  ),
  option: (styles: any, state: any) => (
    {
      ...styles,
      backgroundColor: (state.isSelected) ? EColor.GREEN : "white",
      cursor: "pointer",
      '&:hover': {
        backgroundColor: (state.isFocused) ? EColor.LIGHT_GREEN : "white",
        color: "black"
      }
    }
  ),
  menu: (styles: any, state: any) => (
    {
      ...styles,
      margin: "0px 0 0 0",
      borderRadius: 0
    }
  ),

}