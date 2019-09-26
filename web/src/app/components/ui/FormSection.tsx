import React from 'react';
import styled from 'styled-components/macro';
import { EColor } from '../../common/Color';

interface FieldsetProps {
  legendText: string,
  index: number,
}

export const FormSection: React.FC<FieldsetProps> = ({ legendText, children, index }) => {
  return (
    <StFormSection>
      <StCircleIcon>
        <span>{index}</span>
      </StCircleIcon>
      <StFieldSet>
        <Legend>{legendText}</Legend>
        {children}
      </StFieldSet>
    </StFormSection>
  );
};

const Legend: React.FC = ({ children }) => {
  return (
    <StLegend>
      {children}
    </StLegend>
  );
};

const StFormSection = styled.div`
  display: flex;
  flex-direction: row;
  margin: 35px 0 0 0;
`;


const StLegend = styled.legend`
  display: flex;
  align-items: center;
  width: 100%;
  height: 42px;
  font-size: 24px;
  font-family: Equinor,serif;
`;

const StCircleIcon = styled.span`
  min-width: 40px;
  min-height: 40px;
  max-width: 40px;
  max-height: 40px;
  border-radius: 50%;
  color: ${EColor.GREEN};
  background-color: ${EColor.LIGHT_GREEN};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  margin-right: 20px;
  > span {
    margin: -3px 0 0 0px;
  }
`;

const StFieldSet = styled.fieldset`
  display: flex;
  width: 100%;
`;
