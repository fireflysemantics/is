import { IsError } from "./IsError";

it("should be an instance of IsError", () => {
  let error = new IsError("This is an IsError", 'value');
  expect(error instanceof IsError).toBeTruthy();
});





