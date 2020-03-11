import { isObject } from "./IsObject";

describe("isObject", () => {
  
  const one = { one: 1};
  const two = { two: "2" };

  it(`should return true`, () => {
    expect(isObject(one)).toBeTruthy();
    expect(isObject(two)).toBeTruthy();
  });
  it(`should return false`, () => {
    expect(isObject(1)).toBeFalsy();
    expect(isObject("a")).toBeFalsy();
    expect(isObject(()=>{})).toBeFalsy();
    expect(isObject(NaN)).toBeFalsy();
    expect(isObject(undefined)).toBeFalsy();
    expect(isObject(null)).toBeFalsy();
  });
})