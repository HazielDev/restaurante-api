import { suma } from "./sum.js";

describe("API ENDPOINTS", ()=>{

    test("LA SUMA DE 2 y 3", ()=>{
        const result = suma(2,3);
        expect(result).toBe(5);
    })
});
