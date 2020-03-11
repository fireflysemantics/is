import { isBase64 } from "./IsBase64";
const btoa = require('btoa');

describe("isAscii", () => {

  it(`should be true`, () => {
    expect(isBase64(btoa("2"))).toBeTruthy();
    expect(isBase64(btoa("@"))).toBeTruthy();
    expect(isBase64(btoa("&"))).toBeTruthy();
    expect(isBase64(btoa("$"))).toBeTruthy();
    expect(isBase64(btoa("+"))).toBeTruthy();
    expect(isBase64(btoa("-"))).toBeTruthy();
  });
  it(`should be false`, () => {
    expect(isBase64("我")).toBeFalsy();
  });
});
