import React from 'react';
import {FormSection} from '../ui/FormSection';
import {Label, TextInput} from '../ui/Inputs';
import styled from 'styled-components';

export interface Ship {
  country: string,
  name: string,
}

interface ShipSectionProps {
  ship: Ship,

  setShip(ship: Ship): void,
}

const ShipInputs = styled.span`
  display: flex;
  flex-direction: row;
`;

const ShipInput = styled.p`
  margin-right: 25px;
`;

export const ShipSection: React.FC<ShipSectionProps> = ({ship, setShip}) => (
  <FormSection legendText='Ship' index={1}>
    <ShipInputs>
      <ShipInput>
        <Label htmlFor='ship-name'>
          Name
        </Label>
        <TextInput
          id='ship-name'
          placeholder='Name'
          value={ship.name}
          onChange={e => setShip({...ship, name: e.target.value})}
        />
      </ShipInput>
      <ShipInput>
        <Label htmlFor='ship-country'>
          Country
        </Label>
        <TextInput
          id='ship-country'
          placeholder='Country'
          value={ship.country}
          onChange={e => setShip({...ship, country: e.target.value})}
        />
      </ShipInput>
    </ShipInputs>
  </FormSection>
);