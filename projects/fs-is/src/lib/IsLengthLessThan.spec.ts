import { isLengthLessThan } from "./IsLengthLessThan"

describe("isLengthLessThan", () => {
  it("should return true", () => {
    expect(isLengthLessThan('62db5524', 10)).toBeTruthy();
  })
  it("should return false", () => {
    expect(isLengthLessThan('424345', 2)).toBeFalsy();
  })
})