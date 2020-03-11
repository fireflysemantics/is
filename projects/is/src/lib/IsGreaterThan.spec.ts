import { isGreaterThanError } from "./IsGreaterThan";
const APPLICATION_ERROR_CODE = 'APPLICATION_ERROR_CODE';

describe("isGreaterThanError", () => {
  try {
    isGreaterThanError(0, 1, 'boo', APPLICATION_ERROR_CODE);
  }
  catch(e) {
    expect(e.message).toContain('boo');
    expect(e.value).toEqual(0);
    expect(e.field).toEqual('boo');
    expect(e.type).toEqual('number');
    expect(e.constraint).toEqual('IsGreaterThan');
    expect(e.code).toContain(APPLICATION_ERROR_CODE);
    expect(e.name).toEqual('IsError');
  }
});

import { isGreaterThan } from "./IsGreaterThan";

describe("isGreaterThan", () => {

  it(`should be true`, () => {
    expect(isGreaterThan(8, 6)).toBeTruthy();
  });
  it(`should be false`, () => {
    expect(isGreaterThan(5, 5)).toBeFalsy();
    expect(isGreaterThan(0, 0)).toBeFalsy();
    expect(isGreaterThan(3, 4)).toBeFalsy();
  });
});

