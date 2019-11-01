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
              liquid {
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
              gas {
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
            }
            createdDate
        }
      }
`;
