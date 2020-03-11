import { isIn } from "./IsIn";

describe("isIn", () => {

  it(`should return true when the value is in the array`, () => {
    expect(isIn(null, [null])).toBeTruthy();
    expect(isIn(undefined, [undefined])).toBeTruthy();
    expect(isIn(2, [2])).toBeTruthy();
    expect(isIn('a', ['a', 'b'])).toBeTruthy();
    expect(isIn('a', ['a'])).toBeTruthy();
    expect(isIn([2,3], [[2,3]])).toBeTruthy();
  });
  it(`should return false when the value is not in the array`, () => {
    expect(isIn('a', ['b'])).toBeFalsy();
    expect(isIn([2,4], [[2,3]])).toBeFalsy();
  });
});
