import { IsError } from "./IsError";
import { ValidationConstraintEnum } from "./ValidationConstraintEnum";
import { Types } from "./types";

/**
 * Checks if value > target.
 * @param value The value being checked.
 * @param target The target value to perform the check against.
 * @return True if the value is greater than the target, false otherwise.
 */
export function isGreaterThan(value: number, target: number): boolean {
    return typeof value === "number" && typeof target === "number" && value > target;
  }
  
  export function isGreaterThanError(value: number, target: number, field: string, code?: string): void {  
    if (!isGreaterThan(value, target)) {
      const message: string = `The value (${value}) of the field ${field} should be greater ${target}.`;
      throw new IsError(message, value, field, ValidationConstraintEnum.IS_GREATER_THAN, Types.NUMBER, code);
    }
  }
  