import { isFilled } from "./functions"

describe("Functions", ()=>{
    it("isFilled shall return false", () =>{
        expect(isFilled(null)).toEqual(false);
        expect(isFilled(undefined)).toEqual(false);
        expect(isFilled("")).toEqual(false);
    })
    it("isFilled shall return true", () =>{
        expect(isFilled(" ")).toEqual(true);
        expect(isFilled(0)).toEqual(true);
        expect(isFilled("abc")).toEqual(true);
        expect(isFilled(true)).toEqual(true);
        expect(isFilled(false)).toEqual(true);
    })
})