import { isURL } from "./IsURL";

describe("isURL", () => {
  it("should return true", () => {
    expect(isURL('norway.no')).toBeTruthy();
    expect(isURL('http://snafu.com?bar=foo')).toBeTruthy();
  });
  it("should return false", () => {
    expect(isURL('.no')).toBeFalsy();
    expect(isURL('invalid://country.no')).toBeFalsy();
  });
});
