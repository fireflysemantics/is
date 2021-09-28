import { isArray } from "./IsArray";
import { isIn } from "./IsIn";

/**
 * Checks if given value is in the target array of allowed values.
 * 
 * @param value The value being checked.
 * @param target The target value to perform the check against.
 * @return True if the value is not in the target array, false otherwise.
 */
export function isNotIn(value: any, target: any[]): boolean {
    return !isArray(target) || !isIn(value, target);
  }
  