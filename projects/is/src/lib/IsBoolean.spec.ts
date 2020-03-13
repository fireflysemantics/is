import { isBoolean, isBooleanError } from "./IsBoolean";
import { IsError } from './IsError'

describe("isBoolean", () => {
  it("should return true", () => {
    expect(isBoolean(true)).toBeTruthy();
    expect(isBoolean(false)).toBeTruthy();
    expect(isBoolean(new Boolean("True"))).toBeTruthy();
    expect(isBoolean(new Boolean("False"))).toBeTruthy();
    expect(isBoolean(new Boolean(0))).toBeTruthy();
    expect(isBoolean(new Boolean(1))).toBeTruthy();
  });

  it("should return false", () => {
    expect(isBoolean({})).toBeFalsy();
    expect(isBoolean("foo")).toBeFalsy();
    expect(isBoolean("")).toBeFalsy();
    expect(isBoolean(0)).toBeFalsy();
    expect(isBoolean(-0)).toBeFalsy();
    expect(isBoolean(1)).toBeFalsy();
    expect(isBoolean(-1)).toBeFalsy();
    expect(isBoolean(Infinity)).toBeFalsy();
    expect(isBoolean(-Infinity)).toBeFalsy();
    expect(isBoolean(NaN)).toBeFalsy();
    expect(isBoolean(new Date())).toBeFalsy();
  });
});

describe("isBooleanError", () => {
  it("should not throw", () => {

    try {
      isBooleanError('foo', 'boo', 'APPLICATION_ERROR_CODE');
    }
    catch(e) {
      expect(e.message).toContain('boo');
      expect(e.value).toEqual('foo');
      expect(e.field).toEqual('boo');
      expect(e.type).toEqual('boolean');
      expect(e.constraint).toEqual('IsBoolean');
      expect(e.code).toContain('APPLICATION_ERROR_CODE');
      expect(e.name).toEqual('IsError');
    }
    
    expect(()=>{isBooleanError(true, '')}).not.toThrow(IsError);
    expect(()=>{isBooleanError(false, '')}).not.toThrow(IsError);
    expect(()=>{isBooleanError(new Boolean("True"), '')}).not.toThrow(IsError);
    expect(()=>{isBooleanError(new Boolean("False"), '')}).not.toThrow(IsError);
    expect(()=>{isBooleanError(new Boolean(0), '')}).not.toThrow(IsError);
    expect(()=>{isBooleanError(new Boolean(1), '')}).not.toThrow(IsError);
  });

  it("should throw", () => {
    expect(()=>{isBooleanError({}, '')}).toThrow(IsError);
    expect(()=>{isBooleanError("foo", '')}).toThrow(IsError);
    expect(()=>{isBooleanError("", '')}).toThrow(IsError);
    expect(()=>{isBooleanError(0, '')}).toThrow(IsError);
    expect(()=>{isBooleanError(-0, '')}).toThrow(IsError);
    expect(()=>{isBooleanError(Infinity, '')}).toThrow(IsError);
    expect(()=>{isBooleanError(-Infinity, '')}).toThrow(IsError);
    expect(()=>{isBooleanError(NaN, '')}).toThrow(IsError);
    expect(()=>{isBooleanError(-NaN, '')}).toThrow(IsError);
    expect(()=>{isBooleanError(new Date(), '')}).toThrow(IsError);
  });
});

