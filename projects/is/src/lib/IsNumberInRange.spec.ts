import { isNumberInRange } from "./IsNumberInRange";

const APPLICATION_ERROR_CODE = 'APPLICATION_ERROR_CODE';


describe("isNumberInRange", () => {
  it("should be truthy", () => {
    expect(isNumberInRange(1,0,1)).toBeTruthy();
    expect(isNumberInRange(0,0,1)).toBeTruthy();
  });

  it("should be falsy", () => {
    expect(isNumberInRange(2,0,1)).toBeFalsy();
    expect(isNumberInRange(1,0,0)).toBeFalsy();
    expect(isNumberInRange(-1,0,1)).toBeFalsy();
  });
});


import { isNumberInRangeError } from "./IsNumberInRange";

describe("isNumberInRangeError", () => {
  try {
    isNumberInRangeError(1, 0, 0, 'boo', APPLICATION_ERROR_CODE);
  }
  catch(e) {
    expect(e.message).toContain('boo');
    expect(e.value).toEqual(1);
    expect(e.field).toEqual('boo');
    expect(e.type).toEqual('number');
    expect(e.constraint).toEqual('IsNumberInRange');
    expect(e.code).toContain(APPLICATION_ERROR_CODE);
    expect(e.name).toEqual('IsError');
  }

  it("should not throw", () => {
    expect(()=>{isNumberInRangeError(1,0,1, '', '')}).not.toThrow();
    expect(()=>{isNumberInRangeError(0,0,1, '', '')}).not.toThrow();
  });

  it("should be falsy", () => {
    expect(()=>{isNumberInRangeError(2,0,1, 'boo', APPLICATION_ERROR_CODE)}).toThrow();
    expect(()=>{isNumberInRangeError(1,0,0, 'boo', APPLICATION_ERROR_CODE)}).toThrow();
    expect(()=>{isNumberInRangeError(-1,0,1, 'boo', APPLICATION_ERROR_CODE)}).toThrow();
  });
});
