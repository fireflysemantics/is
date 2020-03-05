import { isNegative } from "./IsNegative";

describe("isNegative", () => {
  it(`should be divisible by`, () => {
    expect(isNegative(4)).toBeFalsy();
  });
  it(`should not be divisible by`, () => {
    expect(isNegative(-0)).toBeTruthy();
    expect(isNegative(0)).toBeTruthy();
    expect(isNegative(-5)).toBeTruthy();
  });
});