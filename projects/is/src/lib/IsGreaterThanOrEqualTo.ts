import { ValidationConstraintEnum } from "./ValidationConstraintEnum";
import { Types } from "./types";
import { IsError } from "./IsError";

/**
 * Checks if value >= target.
 * @param value The value being checked.
 * @param target The target value to perform the check against.
 * @return True if the value is greater or equal to the target, false otherwise.
 */
export function isGreaterThanOrEqualTo(value: number, target: number): boolean {
    return typeof value === "number" && typeof target === "number" && value >= target;
  }
  
  export function isGreaterThanOrEqualToError(value: number, target: number, field: string, code?: string): void {
    const CONSTRAINT = "IsGreaterThanOrEqualTo";
  
    if (!isGreaterThanOrEqualTo(value, target)) {
      const message: string = `The value (${value}) of the field ${field} should be greater than or equal to ${target}.`;
      throw new IsError(message, value, field, ValidationConstraintEnum.IS_GREATER_THAN_OR_EQUAL_TO, Types.NUMBER, code);
    }
  }
  
  