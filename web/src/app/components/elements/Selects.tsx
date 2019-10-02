import React from "react";
import Select from 'react-select'
import { EColor } from "../../common/Color";

export interface IOption {
  value: string | number;
  label: string;
}

interface IStandardSelectProps {
  options: IOption[];
  onChange: Function;
  value?: IOption | null;
}

export const StandardSelect = (props: IStandardSelectProps) => (
  <Select
    options={props.options}
    onChange={(e: any) => { props.onChange(e) }}
    styles={customStyles}
    value={props.value}
  />
)

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