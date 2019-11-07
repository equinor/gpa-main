import React from 'react';
import styled from 'styled-components/macro';

import { CalculateFormContainer } from '../components/content/calculator/CalculateFormContainer';
import { P } from '../components/elements/Texts';
import { PageContent } from '../components/ui/PageContent';
import { TitleBlock } from '../components/ui/TitleBlock';

export const CalculatorPage: React.FunctionComponent = () => (
  <PageContent>
    <TitleBlock>Calculator</TitleBlock>
    <StPageWrapper>
      <P>Fill all the values. After calculation, you will be automatically redirected to the result</P>
      <CalculateFormContainer />
    </StPageWrapper>
  </PageContent>
);

export const StPageWrapper = styled.div`
  padding: 30px;
  min-width: 800px;
  box-sizing: border-box;
  h2 {
    margin: 0 0 20px 0;
  }
`;