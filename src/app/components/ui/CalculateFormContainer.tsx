import React, {useState} from 'react';
import {FormSection} from './FormSection';
import {Label, TextInput} from './Inputs';
import styled from 'styled-components';

const ShipInputs = styled.span`
  display: flex;
  flex-direction: row;
`;

const ShipInput = styled.p`
  flex-grow: 1;
  margin-right: 25px;
`;

interface Ship {
  country: string,
  name: string,
}

interface ShipSectionProps {
  ship: Ship,

  setShip(ship: Ship): void,
}

const ShipSection: React.FC<ShipSectionProps> = ({ship, setShip}) => (
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

export const CalculateFormContainer = () => {
  const [ship, setShip] = useState({name: '', country: ''});

  return (
    <form>
      <ShipSection ship={ship} setShip={setShip}/>
    </form>
  );
};