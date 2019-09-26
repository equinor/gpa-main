import React from 'react';
import { FormSection } from '../../ui/FormSection';
import { S_Label, TextInput } from '../../elements/Inputs';
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
        <S_Label htmlFor='ship-name'>
          Name
        </S_Label>
        <TextInput
          id='ship-name'
          placeholder='Name'
          value={props.ship.name}
          onChange={e => props.setShip({ ...props.ship, name: e.target.value })}
        />
      </S_ShipInput>
      <S_ShipInput>
        <S_Label htmlFor='ship-country'>
          Country
        </S_Label>
        <TextInput
          id='ship-country'
          placeholder='Country'
          value={props.ship.country}
          onChange={e => props.setShip({ ...props.ship, country: e.target.value })}
        />
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
  width: 200px;
`;