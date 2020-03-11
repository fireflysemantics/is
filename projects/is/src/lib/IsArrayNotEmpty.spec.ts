import { isArrayNotEmpty } from "./IsArrayNotEmpty";

describe("isArrayNotEmpty", () => {
  it("should return true", () => {
    expect(isArrayNotEmpty([2])).toBeTruthy();
    expect(isArrayNotEmpty(['a'])).toBeTruthy();
  });
  it("should return false", () => {
    expect(isArrayNotEmpty([])).toBeFalsy();
  });
});
