import React from 'react';
import styled from 'styled-components';

interface FieldsetProps {
  legendText: string,
  index: number,
}

const LegendStyle = styled.legend`
  display: flex;
  align-items: center;
  width: 45px;
  height: 45px;
  font-size: 26px;
  font-family: Equinor,serif;
`;

const CircleIcon = styled.span`
  min-width: 40px;
  min-height: 40px;
  max-width: 40px;
  max-height: 40px;
  border-radius: 50%;
  color: #007079;
  background-color: #CCE2E4;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  margin-right: 20px;
`;

const Legend: React.FC = ({children}) => {
  return (
    <LegendStyle>
      {children}
    </LegendStyle>
  );
};

const Fieldset = styled.fieldset`
  display: flex;
  width: 100%;
`;

const FormSectionStyle = styled.div`
  display: flex;
  flex-direction: row;
  margin: 30px 0;
`;

export const FormSection: React.FC<FieldsetProps> = ({legendText, children, index}) => {
  return (
    <FormSectionStyle>
      <CircleIcon>
        {index}
      </CircleIcon>
      <Fieldset>
        <Legend>{legendText}</Legend>
        {children}
      </Fieldset>
    </FormSectionStyle>
  );
};