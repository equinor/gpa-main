import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import React from 'react';

import { CalculationsContainer } from '../components/content/calculations/CalculationsContainer';
import { IStandardTableRow } from '../components/elements/Tables';
import { H2, P } from '../components/elements/Texts';
import { PageContent } from '../components/ui/PageContent';
import { TitleBlock } from '../components/ui/TitleBlock';
import { StPageWrapper } from './CalculatorPage';
import { History } from 'history';

export interface ICalculationInfo {
  id: string,
  ship: {
    id: string,
    name: string,
    country: string,
  }
}

interface ICalculationsData {
  calculations: ICalculationInfo[],
}

interface ICalculationPage {
  history: History;
}

export const CalculationsPage: React.FunctionComponent<ICalculationPage> = ({ history }) => {
  const calculations = useQuery<ICalculationsData>(CALCULATIONS_QUERY);

  let rows: IStandardTableRow[] = [];
  if (calculations.data) {
    rows = calculations.data.calculations.map((calculation: ICalculationInfo) => {
      return {
        value: calculation.id,
        display: [calculation.ship.name, calculation.ship.country, ""]
      }
    })
  }

  return (
    <PageContent>
      <TitleBlock>Results</TitleBlock>
      <StPageWrapper>
        <H2>Calculations</H2>
        <P>Select a row from the table to see details of the calculation.</P>
        <div style={{ margin: "30px 0 0 0" }}>
          {calculations.loading &&
            <span>
              Loading
            </span>
          }
          {!calculations.loading &&
            <CalculationsContainer
              rows={rows}
              selectRow={(row: IStandardTableRow) => {
                history.push('/calculation/' + row.value);
              }}
            ></CalculationsContainer>
          }
        </div>
      </StPageWrapper>
    </PageContent >
  );
};

const CALCULATIONS_QUERY = gql`
    {
        calculations {
            id
            ship {
                id
                name
                country
            }
        }
    }
`;
