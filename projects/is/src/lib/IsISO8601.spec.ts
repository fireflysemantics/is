import { isISO8601 } from "./IsISO8601";

describe("isISBN", () => {
  it("should return true", () => {
    expect(isISO8601('2007-03-15T15:51:00')).toBeTruthy();
    expect(isISO8601('2007-03-15')).toBeTruthy();
  });
  it("should return false", () => {
    expect(isISO8601('0000.1.1.1.1.1')).toBeFalsy();
  });
});
