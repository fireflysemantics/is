import { isMongoId } from "./IsMongoID";

describe("isMongoId", () => {
  it("should return true", () => {
    expect(isMongoId('507f191e810c19729de860ea')).toBeTruthy();
  });
  it("should return false", () => {
    expect(isMongoId('424345')).toBeFalsy();
  });
});

