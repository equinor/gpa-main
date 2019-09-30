import React, { useState } from 'react';
import { IShip, ShipSection } from './ShipSection';
import { ILiquid, LiquidSection } from './LiquidSection';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import { ICalculation } from '../../../pages/ResultsPage';
import { TransportSection, ITransport } from './TransportSection';
import { StandardSection, IStandard } from './StandardSection';
import { StandardButton } from '../../elements/Buttons';
import { EIcon } from '../../../assets/svg/EquinorIcon';
import { ResultContainer } from '../result/ResultContainer';

interface MetricInput {
  value: number,
  unit: string,
}

interface FluidInput {
  nitrogen: MetricInput,
  methane: MetricInput,
  ethane: MetricInput,
  propane: MetricInput,
  iButane: MetricInput,
  nButane: MetricInput,
  iPentane: MetricInput,
  nPentane: MetricInput,
  nHexane: MetricInput,
}

const CALCULATE = gql`
    mutation Calculate($ship: ShipInput!, $liquid: FluidInput!, $transport: TransportInput!, $standard: StandardInput!) {
        addCalculation(ship: $ship, fluid: $liquid, transport: $transport, standard: $standard) {
            id
        }
    }
`;

export const CalculateFormContainer = () => {
  const [ship, setShip] = useState<IShip>({ name: '', country: '' });
  const [liquid, setLiquid] = useState<ILiquid>({
    nitrogen: 0.61,
    methane: 91.93,
    ethane: 5.61,
    propane: 1.96,
    iButane: 0.12,
    nButane: 0.89,
    iPentane: 0.18,
    nPentane: 0.03,
    nHexane: 0.0,
  });
  const [transport, setTransport] = useState<ITransport>({
    volume: 14000,
    pressure: 1.13,
    boilOffRate: 0.15,
    fromDate: "2019-09-17T03:01:07Z",
    toDate: "2019-09-20T02:22:07Z"
  });
  const [standard, setStandard] = useState<IStandard>({
    combustionTemperature: 15,
    measurementTemperature: 15,
    idealGasReferenceState: false
  })

  const [addCalculation, { data }] = useMutation<ICalculation, { ship: IShip, liquid: FluidInput, transport: any, standard: any }>(CALCULATE, {
    variables: {
      ship,
      liquid: (Object.keys(liquid) as Array<keyof typeof liquid>).reduce((acc, componentName) => {
        acc[componentName] = { value: liquid[componentName], unit: 'mol' };
        return acc;
      }, {} as any),
      transport,
      standard
    }
  });

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      console.log("To be submitted", ship, liquid, transport, standard);
      addCalculation();
    }}>
      <ShipSection ship={ship} setShip={setShip} />
      <LiquidSection liquid={liquid} setLiquid={setLiquid} />
      <TransportSection transport={transport} setTransport={setTransport}></TransportSection>
      <StandardSection standard={standard} setStandard={setStandard}></StandardSection>
      <StandardButton
        icon={EIcon.SUBMIT}
        text={"Compute"}
        style={{ margin: "30px 0 0 0" }}
      ></StandardButton>
      <ResultContainer
        style={{ margin: "30px 0 0 0" }}
      ></ResultContainer>
    </form>
  );
};