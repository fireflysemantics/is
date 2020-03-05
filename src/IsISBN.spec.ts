import { isISBN } from "./IsISBN";

describe("isISBN", () => {
  it("should return true", () => {
    expect(isISBN('978-3-16-148410-0')).toBeTruthy();
  });
  it("should return false", () => {
    expect(isISBN('0000.1.1.1.1.1')).toBeFalsy();
  });
});

