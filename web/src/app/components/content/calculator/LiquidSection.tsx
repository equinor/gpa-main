import styled from 'styled-components/macro';
import React from 'react';
import { FormSection } from '../../ui/FormSection';
import { S_Label, NumberInput } from '../../elements/Inputs';
import { H3 } from '../../elements/Texts';


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

export const LiquidSection: React.FC<ILiquidSectionProps> = (props) => (
  <FormSection legendText='Liquid' index={2}>
    <S_LiquidInputs>
      <div>
        <H3>Standard gases</H3>
        <LiquidComponentInput
          componentName='nitrogen'
          componentValue={props.liquid.nitrogen}
          onChange={value => props.setLiquid({ ...props.liquid, nitrogen: value })}
        />
      </div>
      <div style={{ flexGrow: 1, height: "100%" }}>
        <H3>Light hydrocarbons</H3>
        <div style={{ marginBottom: "-20px", display: 'flex', flexGrow: 1, flexWrap: 'wrap', height: '235px', width: "470px", justifyContent: 'flex-start', flexDirection: "column" }}>
          {
            (Object.keys(props.liquid) as Array<keyof typeof props.liquid>).map((componentName, index) => componentName !== 'nitrogen' && (
              <LiquidComponentInput
                key={index}
                componentName={componentName}
                componentValue={props.liquid[componentName]}
                onChange={value => props.setLiquid({ ...props.liquid, [componentName]: value })}
              />
            ))
          }
        </div>
      </div>
    </S_LiquidInputs>
  </FormSection>
);

interface LiquidComponentInputProps {
  componentName: string,
  componentValue: number,

  onChange(value: number): void,
}

const LiquidComponentInput: React.FC<LiquidComponentInputProps> = (props) => {
  return (
    <S_LiquidInput>
      <S_Label htmlFor={`liquid-${props.componentName}`}>
        {props.componentName}
      </S_Label>
      <NumberInput
        id={`liquid-${props.componentName}`}
        value={props.componentValue.toFixed(2)}
        onChange={e => props.onChange(parseFloat(e.target.value))}
        step='0.01'
      />
    </S_LiquidInput>
  );
};

const S_LiquidInputs = styled.span`
  display: flex;
  flex-direction: row;
  h3 {
    margin: 10px 0 15px 0;
  }
`;

const S_LiquidInput = styled.div`
      margin: 0 30px 20px 0;
`;