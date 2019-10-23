import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { History } from 'history';
import moment from 'moment';
import React from 'react';
import styled from 'styled-components';

import { IShip } from '../common/Interfaces';
import { CalculationsContainer } from '../components/content/calculations/CalculationsContainer';
import { IStandardTableRow } from '../components/elements/Tables';
import { P } from '../components/elements/Texts';
import { UserMessage } from '../components/elements/UserMessage';
import { PageContent } from '../components/ui/PageContent';
import { TitleBlock } from '../components/ui/TitleBlock';
import { StPageWrapper } from './CalculatorPage';

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
        display: [calculation.ship.name, calculation.ship.country, calculation.createdDate ? moment(calculation.createdDate).fromNow() : ""] 
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
            <StUserMessage>
              <UserMessage type={"loading"} text={"Loading calculations"} />
            </StUserMessage> 
          } 
          {calculations.data &&
            <CalculationsContainer
              rows={rows}
              selectRow={(row: IStandardTableRow) => {
                history.push('/calculation/' + row.value);
              }}
            ></CalculationsContainer> 
          }
          {calculations.error &&
            <StUserMessage>
              <UserMessage type={"error"} text={"Loading failed"} />
            </StUserMessage>
          }
        </div>
      </StPageWrapper>
    </PageContent >
  );
};

const StUserMessage = styled.div`
    display: flex;
    justify-content: center;
    margin: 50px 0 0;
`;

export const CALCULATIONS_QUERY = gql`
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
