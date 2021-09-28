import { isFQDN } from "./IsFQDN";

describe("isFQDN", () => {
  it("should return true", () => {
    expect(isFQDN('aol.com')).toBeTruthy();
  });
  it("should return false", () => {
    expect(isFQDN('joe')).toBeFalsy();
  });
});

