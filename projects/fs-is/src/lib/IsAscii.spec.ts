import { isAscii } from "./IsAscii";

describe("isAscii", () => {

  it(`should be true`, () => {
    expect(isAscii("2")).toBeTruthy();
    expect(isAscii("@")).toBeTruthy();
    expect(isAscii("&")).toBeTruthy();
    expect(isAscii("$")).toBeTruthy();
    expect(isAscii("+")).toBeTruthy();
    expect(isAscii("-")).toBeTruthy();
  });
  it(`should be false`, () => {
    expect(isAscii("我")).toBeFalsy();
  });
});
