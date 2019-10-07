import styled from 'styled-components/macro';
import React from 'react';
import { FormSection } from '../../ui/FormSection';
import { H3 } from '../../elements/Texts';
import { StandardInput } from '../../elements/Inputs';


export interface ILiquid {
  nitrogen: number,
  methane: number,
  ethane: number,
  propane: number,
  iButane: number,
  nButane: number,
  iPentane: number,
  nPentane: number,
  nHexane: number,
}

interface ILiquidSectionProps {
  liquid: ILiquid,

  setLiquid(liquid: ILiquid): void,
}

export const LiquidSection: React.FC<ILiquidSectionProps> = (props) => {
  return (
    <FormSection legendText='Liquid' index={2}>
      <StLiquidInputs>
        <div>
          <H3>Standard gases</H3>
          <LiquidComponentInput
            componentName='nitrogen'
            componentValue={props.liquid.nitrogen}
            onChange={(value: any) => {
              setLiquid("nitrogen", value);
            }}
            onBlur={(value: any) => {
              setLiquid("nitrogen", value, true);
            }}
          />
        </div>
        <div style={{ flexGrow: 1, height: "100%" }}>
          <H3>Light hydrocarbons</H3>
          <div style={{ display: 'flex', flexGrow: 1, flexWrap: 'wrap', height: '230px', width: "470px", justifyContent: 'flex-start', flexDirection: "column" }}>
            {
              (Object.keys(props.liquid) as Array<keyof typeof props.liquid>).map((componentName, index) => componentName !== 'nitrogen' && (
                <LiquidComponentInput
                  key={index}
                  componentName={componentName}
                  componentValue={props.liquid[componentName]}
                  onChange={(value: any) => {
                    setLiquid(componentName, value);
                  }}
                  onBlur={(value: any) => {
                    setLiquid(componentName, value, true);
                  }}
                />
              ))
            }
          </div>
        </div>
      </StLiquidInputs>
    </FormSection>
  )

  function setLiquid(name: keyof ILiquid, value: any, toFixed?: boolean) {
    let liquid: ILiquid = props.liquid;
    if (value !== "") {
      const formattedValue = toFixed ? parseFloat(parseFloat(value).toFixed(2)) : parseFloat(value);
      liquid[name] = formattedValue as never;
      props.setLiquid({ ...props.liquid });
    }
    else {
      liquid[name] = null as never;
      props.setLiquid({ ...props.liquid });
    }
  }
}

interface ILiquidComponentInputProps {
  componentName: string,
  componentValue: number,

  onChange(value: number): void,
  onBlur(value: number): void,
}

const LiquidComponentInput: React.FC<ILiquidComponentInputProps> = (props) => {
  return (
    <StLiquidInput>
      <StandardInput
        id={`liquid-${props.componentName}`}
        label={props.componentName}
        placeholder={props.componentName}
        value={props.componentValue}
        type="number"
        onChange={(e: any) => {
          props.onChange(e.target.value)
        }}
        onBlur={(e: any) => {
          props.onBlur(e.target.value)
        }}
      ></StandardInput>
    </StLiquidInput>
  );
};

const StLiquidInputs = styled.span`
  display: flex;
  flex-direction: row;
  h3 {
    margin: 10px 0 15px 0;
  }
`;

const StLiquidInput = styled.div`
      margin: 0 30px 15px 0;
      width: 135px;
`;