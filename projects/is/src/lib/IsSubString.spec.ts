import { isSubString } from "./IsSubString";

describe("isSubString", () => {

  it(`should be true`, () => {
    expect(isSubString("2", "22")).toBeTruthy();
    expect(isSubString("foo", "fooboo")).toBeTruthy();
  });
  it(`should be false`, () => {
    expect(isSubString("TRUE", "FALSE")).toBeFalsy();
    expect(isSubString("3", "2")).toBeFalsy();
  });
});

