import { isArrayContainerOf } from "./IsArrayContainerOf"

describe("isArrayContainerOf", () => {
  it("should return true", () => {
    expect(isArrayContainerOf([2,3,4], [2,3])).toBeTruthy();
    expect(isArrayContainerOf([null,undefined,4], [null,undefined])).toBeTruthy();
  });
  it("should return false", () => {
    expect(isArrayContainerOf([2,3,4], [2,3,4,1])).toBeFalsy();
    expect(isArrayContainerOf([{},{a: 1}, 4], [{}])).toBeFalsy();
  });
});
