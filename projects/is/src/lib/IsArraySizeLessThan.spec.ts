import { isArraySizeLessThan } from "./IsArraySizeLessThan";

describe("isArraySizeLessThan", () => {
  it("should return true", () => {
    expect(isArraySizeLessThan([2], 2)).toBeTruthy();
    expect(isArraySizeLessThan(['a'], 2)).toBeTruthy();
  });
  it("should return false", () => {
    expect(isArraySizeLessThan([1], 1)).toBeFalsy();
  });
});
