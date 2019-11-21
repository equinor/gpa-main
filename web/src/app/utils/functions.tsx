import { IResult } from "../common/Interfaces";
import { ILiquid } from "../components/content/calculator/LiquidSection";

// check filled input
export function isFilled(val: any) {
    if (val === null || val === "" || typeof val === "undefined" || Number.isNaN(val)) {
        return false;
    }
    else {
        return true;
    }
}

// calculate precision sum (used in output)
export function getPrecisionSumLiquid(result: IResult, type: "gas" | "fluid") {
    let fluid: any = {};
    if (type === "gas") {
        fluid = result["gas"];
    }
    else if (type === "fluid") {
        fluid = result["liquid"];
    }
    var precision = 10000000000000;
    return (fluid.nitrogen.value * precision +
        fluid.methane.value * precision +
        fluid.ethane.value * precision +
        fluid.propane.value * precision +
        fluid.iButane.value * precision +
        fluid.nButane.value * precision +
        fluid.iPentane.value * precision +
        fluid.nPentane.value * precision +
        fluid.nHexane.value * precision
    ) / precision;
}

// calculate precision liquid sum (used in input)
export function getPrecisionSumLiquidInput(liquid: ILiquid) {
    var precision = 1000000;
    return (
        liquid.nitrogen * precision +
        liquid.methane * precision +
        liquid.ethane * precision +
        liquid.propane * precision +
        liquid.iButane * precision +
        liquid.nButane * precision +
        liquid.iPentane * precision +
        liquid.nPentane * precision +
        liquid.nHexane * precision
    ) / precision;
}