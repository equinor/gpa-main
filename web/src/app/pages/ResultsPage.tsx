import React from 'react';
import {useQuery} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';
import {PageContent} from '../components/ui/PageContent';
import {TitleBlock} from '../components/ui/TitleBlock';
import styled from 'styled-components/macro';

const CALCULATIONS_QUERY = gql`
    {
        calculations {
            id
            ship {
                id
                name
                country
            }
            fluid {
                id
                nitrogen {
                    value
                    unit
                }
                methane {
                    value
                    unit
                }
                ethane {
                    value
                    unit
                }
                propane {
                    value
                    unit
                }
                iButane {
                    value
                    unit
                }
                nButane {
                    value
                    unit
                }
                iPentane {
                    value
                    unit
                }
                nPentane {
                    value
                    unit
                }
                nHexane {
                    value
                    unit
                }
            }
            transport {
                id
                volume
                pressure
                boilOffRate
                fromDate
                toDate
            }
            standard {
                id
                combustionTemperature
                measurementTemperature
                idealGasReferenceState
            }
        }
    }
`;

export interface Calculation {
  id: string,
  ship: {
    id: string,
    name: string,
    country: string,
  },
  fluid: any,
  transport: any,
  standard: any,
}

interface CalculationsData {
  calculations: Calculation[],
}

const ResultsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ResultItemStyled = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
  align-items: center;
`;

// TODO: Create link to single result page
const ResultItem: React.FC<Calculation> = ({ship}) => (
  <ResultItemStyled>
    Ship: {ship.name} - {ship.country}
  </ResultItemStyled>
);

export const ResultsPage: React.FunctionComponent = () => {
  const {loading, error, data} = useQuery<CalculationsData>(CALCULATIONS_QUERY);
  if (loading) {
    return <div>'Loading'</div>;
  }
  if (error) {
    return <div>error</div>;
  }

  if (!data) {
    return null;
  }
  return (
    <PageContent>
      <TitleBlock>Results</TitleBlock>
      <ResultsWrapper>
        {data.calculations.map((calculation: any) => {
          return <ResultItem {...calculation}/>;
        })}
      </ResultsWrapper>
    </PageContent>
  );
};