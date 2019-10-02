import React from "react";
import { PageContent } from "../components/ui/PageContent";
import { TitleBlock } from "../components/ui/TitleBlock";
import { H2, P } from '../components/elements/Texts';
import styled from 'styled-components/macro';
import { CalculateFormContainer } from '../components/content/calculator/CalculateFormContainer';

export const CalculatorPage: React.FunctionComponent = () => (
  <PageContent>
    <TitleBlock>Calculator</TitleBlock>
    <StPageWrapper>
      <H2>Calculate</H2>
      <P>Fill all the values. After calculation, results are shown on the same page. </P>
      <CalculateFormContainer />
    </StPageWrapper>
  </PageContent>
);

export const StPageWrapper = styled.div`
  padding: 30px;
  width: 800px;
  box-sizing: border-box;
  h2 {
    margin: 0 0 20px 0;
  }
`;