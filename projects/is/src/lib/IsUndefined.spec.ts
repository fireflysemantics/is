import { isUndefined } from "./IsUndefined";

describe("isUndefined", () => {
  it("should return true", () => {
    expect(isUndefined(undefined)).toBeTruthy();
    expect(isUndefined(null)).toBeTruthy();
  });
});
