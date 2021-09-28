import { isEmail } from "./IsEmail";

describe("isEmail", () => {
  it("should return true", () => {
    expect(isEmail('joe@aol.com')).toBeTruthy();
  });
  it("should return false", () => {
    expect(isEmail('joe@aol')).toBeFalsy();
  });
});
