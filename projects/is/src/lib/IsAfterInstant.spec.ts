import { isAfterInstant } from "./IsAfterInstant";

describe("isAfterInstant", () => {

  it(`should be true`, () => {
    expect(isAfterInstant(new Date(8), new Date(6))).toBeTruthy();
  });
  it(`should be false`, () => {
    expect(isAfterInstant(new Date(5), new Date(5))).toBeFalsy();
    expect(isAfterInstant(new Date(0), new Date(0))).toBeFalsy();
    expect(isAfterInstant(new Date(3), new Date(4))).toBeFalsy();
  });
});
