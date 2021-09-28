import { isBooleanString } from "./IsBooleanString";

describe("isBooleanString", () => {

  it(`should be true`, () => {
    expect(isBooleanString("true")).toBeTruthy();
    expect(isBooleanString("false")).toBeTruthy();
    expect(isBooleanString("1")).toBeTruthy();
    expect(isBooleanString("0")).toBeTruthy();
  });
  it(`should be false`, () => {
    expect(isBooleanString("10")).toBeFalsy();
    expect(isBooleanString("01")).toBeFalsy();
    expect(isBooleanString("TRUE")).toBeFalsy();
    expect(isBooleanString("FALSE")).toBeFalsy();
    expect(isBooleanString("falsetrue")).toBeFalsy();
  });
});
