import { isAlphaNumeric } from "./IsAlphaNumeric"

describe("isAlphaNumeric", () => {

  it(`should be true`, () => {
    expect(isAlphaNumeric("a")).toBeTruthy();
    expect(isAlphaNumeric("B")).toBeTruthy();
    expect(isAlphaNumeric("2")).toBeTruthy();
  });
  it(`should be false`, () => {
    expect(isAlphaNumeric("我")).toBeFalsy();
    expect(isAlphaNumeric("$")).toBeFalsy();
    expect(isAlphaNumeric("&")).toBeFalsy();
    expect(isAlphaNumeric("@")).toBeFalsy();
    expect(isAlphaNumeric("!")).toBeFalsy();
  });
});
