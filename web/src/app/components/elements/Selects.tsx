import React from "react";
import Select from 'react-select'
import { EColor } from "../../common/Color";

interface IOption {
  value: string;
  label: string;
}

interface IStandardSelectProps {
  options: IOption[];
  onChange: Function;
}

export const StandardSelect = (props: IStandardSelectProps) => (
  <Select
    options={props.options}
    onChange={(e: any) => { props.onChange(e) }}
    styles={customStyles}
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
      '&:hover': {
        border: state.isFocused ? 0 : 0,
        borderBottom: "1px solid " + EColor.GRAY
      }
    }
  ),
  option: (styles: any, state: any) => (
    {
      ...styles,
      backgroundColor: "white",
      '&:hover': {
        backgroundColor: (state.isFocused || state.isSelected) ? EColor.LIGHT_GREEN : "white",
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