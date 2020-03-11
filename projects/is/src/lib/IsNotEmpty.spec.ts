import { isNotEmpty } from "./IsNotEmpty";

describe("isNotEmpty", () => {  
  it(`should return true for non empty values`, () => {
    expect(isNotEmpty("Not empty")).toBeTruthy();
    expect(isNotEmpty(NaN)).toBeTruthy();
  });

  it(`should return false for empty values`, () => {
    expect(isNotEmpty("")).toBeFalsy();
    expect(isNotEmpty(null)).toBeFalsy();
    expect(isNotEmpty(undefined)).toBeFalsy();
  });
});

