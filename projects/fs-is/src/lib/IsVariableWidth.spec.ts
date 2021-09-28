import { isVariableWidth } from "./IsVariableWidth";

describe("isVariableWidth", () => {
  it("should return true", () => {
    expect(isVariableWidth('xyzひらが字')).toBeTruthy();
    expect(isVariableWidth('234abc３ー０')).toBeTruthy();
  });
  it("should return false", () => {
    expect(isVariableWidth('半角片仮名')).toBeFalsy();
  });
});
