import React from 'react';
import styled from 'styled-components/macro';
import { Color } from '../../common/Color';

interface FieldsetProps {
  legendText: string,
  index: number,
}

export const FormSection: React.FC<FieldsetProps> = ({ legendText, children, index }) => {
  return (
    <S_FormSection>
      <S_CircleIcon>
        <span>{index}</span>
      </S_CircleIcon>
      <S_FieldSet>
        <Legend>{legendText}</Legend>
        {children}
      </S_FieldSet>
    </S_FormSection>
  );
};

const Legend: React.FC = ({ children }) => {
  return (
    <S_Legend>
      {children}
    </S_Legend>
  );
};

const S_Legend = styled.legend`
  display: flex;
  align-items: center;
  width: 45px;
  height: 45px;
  font-size: 26px;
  font-family: Equinor,serif;
`;

const S_CircleIcon = styled.span`
  min-width: 40px;
  min-height: 40px;
  max-width: 40px;
  max-height: 40px;
  border-radius: 50%;
  color: ${Color.GREEN};
  background-color: ${Color.LIGHT_GREEN};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  margin-right: 20px;
  > span {
    margin: -3px 0 0 0px;
  }
`;

const S_FieldSet = styled.fieldset`
  display: flex;
  width: 100%;
`;

const S_FormSection = styled.div`
  display: flex;
  flex-direction: row;
  margin: 30px 0;
`;

