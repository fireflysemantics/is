import { isJSON } from "./IsJSON";

describe("isJSON", () => {
  it("should return true", () => {
    expect(isJSON('{"json": "json"}')).toBeTruthy();
  });
  it("should return false", () => {
    expect(isJSON('(json: {0000.1.1.1.1.1)}')).toBeFalsy();
  });
});
