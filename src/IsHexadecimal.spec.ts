import { isHexadecimal } from "./IsHexaDecimal";

describe("isHexadecimal", () => {
  it("should return true", () => {
    expect(isHexadecimal('e')).toBeTruthy();
    expect(isHexadecimal('a')).toBeTruthy();
  });
  it("should return false", () => {
    expect(isHexadecimal('abcdefg')).toBeFalsy();
  });
});
