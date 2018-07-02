import {isDefined} from "@fireflysemantics/is";
import {isBoolean} from "@fireflysemantics/is";
import {isArray} from "@fireflysemantics/is";
import {isArrayEmpty} from "@fireflysemantics/is";
import {expect} from "chai";
import "mocha";

/**
 * Unit tests.
 */

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


