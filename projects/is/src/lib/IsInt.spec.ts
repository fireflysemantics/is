import { isInt } from "./IsInt";

describe("isInt", () => {

  it("should return true for numbers that are valid", () => {
    expect(isInt(2)).toBeTruthy();
  });
  it("should return false non numbers", () => {
    expect(isInt(NaN)).toBeFalsy();
    expect(isInt(Infinity)).toBeFalsy();
    expect(isInt(-Infinity)).toBeFalsy();
  });
});
