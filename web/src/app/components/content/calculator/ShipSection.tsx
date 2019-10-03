import React from 'react';
import styled from 'styled-components/macro';

import { StandardInput, StLabel } from '../../elements/Inputs';
import { StandardSelect, IOption } from '../../elements/Selects';
import { FormSection } from '../../ui/FormSection';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { IShip } from '../../../common/Interfaces';

interface ShipSectionProps {
  ship: IShip,
  setShip(ship: IShip): void,
}

export const ShipSection: React.FC<ShipSectionProps> = (props) => {
  const ships = useQuery(SHIPS_QUERY);

  //select ships
  let options: IOption[] = [];
  if (ships.data) {
    options = ships.data.ships.map((ship: IShip) => {
      return {
        value: ship.name + "~" + ship.country,
        label: ship.name + " (" + ship.country + ")"
      }
    })
  }

  return (
    <FormSection legendText='Ship' index={1}>
      <StShipInputs>
        <StShipInput>
          {ships.loading &&
            <div style={{ height: "61px" }}>
              Loading
            </div>
          }
          {!ships.loading &&
            <>
              <StLabel>
                Stored ship
              </StLabel>
              <StandardSelect
                options={options}
                onChange={(e: any) => {
                  props.setShip({ ...props.ship, name: e.value.split("~")[0], country: e.value.split("~")[1] })
                }}
                value={props.ship.name ? {
                  label: props.ship.name,
                  value: props.ship.name
                } : null}
              ></StandardSelect>
            </>
          }
        </StShipInput>
      </StShipInputs>
      <div style={{ width: "100%", fontSize: "16px", fontWeight: 500, margin: "20px 0 5px 0" }}>
        - or -
    </div>
      <StShipInputs>
        <StShipInput>
          <StandardInput
            id="ship-name"
            label="Name"
            onChange={(e: any) => props.setShip({ ...props.ship, name: e.target.value })}
            placeholder="Name"
            value={props.ship.name}
            type="text"
          ></StandardInput>
        </StShipInput>
        <StShipInput>
          <StandardInput
            id="ship-country"
            label="Country"
            onChange={(e: any) => props.setShip({ ...props.ship, country: e.target.value })}
            placeholder="Country"
            value={props.ship.country}
            type="text"
          ></StandardInput>
        </StShipInput>
      </StShipInputs>
    </FormSection>
  )
};

const StShipInputs = styled.div`
  display: flex;
  flex-direction: row;
`;

const StShipInput = styled.div`
  margin: 10px 30px 0 0;
  width: 225px;
`;

const SHIPS_QUERY = gql`
  query ships {
    ships {
      id
      name
      country
    }
  }
`