import { isByteLength } from "./IsByteLength";

describe("isByteLength", () => {
  it("should return true for ISO Date String instances", () => {
    expect(isByteLength('abc', 1, 4)).toBeTruthy();
    expect(isByteLength('abc', 1, Infinity)).toBeTruthy();
  });
  it("should return false for non valid byte length strings", () => {
    expect(isByteLength('abc', 1, 2)).toBeFalsy();
  });
});
