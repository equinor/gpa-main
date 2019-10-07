import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { History } from 'history';
import React from 'react';

import { CalculationsContainer } from '../components/content/calculations/CalculationsContainer';
import { IStandardTableRow } from '../components/elements/Tables';
import { P } from '../components/elements/Texts';
import { PageContent } from '../components/ui/PageContent';
import { TitleBlock } from '../components/ui/TitleBlock';
import { StPageWrapper } from './CalculatorPage';
import { Loading } from '../components/elements/Loading';
import styled from 'styled-components';
import { IShip } from '../common/Interfaces';
import moment from 'moment';

export interface ICalculationInfo {
  id: string,
  ship: IShip,
  createdDate: string
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
        display: [calculation.ship.name, calculation.ship.country, moment(calculation.createdDate).fromNow()]
      }
    })
  }

  return (
    <PageContent>
      <TitleBlock>Calculations</TitleBlock>
      <StPageWrapper>
        <P>Select a row from the table to see details of the calculation.</P>
        <div style={{ margin: "30px 0 0 0" }}>
          {calculations.loading &&
            <StLoading>
              <Loading text={"Loading calculation"} />
            </StLoading>
          }
          {calculations.data &&
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

const StLoading = styled.div`
    display: flex;
    justify-content: center;
    margin: 50px 0 0;
`;

const CALCULATIONS_QUERY = gql`
    {
        calculations {
            id
            ship {
                id
                name
                country
            }
            createdDate
        }
    }
`;
