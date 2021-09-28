import { isUppercase } from "./IsUppercase";

describe("isUppercase", () => {
  it("should return true", () => {
    expect(isUppercase('UPPERCASE')).toBeTruthy();
  });
  it("should return false", () => {
    expect(isUppercase('uppercase')).toBeFalsy();
  });
});
