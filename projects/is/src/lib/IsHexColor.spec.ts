import { isHexColor } from "./IsHexColor";

describe("isHexColor", () => {
  it("should return true", () => {
    expect(isHexColor('#ff0022')).toBeTruthy();
    expect(isHexColor('#BBBBBB')).toBeTruthy();
    expect(isHexColor('fff')).toBeTruthy();
    expect(isHexColor('ccc')).toBeTruthy();
    expect(isHexColor('#f00')).toBeTruthy();
  });
  it("should return false", () => {
    expect(isHexColor('#ff12FG')).toBeFalsy();
    expect(isHexColor('ccc00')).toBeFalsy();
  });
});
