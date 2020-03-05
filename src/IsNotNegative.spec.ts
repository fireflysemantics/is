import { isNotNegative } from "./IsNotNegative";
const APPLICATION_ERROR_CODE = 'APPLICATION_ERROR_CODE';

describe("isNotNegative", () => {

  it(`should be positive`, () => {
    expect(isNotNegative(4)).toBeTruthy();
  });
  it(`should not be positive`, () => {
    expect(isNotNegative(-0)).toBeTruthy();
    expect(isNotNegative(0)).toBeTruthy();
    expect(isNotNegative(-1)).toBeFalsy();
  });
});

import { isNotNegativeError } from "./IsNotNegative"
import { IsError } from "./IsError"

describe("isNotNegativeError", () => {

  it(`should not throw`, () => {
    expect(()=>{isNotNegativeError(4, '', '')}).not.toThrow(IsError);
    expect(()=>{isNotNegativeError(0, '', '')}).not.toThrow(IsError);
    expect(()=>{isNotNegativeError(-0, '', '')}).not.toThrow(IsError);
    expect(()=>{isNotNegativeError(Infinity, '', '')}).not.toThrow(IsError);
  });
  it(`should throw`, () => {
    expect(()=>{isNotNegativeError(-0.000000001, '', '')}).toThrow(IsError);
    expect(()=>{isNotNegativeError(-1, '', '')}).toThrow(IsError);
    expect(()=>{isNotNegativeError(-Infinity, '', '')}).toThrow(IsError);
    expect(()=>{isNotNegativeError(-NaN, '', '')}).toThrow(IsError);
    expect(()=>{isNotNegativeError(NaN, '', '')}).toThrow(IsError);
    expect(()=>{isNotNegativeError('foo', '', '')}).toThrow(IsError);
  });

  try {
    isNotNegativeError(-1, 'test', APPLICATION_ERROR_CODE);
  }
  catch(e) {
    expect(e.message).toContain('test');
    expect(e.value).toEqual(-1);
    expect(e.field).toEqual('test');
    expect(e.type).toEqual('number');
    expect(e.constraint).toEqual('IsNotNegative');
    expect(e.code).toContain(APPLICATION_ERROR_CODE);
    expect(e.name).toEqual('IsError');
  }
});
