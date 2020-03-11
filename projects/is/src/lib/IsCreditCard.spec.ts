import { isCreditCard } from "./IsCreditCard";

describe("isCreditCard", () => {
  it("should return true", () => {
    expect(isCreditCard('378247928520957')).toBeTruthy();
    expect(isCreditCard('370815144823625')).toBeTruthy();
    expect(isCreditCard('4539175760988966')).toBeTruthy();
    expect(isCreditCard('4024007167841872')).toBeTruthy();
    expect(isCreditCard('5305228386714354')).toBeTruthy();
    expect(isCreditCard('5193095214272730')).toBeTruthy();
    expect(isCreditCard('6011134360662341')).toBeTruthy();
    expect(isCreditCard('6011930876221534')).toBeTruthy();
  });
  it("should return false", () => {
    expect(isCreditCard('abc')).toBeFalsy();
  });
});

