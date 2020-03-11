import { isIP } from "./IsIP";

describe("isIP", () => {
  it("should return true", () => {
    expect(isIP('127.0.0.1')).toBeTruthy();
    expect(isIP('2.2.2.2')).toBeTruthy();
    expect(isIP('255.255.255.255')).toBeTruthy();
  });
  it("should return false", () => {
    expect(isIP('0000.1.1.1.1.1')).toBeFalsy();
  });
});

