import { isArray } from "./IsArray";

describe("isArray", () => {
  it("should return true", () => {
    expect(isArray([2])).toBeTruthy();
    expect(isArray(['a'])).toBeTruthy();
  });
  it("should return true", () => {
    expect(isArray("a")).toBeFalsy();
    expect(isArray(1)).toBeFalsy();
  });
});
