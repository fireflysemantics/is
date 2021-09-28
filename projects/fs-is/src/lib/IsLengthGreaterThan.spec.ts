import { isLengthGreaterThan } from "./IsLengthGreaterThan";

describe("isLengthMoreThan", () => {
  it("should return true", () => {
    expect(isLengthGreaterThan('62db552dsfsadfasf4', 10)).toBeTruthy();
  });
  it("should return false", () => {
    expect(isLengthGreaterThan('4', 2)).toBeFalsy();
  });
});

