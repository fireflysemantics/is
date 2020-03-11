import { isLowercase } from "./IsLowercase";

describe("isLowercase", () => {
  it("should return true", () => {
    expect(isLowercase('lowercase')).toBeTruthy();
  })
  it("should return false", () => {
    expect(isLowercase('LOWERCASE')).toBeFalsy();
  })
})
