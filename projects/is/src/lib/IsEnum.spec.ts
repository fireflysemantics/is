import { isEnum } from "./IsEnum";

describe("isEnum", () => {
  
  const one = { one: 1};
  const two = { two: 2 };

  it(`should return true`, () => {
    expect(isEnum(1, one)).toBeTruthy();
  });
  it(`should return false`, () => {
    expect(isEnum(1, two)).toBeFalsy();
  });
});
