import { isISODateString } from "./IsISODateString";

describe("isISODateString", () => {
  it("should return true for ISO Date String instances", () => {
    expect(isISODateString(new Object('2018-06-04T12:33:00.000Z'))).toBeTruthy();
    expect(isISODateString(new Date('2018-06-04T12:33:00.000Z').toISOString())).toBeTruthy();
    expect(isISODateString(new Date().toISOString())).toBeTruthy();
  });
  it("should return false for non ISO Date String instances", () => {
    expect(isISODateString({})).toBeFalsy();
    expect(isISODateString([])).toBeFalsy();
    expect(isISODateString(6)).toBeFalsy();
    expect(isISODateString(undefined)).toBeFalsy();
    expect(isISODateString(null)).toBeFalsy();
    expect(isISODateString(NaN)).toBeFalsy();
    expect(isISODateString(Infinity)).toBeFalsy();
    expect(isISODateString(new Number(5))).toBeFalsy();
    expect(isISODateString(true)).toBeFalsy();
    expect(isISODateString(true)).toBeFalsy();
    expect(isISODateString(false)).toBeFalsy();
    expect(isISODateString(()=>{})).toBeFalsy();
    expect(isISODateString(/x/g)).toBeFalsy();
    expect(isISODateString(new RegExp('c', 'g'))).toBeFalsy();
    expect(isISODateString(new Date())).toBeFalsy();
  });
});
