import { isBeforeInstant } from "./IsBeforeInstant";

describe("isBeforeInstant", () => {

  it(`should be false`, () => {
    expect(isBeforeInstant(new Date(8), new Date(6))).toBeFalsy();
    expect(isBeforeInstant(new Date(5), new Date(5))).toBeFalsy();
    expect(isBeforeInstant(new Date(0), new Date(0))).toBeFalsy();
  });
  it(`should be true`, () => {
    expect(isBeforeInstant(new Date(3), new Date(4))).toBeTruthy();
  });
});
