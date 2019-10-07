import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import React from 'react';
import { match } from 'react-router';

import { ICalculation, IResult } from '../common/Interfaces';
import { CalculationContainer } from '../components/content/calculation/CalculationContainer';
import { CalculationValuesContainer } from '../components/content/calculation/CalculationValuesContainer';
import { PageContent } from '../components/ui/PageContent';
import { TitleBlock } from '../components/ui/TitleBlock';
import { StPageWrapper } from './CalculatorPage';
import { Loading } from '../components/elements/Loading';
import styled from 'styled-components';

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
        {calculation.loading &&
          <StLoading>
            <Loading text={"Loading calculation"} />
          </StLoading>
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
      </StPageWrapper>
    </PageContent>
  );
};

const StLoading = styled.div`
    display: flex;
    justify-content: center;
    margin: 50px 0 0;
`;

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
