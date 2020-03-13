import { isDivisibleBy } from "./IsDivisibleBy";

describe("isDivisibleBy", () => {

  it(`should be divisible by`, () => {
    expect(isDivisibleBy(4, 2)).toBeTruthy();
  });
  it(`should not be divisible by`, () => {
    expect(isDivisibleBy(5, 2)).toBeFalsy();
  });
});
