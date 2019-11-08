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
import { UserMessage } from '../../elements/UserMessage';
import styled from 'styled-components';
import { isFilled } from '../../../utils/functions';
import { EColor } from '../../../common/Color';

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
  const [liquid, setLiquid] = useState<ILiquid>({ //shall be 0's
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
  const [transport, setTransport] = useState<ITransport>({ //shall be 0's
    volume: 140000,
    pressure: 1.13,
    boilOffRate: 0.15,
    fromDate: "2019-09-17T01:01:00Z",
    toDate: "2019-09-20T01:01:01Z"
  });
  const [standard, setStandard] = useState<IStandard>({
    combustionTemperature: 15, //keep default
    measurementTemperature: 15, //keep default
    idealGasReferenceState: false,
    standardVersion: "2016"
  })

  const [addCalculation, { loading, error }] = useMutation<ICalculation, { ship: IShip, liquid: IFluid, transport: ITransport, standard: IStandard }>(CALCULATE, {
    variables: {
      ship,
      liquid: (Object.keys(liquid) as Array<keyof typeof liquid>).reduce((acc, componentName) => {
        acc[componentName] = { value: liquid[componentName], unit: 'mol' };
        return acc;
      }, {} as any),
      transport,
      standard
    },
    onCompleted: (
      r: any
    ) => {
      history.push('/result/' + r.addCalculation.id);
    }
  });

  return (
    <>
      {!loading && !error &&
        <form onSubmit={(e) => {
          e.preventDefault();
          addCalculation();
        }}>
          <ShipSection ship={ship} setShip={setShip} />
          <LiquidSection liquid={liquid} setLiquid={setLiquid} />
          <TransportSection transport={transport} setTransport={setTransport}></TransportSection>
          <StandardSection standard={standard} setStandard={setStandard}></StandardSection>
          <div style={{
            display: "flex",
            flexDirection: "row",
            margin: "35px 0px 0px",
            alignItems: "center"
          }}>
            <StandardButton
              icon={EIcon.SUBMIT}
              text={"Compute"}
              disabled={isDisabled()}
            ></StandardButton>
            {isDisabled() &&
              <p
                style={{
                  margin: "3px 0 0 20px",
                  fontSize: "12px",
                  color: EColor.GRAY
                }}
              >
                Please fill all the required fields
                <span style={{ color: "red", fontWeight: "bold" }}>&nbsp;*</span>
              </p>
            }
          </div>
        </form>
      }
      {loading &&
        <StUserMessage>
          <UserMessage type={"loading"} text={"Calculating"} />
        </StUserMessage>
      }
      {error &&
        <StUserMessage>
          <UserMessage type={"error"} text={"Calculation failed"} />
        </StUserMessage>
      }

    </>
  );

  function isDisabled() {
    if (
      !isFilled(ship.name) ||
      !isFilled(ship.country) ||
      !isFilled(transport.volume) ||
      !isFilled(transport.pressure) ||
      !isFilled(transport.boilOffRate) ||
      !isFilled(transport.fromDate) ||
      !isFilled(transport.toDate) ||
      !isFilled(standard.combustionTemperature) ||
      !isFilled(standard.measurementTemperature) ||
      !isFilled(standard.standardVersion)
    ) {
      return true;
    }
    else {
      return false;
    }
  }
};

const StUserMessage = styled.div`
    display: flex;
    justify-content: center;
    margin: 50px 0 0;
`;