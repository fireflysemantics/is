import { isArrayNotContainerOf } from "./IsArrayNotContainerOf";

describe("isNotArrayContainerOf", () => {
  it("should return true", () => {
    expect(isArrayNotContainerOf([null,undefined,4], [3,2,null,undefined, NaN])).toBeTruthy();
  });
  it("should return false", () => {
    expect(isArrayNotContainerOf([2,3,4], [2,3,4,2,2])).toBeFalsy();
    expect(isArrayNotContainerOf([2,3,4,1], [4,1])).toBeFalsy();
  });
});
