import React from 'react';
import { FormSection } from '../../ui/FormSection';
import { S_Label, TextInput, StandardInput } from '../../elements/Inputs';
import styled from 'styled-components/macro';

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
    <S_ShipInputs>
      <S_ShipInput>
        <StandardInput
          id="ship-name"
          label="Name"
          onChange={(e: any) => props.setShip({ ...props.ship, name: e.target.value })}
          placeholder="Name"
          value={props.ship.name}
          type="text"
        ></StandardInput>
      </S_ShipInput>
      <S_ShipInput>
        <StandardInput
          id="ship-country"
          label="Country"
          onChange={(e: any) => props.setShip({ ...props.ship, country: e.target.value })}
          placeholder="Country"
          value={props.ship.country}
          type="text"
        ></StandardInput>
      </S_ShipInput>
    </S_ShipInputs>
  </FormSection>
);

const S_ShipInputs = styled.span`
  display: flex;
  flex-direction: row;
`;

const S_ShipInput = styled.p`
  margin: 10px 30px 0 0;
  width: 225px;
`;