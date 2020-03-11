import { isString } from "./IsString";

describe("isString", () => {
  it("should return true for string instances", () => {
    expect(isString(new Object('pitythefoo'))).toBeTruthy();
    expect(isString('pitythefoo')).toBeTruthy();
  });
  it("should return false for non String instances", () => {
    expect(isString({})).toBeFalsy();
    expect(isString([])).toBeFalsy();
    expect(isString(6)).toBeFalsy();
    expect(isString(undefined)).toBeFalsy();
    expect(isString(null)).toBeFalsy();
    expect(isString(NaN)).toBeFalsy();
    expect(isString(Infinity)).toBeFalsy();
    expect(isString(new Number(5))).toBeFalsy();
    expect(isString(true)).toBeFalsy();
    expect(isString(true)).toBeFalsy();
    expect(isString(false)).toBeFalsy();
    expect(isString(()=>{})).toBeFalsy();
    expect(isString(/x/g)).toBeFalsy();
    expect(isString(new RegExp('c', 'g'))).toBeFalsy();
    expect(isString(new Date())).toBeFalsy();
  });
});
