import { isAlpha } from "./IsAlpha";

describe("isAlpha", () => {

  it(`should be true`, () => {
    expect(isAlpha("a")).toBeTruthy();
    expect(isAlpha("B")).toBeTruthy();
  });
  it(`should be false`, () => {
    expect(isAlpha("2")).toBeFalsy();
    expect(isAlpha("我")).toBeFalsy();
  });
});
