import React, {useState} from 'react';
import {Ship, ShipSection} from './ShipSection';
import {Liquid, LiquidSection} from './LiguidSection';
import {gql} from 'apollo-boost';
import {useMutation} from '@apollo/react-hooks';
import {Calculation} from '../../pages/ResultsPage';

const CALCULATE = gql`
    mutation Calculate($ship: ShipInput!, $liquid: FluidInput!, $transport: TransportInput!, $standard: StandardInput!) {
        addCalculation(ship: $ship, fluid: $liquid, transport: $transport, standard: $standard) {
            id
        }
    }
`;

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

export const CalculateFormContainer = () => {
  const [ship, setShip] = useState<Ship>({name: '', country: ''});
  const [liquid, setLiquid] = useState<Liquid>({
    nitrogen: 0.691,
    methane: 91.93,
    ethane: 5.651,
    propane: 1.296,
    iButane: 0.122,
    nButane: 0.289,
    iPentane: 0.018,
    nPentane: 0.003,
    nHexane: 0.0,
  });

  const [addCalculation, {data}] = useMutation<Calculation, {ship: Ship, liquid: FluidInput, transport: any, standard: any}>(CALCULATE, {
    variables: {
      ship,
      liquid: (Object.keys(liquid) as Array<keyof typeof liquid>).reduce((acc, componentName) => {
        acc[componentName] = {value: liquid[componentName], unit: 'mol'};
        return acc;
      }, {} as any),
      transport: {volume: 14000, pressure: 1.013, boilOffRate: 0.0015, fromDate: "2019-09-17T06:54:07Z", toDate: "2019-09-17T06:54:07Z"},
      standard: {combustionTemperature: 15, measurementTemperature: 15, idealGasReferenceState: false},
    }
  });

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      addCalculation();
    }}>
      <ShipSection ship={ship} setShip={setShip}/>
      <LiquidSection liquid={liquid} setLiquid={setLiquid}/>
      <button>Compute</button>
    </form>
  );
};