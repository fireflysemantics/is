import { isEmpty } from "./IsEmpty";

describe("isEmpty", () => {  
  it(`should return true for empty values`, () => {
    expect(isEmpty("")).toBeTruthy();
    expect(isEmpty(null)).toBeTruthy();
    expect(isEmpty(undefined)).toBeTruthy();
  });

  it(`should return false for non empty values`, () => {
    expect(isEmpty("Not empty")).toBeFalsy();
    expect(isEmpty(NaN)).toBeFalsy();
  });
});
