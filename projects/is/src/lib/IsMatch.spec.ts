import { isMatch } from "./IsMatch";

describe("isMatch", () => {
  it("should return true", () => {
    expect(isMatch('xyz', /xyz/)).toBeTruthy();
    expect(isMatch('xyz333', /xyz/)).toBeTruthy();
  });
  it("should return false", () => {
    expect(isMatch('XY', /xyz/)).toBeFalsy();
  });
});
