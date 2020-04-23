import styled from 'styled-components/macro';
import React from 'react';
import { FormSection } from '../../ui/FormSection';
import { H3 } from '../../elements/Texts';
import { StandardInput } from '../../elements/Inputs';
import { getPrecisionSumLiquidInput } from '../../../utils/functions';

export interface ILiquid {
  nitrogen: number;
  methane: number;
  ethane: number;
  propane: number;
  iButane: number;
  nButane: number;
  iPentane: number;
  nPentane: number;
  nHexane: number;
}

interface ILiquidSectionProps {
  liquid: ILiquid;

  setLiquid(liquid: ILiquid): void;
}

export const LiquidSection: React.FC<ILiquidSectionProps> = props => {
  return (
    <FormSection legendText="Liquid" index={2}>
      <StLiquidInputs>
        <div>
          <H3>LNG compositions</H3>
          <LiquidComponentInput
            componentName="nitrogen"
            componentValue={props.liquid.nitrogen}
            onChange={(value: any) => {
              setLiquid('nitrogen', value);
            }}
            onBlur={(value: any) => {
              setLiquid('nitrogen', value, true);
            }}
            required={true}
          />
        </div>
        <div style={{ flexGrow: 1, height: '100%' }}>
          <H3>&nbsp;</H3>
          <StMatrixContainer>
            {(Object.keys(props.liquid) as Array<
              keyof typeof props.liquid
            >).map(
              (componentName, index) =>
                componentName !== 'nitrogen' && (
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
                    required={true}
                  />
                ),
            )}
          </StMatrixContainer>
        </div>
      </StLiquidInputs>
      <StSum>
        <span
          style={
            getPrecisionSumLiquidInput(props.liquid) === 100
              ? {}
              : { color: 'red' }
          }
        >
          {' '}
          Sum: <b>{getPrecisionSumLiquidInput(props.liquid)}</b>
        </span>
      </StSum>
    </FormSection>
  );

  function setLiquid(name: keyof ILiquid, value: any, toFixed?: boolean) {
    let liquid: ILiquid = props.liquid;
    if (value !== '') {
      const formattedValue = toFixed
        ? parseFloat(parseFloat(value).toFixed(3))
        : parseFloat(value);
      liquid[name] = formattedValue as never;
      props.setLiquid({ ...props.liquid });
    } else {
      liquid[name] = null as never;
      props.setLiquid({ ...props.liquid });
    }
  }
};

interface ILiquidComponentInputProps {
  componentName: string;
  componentValue: number;

  onChange(value: number): void;
  onBlur(value: number): void;
  required: boolean;
}

const LiquidComponentInput: React.FC<ILiquidComponentInputProps> = props => {
  return (
    <StLiquidInput
      style={
        props.componentName === 'propane' || props.componentName === 'iPentane'
          ? { marginBottom: '0px' }
          : {}
      }
    >
      <StandardInput
        id={`liquid-${props.componentName}`}
        label={props.componentName}
        placeholder={props.componentName}
        value={props.componentValue}
        type="number"
        onChange={(e: any) => {
          props.onChange(e.target.value);
        }}
        onBlur={(e: any) => {
          props.onBlur(e.target.value);
        }}
        required={props.required}
        step={'0.001'}
      />
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

const StMatrixContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-wrap: wrap;
  height: 220px;
  width: 470px;
  justify-content: flex-start;
  flex-direction: column;
`;

const StSum = styled.div`
  margin: 15px 0 0 0;
`;
