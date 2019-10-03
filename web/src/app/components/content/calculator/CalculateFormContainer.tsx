import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import React, { useState } from 'react';

import { EIcon } from '../../../assets/svg/EquinorIcon';
import { StandardButton } from '../../elements/Buttons';
import { ILiquid, LiquidSection } from './LiquidSection';
import { ShipSection } from './ShipSection';
import { StandardSection } from './StandardSection';
import { TransportSection } from './TransportSection';
import useReactRouter from 'use-react-router';
import { IShip, ITransport, IStandard, ICalculation, IFluid } from '../../../common/Interfaces';

const CALCULATE = gql`
    mutation Calculate($ship: ShipInput!, $liquid: FluidInput!, $transport: TransportInput!, $standard: StandardInput!) {
        addCalculation(ship: $ship, fluid: $liquid, transport: $transport, standard: $standard) {
            id
        }
    }
`;

export const CalculateFormContainer: React.FunctionComponent<any> = () => {
  const { history } = useReactRouter();
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

  const [addCalculation] = useMutation<ICalculation, { ship: IShip, liquid: IFluid, transport: ITransport, standard: IStandard }>(CALCULATE, {
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
      addCalculation().then((r: any) => {
        history.push('/calculation/' + r.data.addCalculation.id);
      });
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
      {/* <CalculationContainer
        style={{ margin: "30px 0 0 0" }}
      ></CalculationContainer> */}
    </form>
  );
};