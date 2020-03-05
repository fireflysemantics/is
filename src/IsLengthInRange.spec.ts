import { isLengthInRange } from "./IsLengthInRange";

describe("isLengthInRange", () => {
  it("should return true", () => {
    expect(isLengthInRange('62db5524-8191-11e8-adc0-fa7ae01bbebc', 0)).toBeTruthy();
  });
  it("should return false", () => {
    expect(isLengthInRange('424345', 2,3)).toBeFalsy();
  });
});
