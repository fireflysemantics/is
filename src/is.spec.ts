import { isDefined, 
         isBoolean,
         isArray,
         isArrayEmpty,
         isDate,
         isString,
         isISODateString,
         isByteLength } from "@fireflysemantics/is";

import {expect} from "chai";
import "mocha";

/**
 * Unit tests.
 */
describe("isBoolean", () => {
  it("should return true for all Javascript boolean instances", () => {
    expect(isBoolean(true)).to.be.true;
    expect(isBoolean(false)).to.be.true;
    expect(isBoolean(new Boolean("True"))).to.be.true;
    expect(isBoolean(new Boolean("False"))).to.be.true;
    expect(isBoolean(new Boolean(0))).to.be.true;
    expect(isBoolean(new Boolean(1))).to.be.true;
  });
  it("should return false for non boolean types", () => {
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

describe("isArray", () => {
  it("should return true for arrays that are not empty", () => {
    expect(isArray([2])).to.be.true;
    expect(isArray(['a'])).to.be.true;
  });
  it("should return true for arrays that are empty", () => {
    expect(isArray([])).to.be.true;
  });
});


describe("isArrayEmpty", () => {
  it("should return true for arrays that are not empty", () => {
    expect(isArrayEmpty([2])).to.be.false;
    expect(isArrayEmpty(['a'])).to.be.false;
  });
  it("should return true for arrays that are empty", () => {
    expect(isArrayEmpty([])).to.be.true;
  });
});

describe("isArrayEmpty", () => {
  it("should return true for arrays that are not empty", () => {
    expect(isArrayEmpty([2])).to.be.false;
    expect(isArrayEmpty(['a'])).to.be.false;
  });
  it("should return true for arrays that are empty", () => {
    expect(isArrayEmpty([])).to.be.true;
  });
});


describe("isDefined", () => {
  it("should return false for undefined or null arguments", () => {
    expect(isDefined(undefined)).to.be.false;
    expect(isDefined(null)).to.be.false;
  });
  it("should return true for non null or undefined arguments", () => {
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
});

describe("isDate", () => {
  it("should return true for date instances", () => {
    expect(isDate(new Date())).to.be.true;
    expect(isDate(new Date("12/22/1734"))).to.be.true;
  });
  it("should return false for non Date instances", () => {
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


describe("isByteLength", () => {
  it("should return true for ISO Date String instances", () => {
    expect(isByteLength('abc', 1, 4)).to.be.true;
    expect(isByteLength('abc', 1, Infinity)).to.be.true;
  });
  it("should return false for non valid byte length strings", () => {
    expect(isByteLength('abc', 1, 2)).to.be.false;
  });
});
