import { isSurrogatePair } from "./IsSurrogatePair";

describe("isSurrogatePair", () => {
  it("should return true", () => {
    expect(isSurrogatePair('𩸽')).toBeTruthy();
    expect(isSurrogatePair('AB𥧄1-2')).toBeTruthy();
    expect(isSurrogatePair('野𠮷')).toBeTruthy();
  });
  it("should return false", () => {
    expect(isSurrogatePair('AB1-2')).toBeFalsy();
    expect(isSurrogatePair('野')).toBeFalsy();
  });
});

