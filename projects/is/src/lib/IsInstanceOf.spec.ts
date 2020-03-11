import { isInstanceOf } from "./IsInstanceOf";

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
