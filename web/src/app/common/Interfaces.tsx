//1 Ship
export interface IShip {
    id?: string,
    country: string,
    name: string,
    createdDate?: string
}

//2 Liquid
export interface IFluid {
    nitrogen: IMetric,
    methane: IMetric,
    ethane: IMetric,
    propane: IMetric,
    iButane: IMetric,
    nButane: IMetric,
    iPentane: IMetric,
    nPentane: IMetric,
    nHexane: IMetric,
}

export interface IMetric {
    value: number,
    unit: string,
}

//3 Transport
export interface ITransport {
    volume: number,
    pressure: number,
    boilOffRate: number,
    fromDate: string,
    toDate: string
}

//4 Standard
export interface IStandard {
    combustionTemperature: number | null,
    measurementTemperature: number | null,
    idealGasReferenceState: boolean
}

//Result
export interface IResult {
    id?: string;
    density: IMetric;
    energy: IMetric;
    gcv: IMetric;
    gcvmass: IMetric;
    temp: IMetric;
    time: IMetric;
    volume: IMetric;
    wi: IMetric;
    xmethane: IMetric;
    xethane: IMetric;
    xpropane: IMetric;
    xic4: IMetric;
    xnc4: IMetric;
    xic5: IMetric;
    xnc5: IMetric;
    xnc6: IMetric;
    xnitrogen: IMetric;
    ymethane: IMetric;
    yethane: IMetric;
    ypropane: IMetric;
    yic4: IMetric;
    ync4: IMetric;
    yic5: IMetric;
    ync5: IMetric;
    ync6: IMetric;
    ynitrogen: IMetric;
}

//Calculation
export interface ICalculation {
    id: string,
    ship: IShip,
    fluid: IFluid,
    transport: ITransport,
    standard: IStandard,
    result: IResult[],
    createdDate?: string
  }