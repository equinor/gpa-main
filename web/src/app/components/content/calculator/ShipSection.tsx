import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import React, { useState } from 'react';
import styled from 'styled-components/macro';

import { IShip } from '../../../common/Interfaces';
import { StandardInput } from '../../elements/Inputs';
import { IOption, StandardSelect } from '../../elements/Selects';
import { FormSection } from '../../ui/FormSection';

interface ShipSectionProps {
  ship: IShip;
  setShip(ship: IShip): void;
}

export const ShipSection: React.FC<ShipSectionProps> = props => {
  const ships = useQuery(SHIPS_QUERY);

  //select ships
  const [storedShip, setStoredShip] = useState<boolean>(false); //used select, empty otherwise
  let options: IOption[] = [];
  if (ships.data) {
    options = ships.data.ships.map((ship: IShip) => {
      return {
        value: ship.name + '~' + ship.country,
        label: ship.name + ' (' + ship.country + ')',
      };
    });
  }

  return (
    <FormSection legendText="Ship" index={1}>
      <StShipInputs>
        <StShipInput>
          {ships.loading && <div style={{ height: '61px' }}>Loading</div>}
          {!ships.loading && (
            <StandardSelect
              id="storedShip"
              label={'Stored ship'}
              options={options}
              onChange={(e: any) => {
                props.setShip({
                  ...props.ship,
                  name: e.value.split('~')[0],
                  country: e.value.split('~')[1],
                });
                setStoredShip(true);
              }}
              value={
                props.ship.name && storedShip
                  ? {
                      label: props.ship.name,
                      value: props.ship.name,
                    }
                  : null
              }
            />
          )}
        </StShipInput>
      </StShipInputs>
      <div
        style={{
          width: '100%',
          fontSize: '16px',
          fontWeight: 500,
          margin: '20px 0 5px 0',
        }}
      >
        - or -
      </div>
      <StShipInputs>
        <StShipInput>
          <StandardInput
            id="ship-name"
            label="Name"
            onChange={(e: any) => {
              props.setShip({ ...props.ship, name: e.target.value });
              setStoredShip(false);
            }}
            placeholder="Name"
            value={props.ship.name}
            type="text"
            required={true}
          />
        </StShipInput>
        <StShipInput>
          <StandardInput
            id="ship-country"
            label="Country"
            onChange={(e: any) => {
              props.setShip({ ...props.ship, country: e.target.value });
              setStoredShip(false);
            }}
            placeholder="Country"
            value={props.ship.country}
            type="text"
          />
        </StShipInput>
      </StShipInputs>
    </FormSection>
  );
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
`;
