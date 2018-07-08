import {expect} from "chai";
import "mocha";

/**
 * Unit tests.
 */

import { isBoolean } from "@fireflysemantics/is";

describe("isBoolean", () => {
  it("should return true", () => {
    expect(isBoolean(true)).to.be.true;
    expect(isBoolean(false)).to.be.true;
    expect(isBoolean(new Boolean("True"))).to.be.true;
    expect(isBoolean(new Boolean("False"))).to.be.true;
    expect(isBoolean(new Boolean(0))).to.be.true;
    expect(isBoolean(new Boolean(1))).to.be.true;
  });

  it("should return false", () => {
    expect(isBoolean({})).to.be.false;
    expect(isBoolean("foo")).to.be.false;
    expect(isBoolean("")).to.be.false;
    expect(isBoolean(0)).to.be.false;
    expect(isBoolean(-0)).to.be.false;
    expect(isBoolean(1)).to.be.false;
    expect(isBoolean(-1)).to.be.false;
    expect(isBoolean(Infinity)).to.be.false;
    expect(isBoolean(-Infinity)).to.be.false;
    expect(isBoolean(NaN)).to.be.false;
    expect(isBoolean(new Date())).to.be.false;
  });
});

import { isArray } from "@fireflysemantics/is";

describe("isArray", () => {
  it("should return true", () => {
    expect(isArray([2])).to.be.true;
    expect(isArray(['a'])).to.be.true;
  });
  it("should return true", () => {
    expect(isArray("a")).to.be.false;
    expect(isArray(1)).to.be.false;
  });
});

import { isArrayEmpty } from "@fireflysemantics/is";

describe("isArrayEmpty", () => {
  it("should return true", () => {
    expect(isArrayEmpty([])).to.be.true;
  });
  it("should return false", () => {
    expect(isArrayEmpty([2])).to.be.false;
    expect(isArrayEmpty(['a'])).to.be.false;
  });
});

import { isDefined } from "@fireflysemantics/is";

describe("isDefined", () => {
  it("should return true", () => {
    expect(isDefined({})).to.be.true;
    expect(isDefined("foo")).to.be.true;
    expect(isDefined("")).to.be.true;
    expect(isDefined(0)).to.be.true;
    expect(isDefined(-0)).to.be.true;
    expect(isDefined(Infinity)).to.be.true;
    expect(isDefined(-Infinity)).to.be.true;
    expect(isDefined(NaN)).to.be.true;
    expect(isDefined(new Date())).to.be.true;
  });
  it("should return false", () => {
    expect(isDefined(undefined)).to.be.false;
    expect(isDefined(null)).to.be.false;
  });
});

import { isDate } from "@fireflysemantics/is";

describe("isDate", () => {
  it("should return true", () => {
    expect(isDate(new Date())).to.be.true;
    expect(isDate(new Date("12/22/1734"))).to.be.true;
  });
  it("should return false", () => {
    expect(isDate({})).to.be.false;
    expect(isDate([])).to.be.false;
    expect(isDate(6)).to.be.false;
    expect(isDate(undefined)).to.be.false;
    expect(isDate(null)).to.be.false;
    expect(isDate(true)).to.be.false;
    expect(isDate(false)).to.be.false;
    expect(isDate('fooboo')).to.be.false;
    expect(isDate(()=>{})).to.be.false;
    expect(isDate(/x/g)).to.be.false;
    expect(isDate(new RegExp('c', 'g'))).to.be.false;
  });
});

import { isString } from "@fireflysemantics/is";

describe("isString", () => {
  it("should return true for string instances", () => {
    expect(isString(new Object('pitythefoo'))).to.be.true;
    expect(isString('pitythefoo')).to.be.true;
  });
  it("should return false for non String instances", () => {
    expect(isString({})).to.be.false;
    expect(isString([])).to.be.false;
    expect(isString(6)).to.be.false;
    expect(isString(undefined)).to.be.false;
    expect(isString(null)).to.be.false;
    expect(isString(NaN)).to.be.false;
    expect(isString(Infinity)).to.be.false;
    expect(isString(new Number(5))).to.be.false;
    expect(isString(true)).to.be.false;
    expect(isString(true)).to.be.false;
    expect(isString(false)).to.be.false;
    expect(isString(()=>{})).to.be.false;
    expect(isString(/x/g)).to.be.false;
    expect(isString(new RegExp('c', 'g'))).to.be.false;
    expect(isString(new Date())).to.be.false;
  });
});

import { isISODateString } from "@fireflysemantics/is";

describe("isISODateString", () => {
  it("should return true for ISO Date String instances", () => {
    expect(isISODateString(new Object('2018-06-04T12:33:00.000Z'))).to.be.true;
    expect(isISODateString(new Date('2018-06-04T12:33:00.000Z').toISOString())).to.be.true;
    expect(isISODateString(new Date().toISOString())).to.be.true;
  });
  it("should return false for non ISO Date String instances", () => {
    expect(isISODateString({})).to.be.false;
    expect(isISODateString([])).to.be.false;
    expect(isISODateString(6)).to.be.false;
    expect(isISODateString(undefined)).to.be.false;
    expect(isISODateString(null)).to.be.false;
    expect(isISODateString(NaN)).to.be.false;
    expect(isISODateString(Infinity)).to.be.false;
    expect(isISODateString(new Number(5))).to.be.false;
    expect(isISODateString(true)).to.be.false;
    expect(isISODateString(true)).to.be.false;
    expect(isISODateString(false)).to.be.false;
    expect(isISODateString(()=>{})).to.be.false;
    expect(isISODateString(/x/g)).to.be.false;
    expect(isISODateString(new RegExp('c', 'g'))).to.be.false;
    expect(isISODateString(new Date())).to.be.false;
  });
});

import { isEnum } from "@fireflysemantics/is";

describe("isEnum", () => {
  
  const one = { one: 1};
  const two = { two: 2 };

  it(`should return true`, () => {
    expect(isEnum(1, one)).to.be.true;
  });
  it(`should return false`, () => {
    expect(isEnum(1, two)).to.be.false;
  });
});

import { isObject } from "@fireflysemantics/is";

describe("isObject", () => {
  
  const one = { one: 1};
  const two = { two: "2" };

  it(`should return true`, () => {
    expect(isObject(one)).to.be.true;
    expect(isObject(two)).to.be.true;
  });
  it(`should return false`, () => {
    expect(isObject(1)).to.be.false;
    expect(isObject("a")).to.be.false;
    expect(isObject(()=>{})).to.be.false;
    expect(isObject(NaN)).to.be.false;
    expect(isObject(undefined)).to.be.false;
    expect(isObject(null)).to.be.false;
  });
});

import { isNumber, IsNumberOptions } from "@fireflysemantics/is";

describe("isNumber", () => {

  const options:IsNumberOptions = { allowNaN: true, allowInfinity: true };

  it("should return true for numbers that are valid", () => {
    expect(isNumber(2)).to.be.true;
    expect(isNumber(NaN, options)).to.be.true;
    expect(isNumber(Infinity, options)).to.be.true;
    expect(isNumber(-Infinity, options)).to.be.true;
  });

  it("should return false non numbers", () => {
    expect(isNumber(NaN)).to.be.false;
    expect(isNumber(Infinity)).to.be.false;
    expect(isNumber(-Infinity)).to.be.false;
  });
});

import { isInt } from "@fireflysemantics/is";

describe("isInt", () => {

  it("should return true for numbers that are valid", () => {
    expect(isInt(2)).to.be.true;
  });
  it("should return false non numbers", () => {
    expect(isInt(NaN)).to.be.false;
    expect(isInt(Infinity)).to.be.false;
    expect(isInt(-Infinity)).to.be.false;
  });
});

import { isEqualTo } from "@fireflysemantics/is";

describe("isEqualTo", () => {

  const options = {};

  it("should return true for numbers that are valid", () => {
    expect(isEqualTo(options, options)).to.be.true;
  });
  it("should return false non numbers", () => {
    expect(isEqualTo(options, NaN)).to.be.false;
    expect(isEqualTo(options, Infinity)).to.be.false;
    expect(isEqualTo(options, -Infinity)).to.be.false;
  });
});

import { isNotEqualTo } from "@fireflysemantics/is";

describe("isNotEqualTo", () => {

  const options = {};

  it("should return false for things that are equal", () => {
    expect(isNotEqualTo(options, options)).to.be.false;
  });

  it("should return true for things that are not equal", () => {
    expect(isNotEqualTo(options, NaN)).to.be.true;
    expect(isNotEqualTo(options, Infinity)).to.be.true;
    expect(isNotEqualTo(options, -Infinity)).to.be.true;
  });
});

import { isEmpty } from "@fireflysemantics/is";

describe("isEmpty", () => {  
  it(`should return true for empty values`, () => {
    expect(isEmpty("")).to.be.true;
    expect(isEmpty(null)).to.be.true;
    expect(isEmpty(undefined)).to.be.true;
  });

  it(`should return false for non empty values`, () => {
    expect(isEmpty("Not empty")).to.be.false;
    expect(isEmpty(NaN)).to.be.false;
  });
});

import { isNotEmpty } from "@fireflysemantics/is";

describe("isNotEmpty", () => {  
  it(`should return true for non empty values`, () => {
    expect(isNotEmpty("Not empty")).to.be.true;
    expect(isNotEmpty(NaN)).to.be.true;
  });

  it(`should return false for empty values`, () => {
    expect(isNotEmpty("")).to.be.false;
    expect(isNotEmpty(null)).to.be.false;
    expect(isNotEmpty(undefined)).to.be.false;
  });
});

import { isIn } from "@fireflysemantics/is";

describe("isIn", () => {

  it(`should return true when the value is in the array`, () => {
    expect(isIn(null, [null])).to.be.true;
    expect(isIn(undefined, [undefined])).to.be.true;
    expect(isIn(2, [2])).to.be.true;
    expect(isIn('a', ['a', 'b'])).to.be.true;
    expect(isIn('a', ['a'])).to.be.true;
    expect(isIn([2,3], [[2,3]])).to.be.true;
  });
  it(`should return false when the value is not in the array`, () => {
    expect(isIn('a', ['b'])).to.be.false;
    expect(isIn([2,4], [[2,3]])).to.be.false;
  });
});

import { isNotIn } from "@fireflysemantics/is";

describe("isNotIn", () => {

  it(`should return false when the value is in the array`, () => {
    expect(isNotIn(2, [2])).to.be.false;
    expect(isNotIn('a', ['a', 'b'])).to.be.false;
    expect(isNotIn('a', ['a'])).to.be.false;
    expect(isNotIn([2,3], [[2,3]])).to.be.false;
  });
  it(`should return true when the value is not in the array`, () => {
    expect(isNotIn('a', ['b'])).to.be.true;
    expect(isNotIn([2,4], [[2,3]])).to.be.true;
  });
});

import { isDivisibleBy } from "@fireflysemantics/is";

describe("isDivisibleBy", () => {

  it(`should be divisible by`, () => {
    expect(isDivisibleBy(4, 2)).to.be.true;
  });
  it(`should not be divisible by`, () => {
    expect(isDivisibleBy(5, 2)).to.be.false;
  });
});

import { isPositive } from "@fireflysemantics/is";

describe("isDivisibleBy", () => {

  it(`should be positive`, () => {
    expect(isPositive(4)).to.be.true;
  });
  it(`should not be positive`, () => {
    expect(isPositive(-0)).to.be.false;
    expect(isPositive(0)).to.be.false;
    expect(isPositive(-5)).to.be.false;
  });
});

import { isNegative } from "@fireflysemantics/is";

describe("isDivisibleBy", () => {

  it(`should be divisible by`, () => {
    expect(isNegative(4)).to.be.false;
  });
  it(`should not be divisible by`, () => {
    expect(isNegative(-0)).to.be.true;
    expect(isNegative(0)).to.be.true;
    expect(isNegative(-5)).to.be.true;
  });
});

import { isGreaterThan } from "@fireflysemantics/is";

describe("isGreaterThan", () => {

  it(`should be true`, () => {
    expect(isGreaterThan(8, 6)).to.be.true;
  });
  it(`should be false`, () => {
    expect(isGreaterThan(5, 5)).to.be.false;
    expect(isGreaterThan(0, 0)).to.be.false;
    expect(isGreaterThan(3, 4)).to.be.false;
  });
});

import { isLessThan } from "@fireflysemantics/is";

describe("isLessThan", () => {

  it(`should be false`, () => {
    expect(isLessThan(8, 6)).to.be.false;
    expect(isLessThan(5, 5)).to.be.false;
    expect(isLessThan(0, 0)).to.be.false;
  });
  it(`should be true`, () => {
    expect(isLessThan(3, 4)).to.be.true;
  });
});

import { isAfterInstant } from "@fireflysemantics/is";

describe("isAfterInstant", () => {

  it(`should be true`, () => {
    expect(isAfterInstant(new Date(8), new Date(6))).to.be.true;
  });
  it(`should be false`, () => {
    expect(isAfterInstant(new Date(5), new Date(5))).to.be.false;
    expect(isAfterInstant(new Date(0), new Date(0))).to.be.false;
    expect(isAfterInstant(new Date(3), new Date(4))).to.be.false;
  });
});

import { isBeforeInstant } from "@fireflysemantics/is";

describe("isBeforeInstant", () => {

  it(`should be false`, () => {
    expect(isBeforeInstant(new Date(8), new Date(6))).to.be.false;
    expect(isBeforeInstant(new Date(5), new Date(5))).to.be.false;
    expect(isBeforeInstant(new Date(0), new Date(0))).to.be.false;
  });
  it(`should be true`, () => {
    expect(isBeforeInstant(new Date(3), new Date(4))).to.be.true;
  });
});

import { isSameInstant } from "@fireflysemantics/is";

describe("isSameInstant", () => {

  it(`should be true`, () => {
    expect(isSameInstant(new Date(5), new Date(5))).to.be.true;
    expect(isSameInstant(new Date(0), new Date(0))).to.be.true;
  });
  it(`should be false`, () => {
    expect(isSameInstant(new Date(3), new Date(4))).to.be.false;
    expect(isSameInstant(new Date(4), new Date(3))).to.be.false;
  });
});

import { isBooleanString } from "@fireflysemantics/is";

describe("isBooleanString", () => {

  it(`should be true`, () => {
    expect(isBooleanString("true")).to.be.true;
    expect(isBooleanString("false")).to.be.true;
    expect(isBooleanString("1")).to.be.true;
    expect(isBooleanString("0")).to.be.true;
  });
  it(`should be false`, () => {
    expect(isBooleanString("10")).to.be.false;
    expect(isBooleanString("01")).to.be.false;
    expect(isBooleanString("TRUE")).to.be.false;
    expect(isBooleanString("FALSE")).to.be.false;
    expect(isBooleanString("falsetrue")).to.be.false;
  });
});

import { isNumberString } from "@fireflysemantics/is";

const options:IsNumberOptions = { allowNaN: true, allowInfinity: true };

describe("isNumberString", () => {

  it(`should be true`, () => {
    expect(isNumberString("2")).to.be.true;
    expect(isNumberString("0")).to.be.true;
    expect(isNumberString("10")).to.be.true;
    expect(isNumberString("01")).to.be.true;
    expect(isNumberString("Infinity", options)).to.be.true;
    expect(isNumberString("NaN", options)).to.be.true;
  });
  it(`should be false`, () => {
    expect(isNumberString("TRUE")).to.be.false;
    expect(isNumberString("FALSE")).to.be.false;
    expect(isNumberString("falsetrue")).to.be.false;
    expect(isNumberString("Infinity")).to.be.false;
    expect(isNumberString("NaN")).to.be.false;
  });
});

import { isSubString } from "@fireflysemantics/is";

describe("isSubString", () => {

  it(`should be true`, () => {
    expect(isSubString("2", "22")).to.be.true;
    expect(isSubString("foo", "fooboo")).to.be.true;
  });
  it(`should be false`, () => {
    expect(isSubString("TRUE", "FALSE")).to.be.false;
    expect(isSubString("3", "2")).to.be.false;
  });
});

import { isSuperString } from "@fireflysemantics/is";

describe("isSuperString", () => {

  it(`should be true`, () => {
    expect(isSuperString("22", "2")).to.be.true;
    expect(isSuperString("fooboo", "foo")).to.be.true;
  });
  it(`should be false`, () => {
    expect(isSuperString("TRUE", "FALSE")).to.be.false;
    expect(isSuperString("33", "2")).to.be.false;
  });
});

import { isNotSubString } from "@fireflysemantics/is";

describe("isNotSubString", () => {

  it(`should be true`, () => {
    expect(isNotSubString("TRUE", "FALSE")).to.be.true;
    expect(isNotSubString("3", "2")).to.be.true;
  });
  it(`should be false`, () => {
    expect(isNotSubString("2", "22")).to.be.false;
    expect(isNotSubString("foo", "fooboo")).to.be.false;
  });
});

import { isNotSuperString } from "@fireflysemantics/is";

describe("isNotSuperString", () => {

  it(`should be true`, () => {
    expect(isNotSuperString("TRUE", "FALSE")).to.be.true;
    expect(isNotSuperString("3", "2")).to.be.true;
  });
  it(`should be false`, () => {
    expect(isNotSuperString("22", "2")).to.be.false;
    expect(isNotSuperString("fooboo", "boo")).to.be.false;
  });
});

import { isAlpha } from "@fireflysemantics/is";

describe("isAlpha", () => {

  it(`should be true`, () => {
    expect(isAlpha("a")).to.be.true;
    expect(isAlpha("B")).to.be.true;
  });
  it(`should be false`, () => {
    expect(isAlpha("2")).to.be.false;
    expect(isAlpha("我")).to.be.false;
  });
});

import { isAlphanumeric } from "@fireflysemantics/is";

describe("isAlphanumeric", () => {

  it(`should be true`, () => {
    expect(isAlphanumeric("a")).to.be.true;
    expect(isAlphanumeric("B")).to.be.true;
    expect(isAlphanumeric("2")).to.be.true;
  });
  it(`should be false`, () => {
    expect(isAlphanumeric("我")).to.be.false;
    expect(isAlphanumeric("$")).to.be.false;
    expect(isAlphanumeric("&")).to.be.false;
    expect(isAlphanumeric("@")).to.be.false;
    expect(isAlphanumeric("!")).to.be.false;
  });
});

import { isAscii } from "@fireflysemantics/is";

describe("isAscii", () => {

  it(`should be true`, () => {
    expect(isAscii("2")).to.be.true;
    expect(isAscii("@")).to.be.true;
    expect(isAscii("&")).to.be.true;
    expect(isAscii("$")).to.be.true;
    expect(isAscii("+")).to.be.true;
    expect(isAscii("-")).to.be.true;
  });
  it(`should be false`, () => {
    expect(isAscii("我")).to.be.false;
  });
});

import { isBase64 } from "@fireflysemantics/is";
const btoa = require('btoa');

describe("isAscii", () => {

  it(`should be true`, () => {
    expect(isBase64(btoa("2"))).to.be.true;
    expect(isBase64(btoa("@"))).to.be.true;
    expect(isBase64(btoa("&"))).to.be.true;
    expect(isBase64(btoa("$"))).to.be.true;
    expect(isBase64(btoa("+"))).to.be.true;
    expect(isBase64(btoa("-"))).to.be.true;
  });
  it(`should be false`, () => {
    expect(isBase64("我")).to.be.false;
  });
});

import { isCreditCard } from "@fireflysemantics/is";

describe("isCreditCard", () => {
  it("should return true", () => {
    expect(isCreditCard('378247928520957')).to.be.true;
    expect(isCreditCard('370815144823625')).to.be.true;
    expect(isCreditCard('4539175760988966')).to.be.true;
    expect(isCreditCard('4024007167841872')).to.be.true;
    expect(isCreditCard('5305228386714354')).to.be.true;
    expect(isCreditCard('5193095214272730')).to.be.true;
    expect(isCreditCard('6011134360662341')).to.be.true;
    expect(isCreditCard('6011930876221534')).to.be.true;
  });
  it("should return false", () => {
    expect(isCreditCard('abc')).to.be.false;
  });
});

import { isEmail } from "@fireflysemantics/is";

describe("isEmail", () => {
  it("should return true", () => {
    expect(isEmail('joe@aol.com')).to.be.true;
  });
  it("should return false", () => {
    expect(isCreditCard('joe@aol')).to.be.false;
  });
});

import { isFQDN } from "@fireflysemantics/is";

describe("isFQDN", () => {
  it("should return true", () => {
    expect(isFQDN('aol.com')).to.be.true;
  });
  it("should return false", () => {
    expect(isFQDN('joe')).to.be.false;
  });
});

import { isFullWidth } from "@fireflysemantics/is";

describe("isFullWidth", () => {
  it("should return true", () => {
    expect(isFullWidth('全角')).to.be.true;
    expect(isFullWidth('半角片仮名')).to.be.true;
  });
  it("should return false", () => {
    expect(isFullWidth('fullwidth')).to.be.false;
  });
});

import { isHalfWidth } from "@fireflysemantics/is";

describe("isHalfWidth", () => {
  it("should return true", () => {
    expect(isHalfWidth('東京都 新宿区 新宿')).to.be.true;
    expect(isHalfWidth('halfwidth')).to.be.true;
  });
  it("should return false", () => {
    expect(isHalfWidth('半角片仮名')).to.be.false;
  });
});

import { isVariableWidth } from "@fireflysemantics/is";

describe("isVariableWidth", () => {
  it("should return true", () => {
    expect(isVariableWidth('xyzひらが字')).to.be.true;
    expect(isVariableWidth('234abc３ー０')).to.be.true;
  });
  it("should return false", () => {
    expect(isVariableWidth('半角片仮名')).to.be.false;
  });
});

import { isHexColor } from "@fireflysemantics/is";

describe("isHexColor", () => {
  it("should return true", () => {
    expect(isHexColor('#ff0022')).to.be.true;
    expect(isHexColor('#BBBBBB')).to.be.true;
    expect(isHexColor('fff')).to.be.true;
    expect(isHexColor('ccc')).to.be.true;
    expect(isHexColor('#f00')).to.be.true;
  });
  it("should return false", () => {
    expect(isHexColor('#ff12FG')).to.be.false;
    expect(isHexColor('ccc00')).to.be.false;
  });
});

import { isHexadecimal } from "@fireflysemantics/is";

describe("isHexadecimal", () => {
  it("should return true", () => {
    expect(isHexadecimal('e')).to.be.true;
    expect(isHexadecimal('a')).to.be.true;
  });
  it("should return false", () => {
    expect(isHexadecimal('abcdefg')).to.be.false;
  });
});

import { isIP } from "@fireflysemantics/is";

describe("isIP", () => {
  it("should return true", () => {
    expect(isIP('127.0.0.1')).to.be.true;
    expect(isIP('2.2.2.2')).to.be.true;
    expect(isIP('255.255.255.255')).to.be.true;
  });
  it("should return false", () => {
    expect(isIP('0000.1.1.1.1.1')).to.be.false;
  });
});

import { isISBN } from "@fireflysemantics/is";

describe("isISBN", () => {
  it("should return true", () => {
    expect(isISBN('978-3-16-148410-0')).to.be.true;
  });
  it("should return false", () => {
    expect(isISBN('0000.1.1.1.1.1')).to.be.false;
  });
});

import { isISO8601 } from "@fireflysemantics/is";

describe("isISBN", () => {
  it("should return true", () => {
    expect(isISO8601('2007-03-15T15:51:00')).to.be.true;
    expect(isISO8601('2007-03-15')).to.be.true;
  });
  it("should return false", () => {
    expect(isISO8601('0000.1.1.1.1.1')).to.be.false;
  });
});

import { isJSON } from "@fireflysemantics/is";

describe("isJSON", () => {
  it("should return true", () => {
    expect(isJSON('{"json": "json"}')).to.be.true;
  });
  it("should return false", () => {
    expect(isJSON('(json: {0000.1.1.1.1.1)}')).to.be.false;
  });
});

import { isLowercase } from "@fireflysemantics/is";

describe("isLowercase", () => {
  it("should return true", () => {
    expect(isLowercase('lowercase')).to.be.true;
  });
  it("should return false", () => {
    expect(isLowercase('LOWERCASE')).to.be.false;
  });
});

import { isUppercase } from "@fireflysemantics/is";

describe("isUppercase", () => {
  it("should return true", () => {
    expect(isUppercase('UPPERCASE')).to.be.true;
  });
  it("should return false", () => {
    expect(isUppercase('uppercase')).to.be.false;
  });
});

import { isMobilePhone } from "@fireflysemantics/is";

describe("isMobilePhone", () => {
  it("should return true", () => {
    expect(isMobilePhone('7086324345', "en-US")).to.be.true;
  });
  it("should return false", () => {
    expect(isMobilePhone('424345', "en-US")).to.be.false;
  });
});

import { isMongoId } from "@fireflysemantics/is";

describe("isMongoId", () => {
  it("should return true", () => {
    expect(isMongoId('507f191e810c19729de860ea')).to.be.true;
  });
  it("should return false", () => {
    expect(isMongoId('424345')).to.be.false;
  });
});

import { isMultibyte } from "@fireflysemantics/is";

describe("isMultibyte", () => {
  it("should return true", () => {
    expect(isMultibyte('がな・カタ')).to.be.true;
    expect(isMultibyte('email＠example.com')).to.be.true;
    expect(isMultibyte('ｘｙ34xxyyF')).to.be.true;
  });
  it("should return false", () => {
    expect(isMultibyte('abcdef')).to.be.false;
    expect(isMultibyte('424345')).to.be.false;
    expect(isMultibyte('123abc')).to.be.false;
    expect(isMultibyte('#$@!" *.')).to.be.false;
  });
});

import { isSurrogatePair } from "@fireflysemantics/is";

describe("isSurrogatePair", () => {
  it("should return true", () => {
    expect(isSurrogatePair('𩸽')).to.be.true;
    expect(isSurrogatePair('AB𥧄1-2')).to.be.true;
    expect(isSurrogatePair('野𠮷')).to.be.true;
  });
  it("should return false", () => {
    expect(isSurrogatePair('AB1-2')).to.be.false;
    expect(isSurrogatePair('野')).to.be.false;
  });
});


import { isURL } from "@fireflysemantics/is";

describe("isURL", () => {
  it("should return true", () => {
    expect(isURL('norway.no')).to.be.true;
    expect(isURL('http://snafu.com?bar=foo')).to.be.true;
  });
  it("should return false", () => {
    expect(isURL('.no')).to.be.false;
    expect(isURL('invalid://country.no')).to.be.false;
  });
});

import { isUUID } from "@fireflysemantics/is";

describe("isUUID", () => {
  it("should return true", () => {
    expect(isUUID('62db5524-8191-11e8-adc0-fa7ae01bbebc')).to.be.true;
  });
  it("should return false", () => {
    expect(isUUID('424345')).to.be.false;
  });
});

import { isLengthInRange } from "@fireflysemantics/is";

describe("isLengthInRange", () => {
  it("should return true", () => {
    expect(isLengthInRange('62db5524-8191-11e8-adc0-fa7ae01bbebc', 0)).to.be.true;
  });
  it("should return false", () => {
    expect(isLengthInRange('424345', 2,3)).to.be.false;
  });
});

import { isLengthGreaterThan } from "@fireflysemantics/is";

describe("isLengthMoreThan", () => {
  it("should return true", () => {
    expect(isLengthGreaterThan('62db552dsfsadfasf4', 10)).to.be.true;
  });
  it("should return false", () => {
    expect(isLengthGreaterThan('4', 2)).to.be.false;
  });
});


import { isLengthLessThan } from "@fireflysemantics/is";

describe("isLengthLessThan", () => {
  it("should return true", () => {
    expect(isLengthLessThan('62db5524', 10)).to.be.true;
  });
  it("should return false", () => {
    expect(isLengthLessThan('424345', 2)).to.be.false;
  });
});

import { matches } from "@fireflysemantics/is";

describe("matches", () => {
  it("should return true", () => {
    expect(matches('xyz', /xyz/)).to.be.true;
    expect(matches('xyz333', /xyz/)).to.be.true;
  });
  it("should return false", () => {
    expect(matches('XY', /xyz/)).to.be.false;
  });
});

import { isArrayContainerOf } from "@fireflysemantics/is";

describe("isArrayContainerOf", () => {
  it("should return true", () => {
    expect(isArrayContainerOf([2,3,4], [2,3])).to.be.true;
    expect(isArrayContainerOf([null,undefined,4], [null,undefined])).to.be.true;
  });
  it("should return false", () => {
    expect(isArrayContainerOf([2,3,4], [2,3,4,1])).to.be.false;
    expect(isArrayContainerOf([{},{a: 1}, 4], [{}])).to.be.false;
  });
});

import { isNotArrayContainerOf } from "@fireflysemantics/is";

describe("isNotArrayContainerOf", () => {
  it("should return true", () => {
    expect(isNotArrayContainerOf([null,undefined,4], [3,2,null,undefined, NaN])).to.be.true;
  });
  it("should return false", () => {
    expect(isNotArrayContainerOf([2,3,4], [2,3,4,2,2])).to.be.false;
    expect(isNotArrayContainerOf([2,3,4,1], [4,1])).to.be.false;
  });
});

import { isArrayNotEmpty } from "@fireflysemantics/is";

describe("isArrayNotEmpty", () => {
  it("should return true", () => {
    expect(isArrayNotEmpty([2])).to.be.true;
    expect(isArrayNotEmpty(['a'])).to.be.true;
  });
  it("should return false", () => {
    expect(isArrayNotEmpty([])).to.be.false;
  });
});


import { isArraySizeGreaterThan } from "@fireflysemantics/is";

describe("isArraySizeGreaterThan", () => {
  it("should return true", () => {
    expect(isArraySizeGreaterThan([2], 0)).to.be.true;
    expect(isArraySizeGreaterThan(['a'], 0)).to.be.true;
  });
  it("should return false", () => {
    expect(isArraySizeGreaterThan([], 0)).to.be.false;
  });
});

import { isArraySizeLessThan } from "@fireflysemantics/is";

describe("isArraySizeLessThan", () => {
  it("should return true", () => {
    expect(isArraySizeLessThan([2], 2)).to.be.true;
    expect(isArraySizeLessThan(['a'], 2)).to.be.true;
  });
  it("should return false", () => {
    expect(isArraySizeLessThan([1], 1)).to.be.false;
  });
});

import { isArrayUnique } from "@fireflysemantics/is";

describe("isArrayUnique", () => {
  it("should return true", () => {
    expect(isArrayUnique([2])).to.be.true;
    expect(isArrayUnique(['a'])).to.be.true;
    expect(isArrayUnique([null])).to.be.true;
    expect(isArrayUnique([undefined])).to.be.true;
  });
  it("should return false", () => {
    expect(isArrayUnique([1,1])).to.be.false;
    expect(isArrayUnique([null, null])).to.be.false;
    expect(isArrayUnique([undefined, undefined])).to.be.false;
  });
});


import { isByteLength } from "@fireflysemantics/is";

describe("isByteLength", () => {
  it("should return true for ISO Date String instances", () => {
    expect(isByteLength('abc', 1, 4)).to.be.true;
    expect(isByteLength('abc', 1, Infinity)).to.be.true;
  });
  it("should return false for non valid byte length strings", () => {
    expect(isByteLength('abc', 1, 2)).to.be.false;
  });
});

import { isInstanceOf } from "@fireflysemantics/is";

class InstanceOfCheck {

}

const test = new InstanceOfCheck();

describe("isInstanceOf", () => {
  it("should return true for ISO Date String instances", () => {
    expect(isInstanceOf(test, InstanceOfCheck)).to.be.true;
  });
  it("should return false for non valid byte length strings", () => {
    expect(isInstanceOf('abc', InstanceOfCheck)).to.be.false;
  });
});
