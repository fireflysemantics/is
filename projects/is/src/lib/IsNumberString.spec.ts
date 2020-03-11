import { isNumberString } from "./IsNumberString";
import { IsNumberOptions } from './IsNumber'

const options:IsNumberOptions = { allowNaN: true, allowInfinity: true };

describe("isNumberString", () => {

  it(`should be true`, () => {
    expect(isNumberString("2")).toBeTruthy();
    expect(isNumberString("0")).toBeTruthy();
    expect(isNumberString("10")).toBeTruthy();
    expect(isNumberString("01")).toBeTruthy();
    expect(isNumberString("Infinity", options)).toBeTruthy();
    expect(isNumberString("NaN", options)).toBeTruthy();
  });
  it(`should be false`, () => {
    expect(isNumberString("TRUE")).toBeFalsy();
    expect(isNumberString("FALSE")).toBeFalsy();
    expect(isNumberString("falsetrue")).toBeFalsy();
    expect(isNumberString("Infinity")).toBeFalsy();
    expect(isNumberString("NaN")).toBeFalsy();
  });
});
