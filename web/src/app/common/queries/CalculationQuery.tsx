import { gql } from 'apollo-boost';

export const CALCULATION_QUERY = gql`
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
              gcv{
                unit
                value
              }
              gcvmass {
                unit
                value
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
              xmethane {
                value 
                unit
              }
              xethane {
                value 
                unit
              }
              xpropane {
                value 
                unit
              }
              xic4 {
                value 
                unit
              }
              xnc4 {
                value 
                unit
              }
              xic5 {
                value 
                unit
              }
              xnc5 {
                value 
                unit
              }
              xnc6 {
                value 
                unit
              }
              xnitrogen {
                value 
                unit
              }
              ymethane {
                value 
                unit
              }
              yethane {
                value 
                unit
              }
              ypropane {
                value 
                unit
              }
              yic4 {
                value 
                unit
              }
              ync4 {
                value 
                unit
              }
              yic5 {
                value 
                unit
              }
              ync5 {
                value 
                unit
              }
              ync6 {
                value 
                unit
              }
              ynitrogen {
                value 
                unit
              }
            }
            createdDate
        }
      }
`;
