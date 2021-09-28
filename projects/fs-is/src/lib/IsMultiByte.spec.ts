import { isMultibyte } from "./IsMultiByte";

describe("isMultibyte", () => {
  it("should return true", () => {
    expect(isMultibyte('がな・カタ')).toBeTruthy();
    expect(isMultibyte('email＠example.com')).toBeTruthy();
    expect(isMultibyte('ｘｙ34xxyyF')).toBeTruthy();
  });
  it("should return false", () => {
    expect(isMultibyte('abcdef')).toBeFalsy();
    expect(isMultibyte('424345')).toBeFalsy();
    expect(isMultibyte('123abc')).toBeFalsy();
    expect(isMultibyte('#$@!" *.')).toBeFalsy();
  });
});
