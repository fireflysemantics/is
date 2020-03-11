import { isLessThan } from "./IsLessThan";

describe("isLessThan", () => {

  it(`should be false`, () => {
    expect(isLessThan(8, 6)).toBeFalsy();
    expect(isLessThan(5, 5)).toBeFalsy();
    expect(isLessThan(0, 0)).toBeFalsy();
  });
  it(`should be true`, () => {
    expect(isLessThan(3, 4)).toBeTruthy();
  });
});