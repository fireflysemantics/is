import { isDate } from "./IsDate";

describe("isDate", () => {
  it("should return true", () => {
    expect(isDate(new Date())).toBeTruthy();
    expect(isDate(new Date("12/22/1734"))).toBeTruthy();
  });
  it("should return false", () => {
    expect(isDate({})).toBeFalsy();
    expect(isDate([])).toBeFalsy();
    expect(isDate(6)).toBeFalsy();
    expect(isDate(undefined)).toBeFalsy();
    expect(isDate(null)).toBeFalsy();
    expect(isDate(true)).toBeFalsy();
    expect(isDate(false)).toBeFalsy();
    expect(isDate('fooboo')).toBeFalsy();
    expect(isDate(()=>{})).toBeFalsy();
    expect(isDate(/x/g)).toBeFalsy();
    expect(isDate(new RegExp('c', 'g'))).toBeFalsy();
  });
});
