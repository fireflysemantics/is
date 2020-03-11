import { isHalfWidth } from "./IsHalfWidth";

describe("isHalfWidth", () => {
  it("should return true", () => {
    expect(isHalfWidth('東京都 新宿区 新宿')).toBeTruthy();
    expect(isHalfWidth('halfwidth')).toBeTruthy();
  });
  it("should return false", () => {
    expect(isHalfWidth('半角片仮名')).toBeFalsy();
  });
});
