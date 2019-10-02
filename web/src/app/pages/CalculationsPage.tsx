import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import React from 'react';

import { CalculationsContainer } from '../components/content/calculations/CalculationsContainer';
import { IStandardTableRow } from '../components/elements/Tables';
import { H2, P } from '../components/elements/Texts';
import { PageContent } from '../components/ui/PageContent';
import { TitleBlock } from '../components/ui/TitleBlock';
import { StPageWrapper } from './CalculatorPage';

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

export const CalculationsPage: React.FunctionComponent = (props: any) => {
  const calculations = useQuery<ICalculationsData>(CALCULATIONS_QUERY);

  var rows: IStandardTableRow[] = [];
  if (calculations.data) {
    calculations.data.calculations.forEach((calculation: ICalculationInfo) => {
      rows.push({
        value: calculation.id,
        display: [calculation.ship.name, calculation.ship.country, ""]
      })
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
                props.history.push('/calculation/' + row.value);
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
