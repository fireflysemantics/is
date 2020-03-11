import { isEqualTo } from "./IsEqualTo";

describe("isEqualTo", () => {

  const options = {};

  it("should return true for numbers that are valid", () => {
    expect(isEqualTo(options, options)).toBeTruthy();
  });
  it("should return false non numbers", () => {
    expect(isEqualTo(options, NaN)).toBeFalsy();
    expect(isEqualTo(options, Infinity)).toBeFalsy();
    expect(isEqualTo(options, -Infinity)).toBeFalsy();
  });
});
