import { isSuperString } from "./IsSuperString";

describe("isSuperString", () => {

  it(`should be true`, () => {
    expect(isSuperString("22", "2")).toBeTruthy();
    expect(isSuperString("fooboo", "foo")).toBeTruthy();
  });
  it(`should be false`, () => {
    expect(isSuperString("TRUE", "FALSE")).toBeFalsy();
    expect(isSuperString("33", "2")).toBeFalsy();
  });
});
