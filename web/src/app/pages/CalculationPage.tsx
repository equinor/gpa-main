import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import React from 'react';

import { CalculationContainer } from '../components/content/calculation/CalculationContainer';
import { H2 } from '../components/elements/Texts';
import { PageContent } from '../components/ui/PageContent';
import { TitleBlock } from '../components/ui/TitleBlock';
import { StPageWrapper } from './CalculatorPage';
import { match } from 'react-router';
import { ICalculation, IResult } from '../common/Interfaces';

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
      <TitleBlock>Calculation</TitleBlock>
      <StPageWrapper>
        <H2>Calculation</H2>
        {calculation.loading &&
          <div>Loading</div>
        }
        {calculation.data &&
          <CalculationContainer
            calculation={calculation.data.calculation}
          ></CalculationContainer>
        }
      </StPageWrapper>
    </PageContent>
  );
};

const CALCULATION_QUERY = gql`
  query Calculation ($id: ID!) {
      calculation(id: $id) {
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
            result {
              id
              time {
                value 
                unit
              }
              wi {
                value 
                unit
              }
              gcv {
                value 
                unit
              }
              density {
                value 
                unit
              }
              temp {
                value 
                unit
              }
              volume {
                value 
                unit
              }
              energy {
                value 
                unit
              }
            }
        }
      }
`;
