import { isArrayUnique } from "./IsArrayUnique";

describe("isArrayUnique", () => {
  it("should return true", () => {
    expect(isArrayUnique([2])).toBeTruthy();
    expect(isArrayUnique(['a'])).toBeTruthy();
    expect(isArrayUnique([null])).toBeTruthy();
    expect(isArrayUnique([undefined])).toBeTruthy();
  });
  it("should return false", () => {
    expect(isArrayUnique([1,1])).toBeFalsy();
    expect(isArrayUnique([null, null])).toBeFalsy();
    expect(isArrayUnique([undefined, undefined])).toBeFalsy();
  });
});


