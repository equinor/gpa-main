import { isFilled, getPrecisionSumLiquid, getPrecisionSumLiquidInput } from "./functions"

describe("Functions", () => {
    it("isFilled shall return false", () => {
        expect(isFilled(null)).toEqual(false);
        expect(isFilled(undefined)).toEqual(false);
        expect(isFilled("")).toEqual(false);
        expect(isFilled(NaN)).toEqual(false);
    })
    it("isFilled shall return true", () => {
        expect(isFilled(" ")).toEqual(true);
        expect(isFilled(0)).toEqual(true);
        expect(isFilled("abc")).toEqual(true);
        expect(isFilled(true)).toEqual(true);
        expect(isFilled(false)).toEqual(true);
    })
    it("getPrecisionSumLiquid", () => {
        let a: any;
        expect(getPrecisionSumLiquid({
            density: a,
            energy: a,
            gcv: a,
            gcvmass: a,
            temp: a,
            time: a,
            volume: a,
            wi: a,
            liquid: a,
            gas: {
                nitrogen: {
                    value: 0.01,
                    unit: a,
                },
                methane: {
                    value: 0.01,
                    unit: a,
                },
                ethane: {
                    value: 0.01,
                    unit: a,
                },
                propane: {
                    value: 0.01,
                    unit: a,
                },
                iButane: {
                    value: 0.01,
                    unit: a,
                },
                nButane: {
                    value: 0.01,
                    unit: a,
                },
                iPentane: {
                    value: 0.01,
                    unit: a,
                },
                nPentane: {
                    value: 0.01,
                    unit: a,
                },
                nHexane: {
                    value: 0.01,
                    unit: a,
                },
            }
        }, "gas")).toEqual(0.09);
    })

    it("getPrecisionSumLiquidInput", ()=>{
        expect(getPrecisionSumLiquidInput({
            nitrogen: 0.001,
            methane: 0.001,
            ethane: 0.001,
            propane: 0.001,
            iButane: 0.001,
            nButane: 0.001,
            iPentane: 0.001,
            nPentane: 0.001,
            nHexane: 0.001,
        })).toEqual(0.009);
    })
})