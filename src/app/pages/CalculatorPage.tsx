import React from "react";
import {PageContent} from "../components/ui/PageContent";
import {TitleBlock} from "../components/ui/TitleBlock";
import {H2} from '../components/ui/Headers';
import styled from 'styled-components';
import {CalculateFormContainer} from '../components/ui/CalculateFormContainer';

const CalculateWrapper = styled.div`
  padding: 25px;
`;

export const CalculatorPage: React.FunctionComponent = () => (
  <PageContent>
    <TitleBlock>Calculator</TitleBlock>
    <CalculateWrapper>
      <H2>Calculate</H2>
      <CalculateFormContainer/>
    </CalculateWrapper>
  </PageContent>
);
