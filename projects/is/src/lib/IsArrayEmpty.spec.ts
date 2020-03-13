import { isArrayEmpty } from "./IsArrayEmpty";

describe("isArrayEmpty", () => {
  it("should return true", () => {
    expect(isArrayEmpty([])).toBeTruthy();
  });
  it("should return false", () => {
    expect(isArrayEmpty([2])).toBeFalsy();
    expect(isArrayEmpty(['a'])).toBeFalsy();
  });
});
