import { isNumber, IsNumberOptions } from "./IsNumber"

describe("isNumber", () => {

  const options:IsNumberOptions = { allowNaN: true, allowInfinity: true };

  it("should return true for numbers that are valid", () => {
    expect(isNumber(2)).toBeTruthy();
    expect(isNumber(NaN, options)).toBeTruthy();
    expect(isNumber(Infinity, options)).toBeTruthy();
    expect(isNumber(-Infinity, options)).toBeTruthy();
    expect(isNumber(Infinity)).toBeTruthy();
    expect(isNumber(-Infinity)).toBeTruthy();
  });

  it("should return false non numbers", () => {
    expect(isNumber(NaN)).toBeFalsy();
  });
});
