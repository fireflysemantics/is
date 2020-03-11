import { isNotEqualTo } from "./IsNotEqualTo";

describe("isNotEqualTo", () => {

  const options = {};

  it("should return false for things that are equal", () => {
    expect(isNotEqualTo(options, options)).toBeFalsy();
  });

  it("should return true for things that are not equal", () => {
    expect(isNotEqualTo(options, NaN)).toBeTruthy();
    expect(isNotEqualTo(options, Infinity)).toBeTruthy();
    expect(isNotEqualTo(options, -Infinity)).toBeTruthy();
  });
});
