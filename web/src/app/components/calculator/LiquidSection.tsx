import styled from 'styled-components/macro';
import React from 'react';
import { FormSection } from '../ui/FormSection';
import { Label, NumberInput } from '../ui/Inputs';


export interface Liquid {
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

interface LiquidSectionProps {
  liquid: Liquid,

  setLiquid(liquid: Liquid): void,
}

const LiquidInputs = styled.span`
  display: flex;
  flex-direction: row;
`;

const LiquidInput = styled.p`
  margin-right: 25px;
`;

interface LiquidComponentInputProps {
  componentName: string,
  componentValue: number,

  onChange(value: number): void,
}

const LiquidComponentInput: React.FC<LiquidComponentInputProps> = ({ onChange, componentName, componentValue }) => {
  return (
    <LiquidInput>
      <Label htmlFor={`liquid-${componentName}`}>
        {componentName}
      </Label>
      <NumberInput
        id={`liquid-${componentName}`}
        value={componentValue.toFixed(2)}
        onChange={e => onChange(parseFloat(e.target.value))}
        step='0.01'
      />
    </LiquidInput>
  );
};

export const LiquidSection: React.FC<LiquidSectionProps> = ({ liquid, setLiquid }) => (
  <FormSection legendText='Liquid' index={2}>
    <LiquidInputs>
      <div>
        <h3>Standard gases</h3>
        <LiquidComponentInput
          componentName='nitrogen'
          componentValue={liquid.nitrogen}
          onChange={value => setLiquid({ ...liquid, nitrogen: value })}
        />
      </div>
      <div style={{ flexGrow: 1, height: '180px' }}>
        <h3>Light hydrocarbons</h3>
        <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, flexWrap: 'wrap', height: '100%', justifyContent: 'flex-start', alignContent: 'flex-start' }}>
          {
            (Object.keys(liquid) as Array<keyof typeof liquid>).map((componentName, index) => componentName !== 'nitrogen' && (
              <LiquidComponentInput
                key={index}
                componentName={componentName}
                componentValue={liquid[componentName]}
                onChange={value => setLiquid({ ...liquid, [componentName]: value })}
              />
            ))
          }
        </div>
      </div>
    </LiquidInputs>
  </FormSection>
);