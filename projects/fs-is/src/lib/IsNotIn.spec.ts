import { isNotIn } from "./IsNotIn";

describe("isNotIn", () => {

  it(`should return false when the value is in the array`, () => {
    expect(isNotIn(2, [2])).toBeFalsy();
    expect(isNotIn('a', ['a', 'b'])).toBeFalsy();
    expect(isNotIn('a', ['a'])).toBeFalsy();
    expect(isNotIn([2,3], [[2,3]])).toBeFalsy();
  });
  it(`should return true when the value is not in the array`, () => {
    expect(isNotIn('a', ['b'])).toBeTruthy();
    expect(isNotIn([2,4], [[2,3]])).toBeTruthy();
  });
});
