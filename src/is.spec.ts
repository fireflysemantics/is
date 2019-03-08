/**
 * Jest Unit tests.
 */
import { IsError } from "@fs/is";

import { isNumberInRange } from "@fs/is";

const APPLICATION_ERROR_CODE = 'APPLICATION_ERROR_CODE';

it("should be an instance of IsError", () => {
  let error = new IsError("This is an IsError", 'value');
  expect(error instanceof IsError).toBeTruthy();
});


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

import { isNumberInRangeError } from "@fs/is";

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

import { isBoolean } from "@fs/is";

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

import { isBooleanError } from "@fs/is";

describe("isBooleanError", () => {
  it("should not throw", () => {

    try {
      isBooleanError('foo', 'boo', 'APPLICATION_ERROR_CODE');
    }
    catch(e) {
      expect(e.message).toContain('boo');
      expect(e.value).toEqual('foo');
      expect(e.field).toEqual('boo');
      expect(e.type).toEqual('Boolean');
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

import { isArray } from "@fs/is";

describe("isArray", () => {
  it("should return true", () => {
    expect(isArray([2])).toBeTruthy();
    expect(isArray(['a'])).toBeTruthy();
  });
  it("should return true", () => {
    expect(isArray("a")).toBeFalsy();
    expect(isArray(1)).toBeFalsy();
  });
});

import { isArrayEmpty } from "@fs/is";

describe("isArrayEmpty", () => {
  it("should return true", () => {
    expect(isArrayEmpty([])).toBeTruthy();
  });
  it("should return false", () => {
    expect(isArrayEmpty([2])).toBeFalsy();
    expect(isArrayEmpty(['a'])).toBeFalsy();
  });
});

import { isDefined } from "@fs/is";

describe("isDefined", () => {
  it("should return true", () => {
    expect(isDefined({})).toBeTruthy();
    expect(isDefined("foo")).toBeTruthy();
    expect(isDefined("")).toBeTruthy();
    expect(isDefined(0)).toBeTruthy();
    expect(isDefined(-0)).toBeTruthy();
    expect(isDefined(Infinity)).toBeTruthy();
    expect(isDefined(-Infinity)).toBeTruthy();
    expect(isDefined(NaN)).toBeTruthy();
    expect(isDefined(new Date())).toBeTruthy();
  });
  it("should return false", () => {
    expect(isDefined(undefined)).toBeFalsy();
    expect(isDefined(null)).toBeFalsy();
  });
});

import { isUndefined } from "@fs/is";

describe("isUndefined", () => {
  it("should return true", () => {
    expect(isUndefined(undefined)).toBeTruthy();
    expect(isUndefined(null)).toBeTruthy();
  });
});

import { isDate } from "@fs/is";

describe("isDate", () => {
  it("should return true", () => {
    expect(isDate(new Date())).toBeTruthy();
    expect(isDate(new Date("12/22/1734"))).toBeTruthy();
  });
  it("should return false", () => {
    expect(isDate({})).toBeFalsy();
    expect(isDate([])).toBeFalsy();
    expect(isDate(6)).toBeFalsy();
    expect(isDate(undefined)).toBeFalsy();
    expect(isDate(null)).toBeFalsy();
    expect(isDate(true)).toBeFalsy();
    expect(isDate(false)).toBeFalsy();
    expect(isDate('fooboo')).toBeFalsy();
    expect(isDate(()=>{})).toBeFalsy();
    expect(isDate(/x/g)).toBeFalsy();
    expect(isDate(new RegExp('c', 'g'))).toBeFalsy();
  });
});

import { isString } from "@fs/is";

describe("isString", () => {
  it("should return true for string instances", () => {
    expect(isString(new Object('pitythefoo'))).toBeTruthy();
    expect(isString('pitythefoo')).toBeTruthy();
  });
  it("should return false for non String instances", () => {
    expect(isString({})).toBeFalsy();
    expect(isString([])).toBeFalsy();
    expect(isString(6)).toBeFalsy();
    expect(isString(undefined)).toBeFalsy();
    expect(isString(null)).toBeFalsy();
    expect(isString(NaN)).toBeFalsy();
    expect(isString(Infinity)).toBeFalsy();
    expect(isString(new Number(5))).toBeFalsy();
    expect(isString(true)).toBeFalsy();
    expect(isString(true)).toBeFalsy();
    expect(isString(false)).toBeFalsy();
    expect(isString(()=>{})).toBeFalsy();
    expect(isString(/x/g)).toBeFalsy();
    expect(isString(new RegExp('c', 'g'))).toBeFalsy();
    expect(isString(new Date())).toBeFalsy();
  });
});

import { isISODateString } from "@fs/is";

describe("isISODateString", () => {
  it("should return true for ISO Date String instances", () => {
    expect(isISODateString(new Object('2018-06-04T12:33:00.000Z'))).toBeTruthy();
    expect(isISODateString(new Date('2018-06-04T12:33:00.000Z').toISOString())).toBeTruthy();
    expect(isISODateString(new Date().toISOString())).toBeTruthy();
  });
  it("should return false for non ISO Date String instances", () => {
    expect(isISODateString({})).toBeFalsy();
    expect(isISODateString([])).toBeFalsy();
    expect(isISODateString(6)).toBeFalsy();
    expect(isISODateString(undefined)).toBeFalsy();
    expect(isISODateString(null)).toBeFalsy();
    expect(isISODateString(NaN)).toBeFalsy();
    expect(isISODateString(Infinity)).toBeFalsy();
    expect(isISODateString(new Number(5))).toBeFalsy();
    expect(isISODateString(true)).toBeFalsy();
    expect(isISODateString(true)).toBeFalsy();
    expect(isISODateString(false)).toBeFalsy();
    expect(isISODateString(()=>{})).toBeFalsy();
    expect(isISODateString(/x/g)).toBeFalsy();
    expect(isISODateString(new RegExp('c', 'g'))).toBeFalsy();
    expect(isISODateString(new Date())).toBeFalsy();
  });
});

import { isEnum } from "@fs/is";

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

import { isObject } from "@fs/is";

describe("isObject", () => {
  
  const one = { one: 1};
  const two = { two: "2" };

  it(`should return true`, () => {
    expect(isObject(one)).toBeTruthy();
    expect(isObject(two)).toBeTruthy();
  });
  it(`should return false`, () => {
    expect(isObject(1)).toBeFalsy();
    expect(isObject("a")).toBeFalsy();
    expect(isObject(()=>{})).toBeFalsy();
    expect(isObject(NaN)).toBeFalsy();
    expect(isObject(undefined)).toBeFalsy();
    expect(isObject(null)).toBeFalsy();
  });
});

import { isNumber, IsNumberOptions } from "@fs/is";

describe("isNumber", () => {

  const options:IsNumberOptions = { allowNaN: true, allowInfinity: true };

  it("should return true for numbers that are valid", () => {
    expect(isNumber(2)).toBeTruthy();
    expect(isNumber(NaN, options)).toBeTruthy();
    expect(isNumber(Infinity, options)).toBeTruthy();
    expect(isNumber(-Infinity, options)).toBeTruthy();
  });

  it("should return false non numbers", () => {
    expect(isNumber(NaN)).toBeFalsy();
    expect(isNumber(Infinity)).toBeFalsy();
    expect(isNumber(-Infinity)).toBeFalsy();
  });
});

import { isInt } from "@fs/is";

describe("isInt", () => {

  it("should return true for numbers that are valid", () => {
    expect(isInt(2)).toBeTruthy();
  });
  it("should return false non numbers", () => {
    expect(isInt(NaN)).toBeFalsy();
    expect(isInt(Infinity)).toBeFalsy();
    expect(isInt(-Infinity)).toBeFalsy();
  });
});

import { isEqualTo } from "@fs/is";

describe("isEqualTo", () => {

  const options = {};

  it("should return true for numbers that are valid", () => {
    expect(isEqualTo(options, options)).toBeTruthy();
  });
  it("should return false non numbers", () => {
    expect(isEqualTo(options, NaN)).toBeFalsy();
    expect(isEqualTo(options, Infinity)).toBeFalsy();
    expect(isEqualTo(options, -Infinity)).toBeFalsy();
  });
});

import { isNotEqualTo } from "@fs/is";

describe("isNotEqualTo", () => {

  const options = {};

  it("should return false for things that are equal", () => {
    expect(isNotEqualTo(options, options)).toBeFalsy();
  });

  it("should return true for things that are not equal", () => {
    expect(isNotEqualTo(options, NaN)).toBeTruthy();
    expect(isNotEqualTo(options, Infinity)).toBeTruthy();
    expect(isNotEqualTo(options, -Infinity)).toBeTruthy();
  });
});

import { isEmpty } from "@fs/is";

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

import { isNotEmpty } from "@fs/is";

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

import { isIn } from "@fs/is";

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

import { isNotIn } from "@fs/is";

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

import { isDivisibleBy } from "@fs/is";

describe("isDivisibleBy", () => {

  it(`should be divisible by`, () => {
    expect(isDivisibleBy(4, 2)).toBeTruthy();
  });
  it(`should not be divisible by`, () => {
    expect(isDivisibleBy(5, 2)).toBeFalsy();
  });
});

import { isPositive } from "@fs/is";

describe("isDivisibleBy", () => {

  it(`should be positive`, () => {
    expect(isPositive(4)).toBeTruthy();
  });
  it(`should not be positive`, () => {
    expect(isPositive(-0)).toBeFalsy();
    expect(isPositive(0)).toBeFalsy();
    expect(isPositive(-5)).toBeFalsy();
  });
});

import { isNotNegative } from "@fs/is";

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

import { isNotNegativeError } from "@fs/is";

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
});


import { isNegative } from "@fs/is";

describe("isDivisibleBy", () => {

  it(`should be divisible by`, () => {
    expect(isNegative(4)).toBeFalsy();
  });
  it(`should not be divisible by`, () => {
    expect(isNegative(-0)).toBeTruthy();
    expect(isNegative(0)).toBeTruthy();
    expect(isNegative(-5)).toBeTruthy();
  });
});

import { isGreaterThan } from "@fs/is";

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

import { isLessThan } from "@fs/is";

describe("isLessThan", () => {

  it(`should be false`, () => {
    expect(isLessThan(8, 6)).toBeFalsy();
    expect(isLessThan(5, 5)).toBeFalsy();
    expect(isLessThan(0, 0)).toBeFalsy();
  });
  it(`should be true`, () => {
    expect(isLessThan(3, 4)).toBeTruthy();
  });
});

import { isAfterInstant } from "@fs/is";

describe("isAfterInstant", () => {

  it(`should be true`, () => {
    expect(isAfterInstant(new Date(8), new Date(6))).toBeTruthy();
  });
  it(`should be false`, () => {
    expect(isAfterInstant(new Date(5), new Date(5))).toBeFalsy();
    expect(isAfterInstant(new Date(0), new Date(0))).toBeFalsy();
    expect(isAfterInstant(new Date(3), new Date(4))).toBeFalsy();
  });
});

import { isBeforeInstant } from "@fs/is";

describe("isBeforeInstant", () => {

  it(`should be false`, () => {
    expect(isBeforeInstant(new Date(8), new Date(6))).toBeFalsy();
    expect(isBeforeInstant(new Date(5), new Date(5))).toBeFalsy();
    expect(isBeforeInstant(new Date(0), new Date(0))).toBeFalsy();
  });
  it(`should be true`, () => {
    expect(isBeforeInstant(new Date(3), new Date(4))).toBeTruthy();
  });
});

import { isSameInstant } from "@fs/is";

describe("isSameInstant", () => {

  it(`should be true`, () => {
    expect(isSameInstant(new Date(5), new Date(5))).toBeTruthy();
    expect(isSameInstant(new Date(0), new Date(0))).toBeTruthy();
  });
  it(`should be false`, () => {
    expect(isSameInstant(new Date(3), new Date(4))).toBeFalsy();
    expect(isSameInstant(new Date(4), new Date(3))).toBeFalsy();
  });
});

import { isBooleanString } from "@fs/is";

describe("isBooleanString", () => {

  it(`should be true`, () => {
    expect(isBooleanString("true")).toBeTruthy();
    expect(isBooleanString("false")).toBeTruthy();
    expect(isBooleanString("1")).toBeTruthy();
    expect(isBooleanString("0")).toBeTruthy();
  });
  it(`should be false`, () => {
    expect(isBooleanString("10")).toBeFalsy();
    expect(isBooleanString("01")).toBeFalsy();
    expect(isBooleanString("TRUE")).toBeFalsy();
    expect(isBooleanString("FALSE")).toBeFalsy();
    expect(isBooleanString("falsetrue")).toBeFalsy();
  });
});

import { isNumberString } from "@fs/is";

const options:IsNumberOptions = { allowNaN: true, allowInfinity: true };

describe("isNumberString", () => {

  it(`should be true`, () => {
    expect(isNumberString("2")).toBeTruthy();
    expect(isNumberString("0")).toBeTruthy();
    expect(isNumberString("10")).toBeTruthy();
    expect(isNumberString("01")).toBeTruthy();
    expect(isNumberString("Infinity", options)).toBeTruthy();
    expect(isNumberString("NaN", options)).toBeTruthy();
  });
  it(`should be false`, () => {
    expect(isNumberString("TRUE")).toBeFalsy();
    expect(isNumberString("FALSE")).toBeFalsy();
    expect(isNumberString("falsetrue")).toBeFalsy();
    expect(isNumberString("Infinity")).toBeFalsy();
    expect(isNumberString("NaN")).toBeFalsy();
  });
});

import { isSubString } from "@fs/is";

describe("isSubString", () => {

  it(`should be true`, () => {
    expect(isSubString("2", "22")).toBeTruthy();
    expect(isSubString("foo", "fooboo")).toBeTruthy();
  });
  it(`should be false`, () => {
    expect(isSubString("TRUE", "FALSE")).toBeFalsy();
    expect(isSubString("3", "2")).toBeFalsy();
  });
});

import { isSuperString } from "@fs/is";

describe("isSuperString", () => {

  it(`should be true`, () => {
    expect(isSuperString("22", "2")).toBeTruthy();
    expect(isSuperString("fooboo", "foo")).toBeTruthy();
  });
  it(`should be false`, () => {
    expect(isSuperString("TRUE", "FALSE")).toBeFalsy();
    expect(isSuperString("33", "2")).toBeFalsy();
  });
});

import { isNotSubString } from "@fs/is";

describe("isNotSubString", () => {

  it(`should be true`, () => {
    expect(isNotSubString("TRUE", "FALSE")).toBeTruthy();
    expect(isNotSubString("3", "2")).toBeTruthy();
  });
  it(`should be false`, () => {
    expect(isNotSubString("2", "22")).toBeFalsy();
    expect(isNotSubString("foo", "fooboo")).toBeFalsy();
  });
});

import { isNotSuperString } from "@fs/is";

describe("isNotSuperString", () => {

  it(`should be true`, () => {
    expect(isNotSuperString("TRUE", "FALSE")).toBeTruthy();
    expect(isNotSuperString("3", "2")).toBeTruthy();
  });
  it(`should be false`, () => {
    expect(isNotSuperString("22", "2")).toBeFalsy();
    expect(isNotSuperString("fooboo", "boo")).toBeFalsy();
  });
});

import { isAlpha } from "@fs/is";

describe("isAlpha", () => {

  it(`should be true`, () => {
    expect(isAlpha("a")).toBeTruthy();
    expect(isAlpha("B")).toBeTruthy();
  });
  it(`should be false`, () => {
    expect(isAlpha("2")).toBeFalsy();
    expect(isAlpha("我")).toBeFalsy();
  });
});

import { isAlphanumeric } from "@fs/is";

describe("isAlphanumeric", () => {

  it(`should be true`, () => {
    expect(isAlphanumeric("a")).toBeTruthy();
    expect(isAlphanumeric("B")).toBeTruthy();
    expect(isAlphanumeric("2")).toBeTruthy();
  });
  it(`should be false`, () => {
    expect(isAlphanumeric("我")).toBeFalsy();
    expect(isAlphanumeric("$")).toBeFalsy();
    expect(isAlphanumeric("&")).toBeFalsy();
    expect(isAlphanumeric("@")).toBeFalsy();
    expect(isAlphanumeric("!")).toBeFalsy();
  });
});

import { isAscii } from "@fs/is";

describe("isAscii", () => {

  it(`should be true`, () => {
    expect(isAscii("2")).toBeTruthy();
    expect(isAscii("@")).toBeTruthy();
    expect(isAscii("&")).toBeTruthy();
    expect(isAscii("$")).toBeTruthy();
    expect(isAscii("+")).toBeTruthy();
    expect(isAscii("-")).toBeTruthy();
  });
  it(`should be false`, () => {
    expect(isAscii("我")).toBeFalsy();
  });
});

import { isBase64 } from "@fs/is";
const btoa = require('btoa');

describe("isAscii", () => {

  it(`should be true`, () => {
    expect(isBase64(btoa("2"))).toBeTruthy();
    expect(isBase64(btoa("@"))).toBeTruthy();
    expect(isBase64(btoa("&"))).toBeTruthy();
    expect(isBase64(btoa("$"))).toBeTruthy();
    expect(isBase64(btoa("+"))).toBeTruthy();
    expect(isBase64(btoa("-"))).toBeTruthy();
  });
  it(`should be false`, () => {
    expect(isBase64("我")).toBeFalsy();
  });
});

import { isCreditCard } from "@fs/is";

describe("isCreditCard", () => {
  it("should return true", () => {
    expect(isCreditCard('378247928520957')).toBeTruthy();
    expect(isCreditCard('370815144823625')).toBeTruthy();
    expect(isCreditCard('4539175760988966')).toBeTruthy();
    expect(isCreditCard('4024007167841872')).toBeTruthy();
    expect(isCreditCard('5305228386714354')).toBeTruthy();
    expect(isCreditCard('5193095214272730')).toBeTruthy();
    expect(isCreditCard('6011134360662341')).toBeTruthy();
    expect(isCreditCard('6011930876221534')).toBeTruthy();
  });
  it("should return false", () => {
    expect(isCreditCard('abc')).toBeFalsy();
  });
});

import { isEmail } from "@fs/is";

describe("isEmail", () => {
  it("should return true", () => {
    expect(isEmail('joe@aol.com')).toBeTruthy();
  });
  it("should return false", () => {
    expect(isCreditCard('joe@aol')).toBeFalsy();
  });
});

import { isFQDN } from "@fs/is";

describe("isFQDN", () => {
  it("should return true", () => {
    expect(isFQDN('aol.com')).toBeTruthy();
  });
  it("should return false", () => {
    expect(isFQDN('joe')).toBeFalsy();
  });
});

import { isFullWidth } from "@fs/is";

describe("isFullWidth", () => {
  it("should return true", () => {
    expect(isFullWidth('全角')).toBeTruthy();
    expect(isFullWidth('半角片仮名')).toBeTruthy();
  });
  it("should return false", () => {
    expect(isFullWidth('fullwidth')).toBeFalsy();
  });
});

import { isHalfWidth } from "@fs/is";

describe("isHalfWidth", () => {
  it("should return true", () => {
    expect(isHalfWidth('東京都 新宿区 新宿')).toBeTruthy();
    expect(isHalfWidth('halfwidth')).toBeTruthy();
  });
  it("should return false", () => {
    expect(isHalfWidth('半角片仮名')).toBeFalsy();
  });
});

import { isVariableWidth } from "@fs/is";

describe("isVariableWidth", () => {
  it("should return true", () => {
    expect(isVariableWidth('xyzひらが字')).toBeTruthy();
    expect(isVariableWidth('234abc３ー０')).toBeTruthy();
  });
  it("should return false", () => {
    expect(isVariableWidth('半角片仮名')).toBeFalsy();
  });
});

import { isHexColor } from "@fs/is";

describe("isHexColor", () => {
  it("should return true", () => {
    expect(isHexColor('#ff0022')).toBeTruthy();
    expect(isHexColor('#BBBBBB')).toBeTruthy();
    expect(isHexColor('fff')).toBeTruthy();
    expect(isHexColor('ccc')).toBeTruthy();
    expect(isHexColor('#f00')).toBeTruthy();
  });
  it("should return false", () => {
    expect(isHexColor('#ff12FG')).toBeFalsy();
    expect(isHexColor('ccc00')).toBeFalsy();
  });
});

import { isHexadecimal } from "@fs/is";

describe("isHexadecimal", () => {
  it("should return true", () => {
    expect(isHexadecimal('e')).toBeTruthy();
    expect(isHexadecimal('a')).toBeTruthy();
  });
  it("should return false", () => {
    expect(isHexadecimal('abcdefg')).toBeFalsy();
  });
});

import { isIP } from "@fs/is";

describe("isIP", () => {
  it("should return true", () => {
    expect(isIP('127.0.0.1')).toBeTruthy();
    expect(isIP('2.2.2.2')).toBeTruthy();
    expect(isIP('255.255.255.255')).toBeTruthy();
  });
  it("should return false", () => {
    expect(isIP('0000.1.1.1.1.1')).toBeFalsy();
  });
});

import { isISBN } from "@fs/is";

describe("isISBN", () => {
  it("should return true", () => {
    expect(isISBN('978-3-16-148410-0')).toBeTruthy();
  });
  it("should return false", () => {
    expect(isISBN('0000.1.1.1.1.1')).toBeFalsy();
  });
});

import { isISO8601 } from "@fs/is";

describe("isISBN", () => {
  it("should return true", () => {
    expect(isISO8601('2007-03-15T15:51:00')).toBeTruthy();
    expect(isISO8601('2007-03-15')).toBeTruthy();
  });
  it("should return false", () => {
    expect(isISO8601('0000.1.1.1.1.1')).toBeFalsy();
  });
});

import { isJSON } from "@fs/is";

describe("isJSON", () => {
  it("should return true", () => {
    expect(isJSON('{"json": "json"}')).toBeTruthy();
  });
  it("should return false", () => {
    expect(isJSON('(json: {0000.1.1.1.1.1)}')).toBeFalsy();
  });
});

import { isLowercase } from "@fs/is";

describe("isLowercase", () => {
  it("should return true", () => {
    expect(isLowercase('lowercase')).toBeTruthy();
  });
  it("should return false", () => {
    expect(isLowercase('LOWERCASE')).toBeFalsy();
  });
});

import { isUppercase } from "@fs/is";

describe("isUppercase", () => {
  it("should return true", () => {
    expect(isUppercase('UPPERCASE')).toBeTruthy();
  });
  it("should return false", () => {
    expect(isUppercase('uppercase')).toBeFalsy();
  });
});

import { isMobilePhone } from "@fs/is";

describe("isMobilePhone", () => {
  it("should return true", () => {
    expect(isMobilePhone('7086324345', "en-US")).toBeTruthy();
  });
  it("should return false", () => {
    expect(isMobilePhone('424345', "en-US")).toBeFalsy();
  });
});

import { isMongoId } from "@fs/is";

describe("isMongoId", () => {
  it("should return true", () => {
    expect(isMongoId('507f191e810c19729de860ea')).toBeTruthy();
  });
  it("should return false", () => {
    expect(isMongoId('424345')).toBeFalsy();
  });
});

import { isMultibyte } from "@fs/is";

describe("isMultibyte", () => {
  it("should return true", () => {
    expect(isMultibyte('がな・カタ')).toBeTruthy();
    expect(isMultibyte('email＠example.com')).toBeTruthy();
    expect(isMultibyte('ｘｙ34xxyyF')).toBeTruthy();
  });
  it("should return false", () => {
    expect(isMultibyte('abcdef')).toBeFalsy();
    expect(isMultibyte('424345')).toBeFalsy();
    expect(isMultibyte('123abc')).toBeFalsy();
    expect(isMultibyte('#$@!" *.')).toBeFalsy();
  });
});

import { isSurrogatePair } from "@fs/is";

describe("isSurrogatePair", () => {
  it("should return true", () => {
    expect(isSurrogatePair('𩸽')).toBeTruthy();
    expect(isSurrogatePair('AB𥧄1-2')).toBeTruthy();
    expect(isSurrogatePair('野𠮷')).toBeTruthy();
  });
  it("should return false", () => {
    expect(isSurrogatePair('AB1-2')).toBeFalsy();
    expect(isSurrogatePair('野')).toBeFalsy();
  });
});


import { isURL } from "@fs/is";

describe("isURL", () => {
  it("should return true", () => {
    expect(isURL('norway.no')).toBeTruthy();
    expect(isURL('http://snafu.com?bar=foo')).toBeTruthy();
  });
  it("should return false", () => {
    expect(isURL('.no')).toBeFalsy();
    expect(isURL('invalid://country.no')).toBeFalsy();
  });
});

import { isUUID } from "@fs/is";

describe("isUUID", () => {
  it("should return true", () => {
    expect(isUUID('62db5524-8191-11e8-adc0-fa7ae01bbebc')).toBeTruthy();
  });
  it("should return false", () => {
    expect(isUUID('424345')).toBeFalsy();
  });
});

import { isLengthInRange } from "@fs/is";

describe("isLengthInRange", () => {
  it("should return true", () => {
    expect(isLengthInRange('62db5524-8191-11e8-adc0-fa7ae01bbebc', 0)).toBeTruthy();
  });
  it("should return false", () => {
    expect(isLengthInRange('424345', 2,3)).toBeFalsy();
  });
});

import { isLengthGreaterThan } from "@fs/is";

describe("isLengthMoreThan", () => {
  it("should return true", () => {
    expect(isLengthGreaterThan('62db552dsfsadfasf4', 10)).toBeTruthy();
  });
  it("should return false", () => {
    expect(isLengthGreaterThan('4', 2)).toBeFalsy();
  });
});


import { isLengthLessThan } from "@fs/is";

describe("isLengthLessThan", () => {
  it("should return true", () => {
    expect(isLengthLessThan('62db5524', 10)).toBeTruthy();
  });
  it("should return false", () => {
    expect(isLengthLessThan('424345', 2)).toBeFalsy();
  });
});

import { matches } from "@fs/is";

describe("matches", () => {
  it("should return true", () => {
    expect(matches('xyz', /xyz/)).toBeTruthy();
    expect(matches('xyz333', /xyz/)).toBeTruthy();
  });
  it("should return false", () => {
    expect(matches('XY', /xyz/)).toBeFalsy();
  });
});

import { isArrayContainerOf } from "@fs/is";

describe("isArrayContainerOf", () => {
  it("should return true", () => {
    expect(isArrayContainerOf([2,3,4], [2,3])).toBeTruthy();
    expect(isArrayContainerOf([null,undefined,4], [null,undefined])).toBeTruthy();
  });
  it("should return false", () => {
    expect(isArrayContainerOf([2,3,4], [2,3,4,1])).toBeFalsy();
    expect(isArrayContainerOf([{},{a: 1}, 4], [{}])).toBeFalsy();
  });
});

import { isNotArrayContainerOf } from "@fs/is";

describe("isNotArrayContainerOf", () => {
  it("should return true", () => {
    expect(isNotArrayContainerOf([null,undefined,4], [3,2,null,undefined, NaN])).toBeTruthy();
  });
  it("should return false", () => {
    expect(isNotArrayContainerOf([2,3,4], [2,3,4,2,2])).toBeFalsy();
    expect(isNotArrayContainerOf([2,3,4,1], [4,1])).toBeFalsy();
  });
});

import { isArrayNotEmpty } from "@fs/is";

describe("isArrayNotEmpty", () => {
  it("should return true", () => {
    expect(isArrayNotEmpty([2])).toBeTruthy();
    expect(isArrayNotEmpty(['a'])).toBeTruthy();
  });
  it("should return false", () => {
    expect(isArrayNotEmpty([])).toBeFalsy();
  });
});


import { isArraySizeGreaterThan } from "@fs/is";

describe("isArraySizeGreaterThan", () => {
  it("should return true", () => {
    expect(isArraySizeGreaterThan([2], 0)).toBeTruthy();
    expect(isArraySizeGreaterThan(['a'], 0)).toBeTruthy();
  });
  it("should return false", () => {
    expect(isArraySizeGreaterThan([], 0)).toBeFalsy();
  });
});

import { isArraySizeLessThan } from "@fs/is";

describe("isArraySizeLessThan", () => {
  it("should return true", () => {
    expect(isArraySizeLessThan([2], 2)).toBeTruthy();
    expect(isArraySizeLessThan(['a'], 2)).toBeTruthy();
  });
  it("should return false", () => {
    expect(isArraySizeLessThan([1], 1)).toBeFalsy();
  });
});

import { isArrayUnique } from "@fs/is";

describe("isArrayUnique", () => {
  it("should return true", () => {
    expect(isArrayUnique([2])).toBeTruthy();
    expect(isArrayUnique(['a'])).toBeTruthy();
    expect(isArrayUnique([null])).toBeTruthy();
    expect(isArrayUnique([undefined])).toBeTruthy();
  });
  it("should return false", () => {
    expect(isArrayUnique([1,1])).toBeFalsy();
    expect(isArrayUnique([null, null])).toBeFalsy();
    expect(isArrayUnique([undefined, undefined])).toBeFalsy();
  });
});


import { isByteLength } from "@fs/is";

describe("isByteLength", () => {
  it("should return true for ISO Date String instances", () => {
    expect(isByteLength('abc', 1, 4)).toBeTruthy();
    expect(isByteLength('abc', 1, Infinity)).toBeTruthy();
  });
  it("should return false for non valid byte length strings", () => {
    expect(isByteLength('abc', 1, 2)).toBeFalsy();
  });
});

import { isInstanceOf } from "@fs/is";

class InstanceOfCheck {

}

const test = new InstanceOfCheck();

describe("isInstanceOf", () => {
  it("should return true for ISO Date String instances", () => {
    expect(isInstanceOf(test, InstanceOfCheck)).toBeTruthy();
  });
  it("should return false for non valid byte length strings", () => {
    expect(isInstanceOf('abc', InstanceOfCheck)).toBeFalsy();
  });
});
