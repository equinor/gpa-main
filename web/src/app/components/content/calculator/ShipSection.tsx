import React from 'react';
import { FormSection } from '../../ui/FormSection';
import { StandardInput, StLabel } from '../../elements/Inputs';
import styled from 'styled-components/macro';
import { StandardSelect } from '../../elements/Selects';

export interface IShip {
  country: string,
  name: string,
}

interface ShipSectionProps {
  ship: IShip,
  setShip(ship: IShip): void,
}

export const ShipSection: React.FC<ShipSectionProps> = (props) => (
  <FormSection legendText='Ship' index={1}>
    <StShipInputs>
      <StShipInput>
        <StLabel>
          Stored ship
        </StLabel>
        {/* Get values, split, set value */}
        <StandardSelect
          options={[
            {
              value: "1",
              label: "Value 1"
            },
            {
              value: "2",
              label: "Value 2"
            },
            {
              value: "3",
              label: "Value 3"
            },
          ]}
          onChange={(e: any) => {
            props.setShip({ ...props.ship, name: e.value, country: e.value })
          }}
          value={props.ship.name ? { 
            label: props.ship.name,
            value: props.ship.name
          } : null}
        ></StandardSelect>
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
);

const StShipInputs = styled.div`
  display: flex;
  flex-direction: row;
`;

const StShipInput = styled.div`
  margin: 10px 30px 0 0;
  width: 225px;
`;