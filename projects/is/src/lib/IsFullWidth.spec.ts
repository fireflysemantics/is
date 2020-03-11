import { isFullWidth } from "./IsFullWidth";

describe("isFullWidth", () => {
  it("should return true", () => {
    expect(isFullWidth('全角')).toBeTruthy();
    expect(isFullWidth('半角片仮名')).toBeTruthy();
  });
  it("should return false", () => {
    expect(isFullWidth('fullwidth')).toBeFalsy();
  });
});
