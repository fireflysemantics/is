
import { isPositive } from "./IsPositive"
const APPLICATION_ERROR_CODE = 'APPLICATION_ERROR_CODE'

describe("isPositive", () => {

  it(`should be positive`, () => {
    expect(isPositive(4)).toBeTruthy();
  });
  it(`should not be positive`, () => {
    expect(isPositive(-0)).toBeFalsy();
    expect(isPositive(0)).toBeFalsy();
    expect(isPositive(-5)).toBeFalsy();
  });
});

import { isPositiveError } from "./IsPositive";

describe("isPositiveError", () => {
  try {
    isPositiveError(-1, 'boo', APPLICATION_ERROR_CODE);
  }
  catch(e) {
    expect(e.message).toContain('boo');
    expect(e.value).toEqual(-1);
    expect(e.field).toEqual('boo');
    expect(e.type).toEqual('number');
    expect(e.constraint).toEqual('IsPositive');
    expect(e.code).toContain(APPLICATION_ERROR_CODE);
    expect(e.name).toEqual('IsError');
  }
});
