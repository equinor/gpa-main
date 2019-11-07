import moment from 'moment';
import React, { useState } from 'react';
import styled from 'styled-components/macro';

import { EColor } from '../../../common/Color';
import { ICalculation, IResult, IFluid } from '../../../common/Interfaces';
import { IStandardTableRow, StandardTable } from '../../elements/Tables';
import { H2 } from '../../elements/Texts';
import { agingHeaders, fluidHeaders } from '../../../common/tableHeaders/CalculationHeaders';

export interface ICalculationContainer {
  calculation: ICalculation;
  style?: Object;
}

export const CalculationContainer: React.FunctionComponent<ICalculationContainer> = (props) => {

  const [moreResults, showMoreResults] = useState<boolean>(false);
  const [resultType, setResultType] = useState<"ShipAgeing" | "GasComposition" | "LiquidComposition">("ShipAgeing");

  const initRow: IResult = props.calculation.result[0];
  const initRowFluid: IFluid = props.calculation.result[0].gas;
  const endRow: IResult = props.calculation.result[props.calculation.result.length - 1];

  //table more results
  let tableRows: IStandardTableRow[];
  let headers: {
    title: string,
    internalName: string
  }[];
  switch (resultType) {
    case "LiquidComposition":
      tableRows = props.calculation.result.map((result: IResult) => {
        const { liquid: fluid } = result;
        return {
          value: result.id,
          display: [
            result.time.value.toFixed(fluidHeaders[0].fixed),
            fluid.nitrogen.value.toFixed(fluidHeaders[1].fixed),
            fluid.methane.value.toFixed(fluidHeaders[2].fixed),
            fluid.ethane.value.toFixed(fluidHeaders[3].fixed),
            fluid.propane.value.toFixed(fluidHeaders[4].fixed),
            fluid.iButane.value.toFixed(fluidHeaders[5].fixed),
            fluid.nButane.value.toFixed(fluidHeaders[6].fixed),
            fluid.iPentane.value.toFixed(fluidHeaders[7].fixed),
            fluid.nPentane.value.toFixed(fluidHeaders[8].fixed),
            fluid.nHexane.value.toFixed(fluidHeaders[9].fixed)
          ]
        }
      });
      headers = fluidHeaders;
      break;
    case "GasComposition":
      tableRows = props.calculation.result.map((result: IResult) => {
        const { gas: fluid } = result;
        return {
          value: result.id,
          display: [
            result.time.value.toFixed(fluidHeaders[0].fixed),
            fluid.nitrogen.value.toFixed(fluidHeaders[1].fixed),
            fluid.methane.value.toFixed(fluidHeaders[2].fixed),
            fluid.ethane.value.toFixed(fluidHeaders[3].fixed),
            fluid.propane.value.toFixed(fluidHeaders[4].fixed),
            fluid.iButane.value.toFixed(fluidHeaders[5].fixed),
            fluid.nButane.value.toFixed(fluidHeaders[6].fixed),
            fluid.iPentane.value.toFixed(fluidHeaders[7].fixed),
            fluid.nPentane.value.toFixed(fluidHeaders[8].fixed),
            fluid.nHexane.value.toFixed(fluidHeaders[9].fixed)
          ]
        }
      });
      headers = fluidHeaders;
      break;
    default:
      tableRows = props.calculation.result.map((result: IResult) => {
        return {
          value: result.id,
          display: [
            result.time.value.toFixed(agingHeaders[0].fixed),
            result.wi.value.toFixed(agingHeaders[1].fixed),
            result.gcv.value.toFixed(agingHeaders[2].fixed),
            result.gcvmass.value.toFixed(agingHeaders[3].fixed),
            result.density.value.toFixed(agingHeaders[4].fixed),
            result.temp.value.toFixed(agingHeaders[5].fixed),
            result.volume.value.toFixed(agingHeaders[6].fixed),
            result.energy.value.toFixed(agingHeaders[7].fixed)
          ]
        }
      });
      headers = agingHeaders;
      break;

  }

  //card result
  const cardResults: ICardResult[] = agingHeaders.map((header) => {
    const title = header.title as never;
    const internalName = header.internalName as never;
    return {
      title: title,
      unit: initRow[internalName]["unit"],
      initValue: initRow[internalName]["value"],
      endValue: endRow[internalName]["value"],
      fixed: header.fixed
    }
  })

  return (
    <StCalculationContainer style={props.style}>
      <H2 style={{ width: "100%" }}>
        Results
        <span style={{
          fontSize: "15px",
          color: EColor.GRAY,
          margin: "-1px 0 0 10px"
        }}>{moment(props.calculation.createdDate).fromNow()}</span>
      </H2>
      <div style={{ display: "flex" }}>
        {cardResults.map((result: ICardResult, index) => {
          return (
            <StCalculation key={index}>
              <span style={{ fontSize: "18px", margin: "20px 0 10px 0" }}>{result.title.toUpperCase()}</span>
              <span style={{ fontSize: "10px" }}>{result.unit}</span>
              <span style={{
                color: "#73B1B5",
                fontSize: "14px",
                margin: "21px 0px 13px 0"
              }}>{result.initValue.toFixed(result.fixed)}</span>
              <span style={{
                color: EColor.GREEN,
                fontSize: "14px",
                fontWeight: 500
              }}>{result.endValue.toFixed(result.fixed)}</span>
            </StCalculation>
          )
        })}
      </div>
      <StLinks>
        <span onClick={() => {
          showMoreResults(!moreResults);
        }}>
          {!moreResults &&
            <>Show more results</>
          }
          {moreResults &&
            <>Hide more results</>
          }
        </span>
      </StLinks>
      {
        moreResults &&
        <>
          <StMoreResults>
            <div style={{
              float: "left",
              width: "100%"
            }}>
              <span
                className={resultType === "ShipAgeing" ? "active" : ""}
                onClick={() => {
                  setResultType("ShipAgeing")
                }}
              >Ageing</span>
              <span
                className={resultType === "GasComposition" ? "active" : ""}
                onClick={() => {
                  setResultType("GasComposition")
                }}
              >Gas composition</span>
              <span
                className={resultType === "LiquidComposition" ? "active" : ""}
                onClick={() => {
                  setResultType("LiquidComposition")
                }}
              >Liquid composition</span>
            </div>
            {resultType === "ShipAgeing" &&
              <p>ISO6976 (2016) are used for calculating WI and GCV.  The LNG liquid density is calculated based on ISO6578.</p>
            }
            {resultType === "GasComposition" &&
              <p>Composition of boil-off gas is calculated based on SRK-EoS with classic mixing rule.</p>
            }
            {resultType === "LiquidComposition" &&
              <p>Liquid is assumed to be at the boiling point. Bubble point temperature is calculated based on SRK-EoS with classic mixing rule.</p>
            }
          </StMoreResults>
          <StStandardTable>
            <StandardTable
              header={headers.map((header) => {
                return header.title;
              })}
              headerSecondary={headers.map((header => {
                //get and display units
                //ageing
                if (resultType === "ShipAgeing") {
                  return initRow[header.internalName as never]["unit"];
                }
                //gas, liquid
                else {
                  //time from result
                  if (header.internalName === "time") {
                    return initRow[header.internalName as never]["unit"];
                  }
                  else {
                    return initRowFluid[header.internalName as never]["unit"];
                  }
                }
              }))}
              rows={tableRows}
              exportToExcel={resultType + "-" + props.calculation.ship.name}
              disableHover={true}
            ></StandardTable>
          </StStandardTable>
        </>
      }
    </StCalculationContainer>
  )
}

const StCalculationContainer = styled.div`
    width: 100%;
`;

const StCalculation = styled.div`
    min-width: 100px;
    padding: 0 10px;
    box-sizing: border-box;
    height: 140px;
    background-color: ${EColor.LIGHT_GREEN};
    margin: 0 3px 0 0;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    > span {
        width: 100%;
        text-align: center;
    }
`;

const StLinks = styled.div`
    width: 100%;
    margin: 20px 0 30px 0;
    font-size: 16px;
    > span {
        background-color: ${EColor.LIGHT_GRAY};
        padding: 10px 15px;
        cursor: pointer;
        text-decoration: underline;
        :hover {
            text-decoration: none;
        }
    }
`;

const StMoreResults = styled.div`
    width: 100%;
    float: left;
    span {
        font-size: 16px;
        font-weight: 500;
        color: ${EColor.GRAY};
        border-bottom: 2px solid ${EColor.LIGHT_GRAY};
        padding: 10px 15px;
        float: left;
        cursor: pointer;
        &.active {
            border-bottom: 2px solid ${EColor.GREEN};
            color: ${EColor.BLACK}
        }
        &:hover {
            background-color: ${EColor.LIGHT_GRAY};
        }
    }
    > p {
        font-size: 14px;
        line-height: 24px;
        color: ${EColor.BLACK};
        float: left;
        margin: 10px 0;
    }
`;

const StStandardTable = styled.div`
    margin: 0 0 30px 0;
    tbody tr:last-child {
        font-weight: bold;
    }
`;

export interface ICardResult {
  title: string;
  unit: any;
  initValue: any;
  endValue: any;
  fixed: number;
}