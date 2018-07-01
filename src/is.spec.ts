import {isDefined} from "@fireflysemantics/is";
import { expect } from "chai";
import "mocha";

/**
 * Unit tests for all the is module method.
 */

describe("Utilities isDefined", () => {
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