import { useQuery } from '@apollo/react-hooks';
import React from 'react';
import { match } from 'react-router';
import styled from 'styled-components';

import { ICalculation, IResult } from '../common/Interfaces';
import { CALCULATION_QUERY } from '../common/queries/CalculationQuery';
import { CalculationContainer } from '../components/content/calculation/CalculationContainer';
import { CalculationValuesContainer } from '../components/content/calculation/CalculationValuesContainer';
import { UserMessage } from '../components/elements/UserMessage';
import { PageContent } from '../components/ui/PageContent';
import { TitleBlock } from '../components/ui/TitleBlock';
import { StPageWrapper } from './CalculatorPage';

interface ICalculationWithResult extends ICalculation {
  result: IResult[];
}

interface ICalculationData {
  calculation: ICalculationWithResult,
}

interface ICalculationPage {
  match: match<{
    id: string
  }>;
}

export const CalculationPage: React.FunctionComponent<ICalculationPage> = (props) => {
  const calculation = useQuery<ICalculationData, { id: string }>(CALCULATION_QUERY, {
    variables: {
      id: props.match.params["id"]
    }
  });

  return (
    <PageContent>
      <TitleBlock>Result</TitleBlock>
      <StPageWrapper>
        {calculation.loading &&
          <StUserMessage>
            <UserMessage type={"loading"} text={"Loading result"} />
          </StUserMessage>
        }
        {calculation.data &&
          <>
            <CalculationContainer
              calculation={calculation.data.calculation}
            ></CalculationContainer>
            <CalculationValuesContainer
              calculation={calculation.data.calculation}
            >
            </CalculationValuesContainer>
          </>
        }
        {calculation.error &&
          <StUserMessage>
            <UserMessage type={"error"} text={"Loading failed"} />
          </StUserMessage>
        }
      </StPageWrapper>
    </PageContent>
  );
};

const StUserMessage = styled.div`
    display: flex;
    justify-content: center;
    margin: 50px 0 0;
`;
