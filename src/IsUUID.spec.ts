import { isUUID } from "./IsUUID";

describe("isUUID", () => {
  it("should return true", () => {
    expect(isUUID('62db5524-8191-11e8-adc0-fa7ae01bbebc')).toBeTruthy();
  });
  it("should return false", () => {
    expect(isUUID('424345')).toBeFalsy();
  });
});
