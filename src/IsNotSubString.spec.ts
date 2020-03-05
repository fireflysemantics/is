import { isNotSubString } from "./IsNotSubstring";

describe("isNotSubString", () => {

  it(`should be true`, () => {
    expect(isNotSubString("TRUE", "FALSE")).toBeTruthy();
    expect(isNotSubString("3", "2")).toBeTruthy();
  })
  it(`should be false`, () => {
    expect(isNotSubString("2", "22")).toBeFalsy();
    expect(isNotSubString("foo", "fooboo")).toBeFalsy();
  })
});
