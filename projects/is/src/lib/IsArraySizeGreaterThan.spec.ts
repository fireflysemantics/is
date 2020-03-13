import { isArraySizeGreaterThan } from "./IsArraySizeGreaterThan"

describe("isArraySizeGreaterThan", () => {
  it("should return true", () => {
    expect(isArraySizeGreaterThan([2], 0)).toBeTruthy()
    expect(isArraySizeGreaterThan(['a'], 0)).toBeTruthy()
  })
  it("should return false", () => {
    expect(isArraySizeGreaterThan([], 0)).toBeFalsy()
  })
})