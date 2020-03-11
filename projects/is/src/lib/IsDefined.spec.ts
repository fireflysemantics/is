import { isDefined } from "./IsDefined";

describe("isDefined", () => {
  it("should return true", () => {
    expect(isDefined({})).toBeTruthy();
    expect(isDefined("foo")).toBeTruthy();
    expect(isDefined("")).toBeTruthy();
    expect(isDefined(0)).toBeTruthy();
    expect(isDefined(-0)).toBeTruthy();
    expect(isDefined(Infinity)).toBeTruthy();
    expect(isDefined(-Infinity)).toBeTruthy();
    expect(isDefined(NaN)).toBeTruthy();
    expect(isDefined(new Date())).toBeTruthy();
  });
  it("should return false", () => {
    expect(isDefined(undefined)).toBeFalsy();
    expect(isDefined(null)).toBeFalsy();
  });
});

