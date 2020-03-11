import { isMobilePhone } from "./IsMobilePhone";

describe("isMobilePhone", () => {
  it("should return true", () => {
    expect(isMobilePhone('7086324345', "en-US")).toBeTruthy();
  });
  it("should return false", () => {
    expect(isMobilePhone('424345', "en-US")).toBeFalsy();
  });
});
