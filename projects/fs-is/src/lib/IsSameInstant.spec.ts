import { isSameInstant } from "./IsSameInstant";

describe("isSameInstant", () => {

  it(`should be true`, () => {
    expect(isSameInstant(new Date(5), new Date(5))).toBeTruthy()
    expect(isSameInstant(new Date(0), new Date(0))).toBeTruthy()
  })
  it(`should be false`, () => {
    expect(isSameInstant(new Date(3), new Date(4))).toBeFalsy()
    expect(isSameInstant(new Date(4), new Date(3))).toBeFalsy()
  })
})