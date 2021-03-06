import { isBoolean } from '@fireflysemantics/validatorts'

/**
 * Checks if a string is a boolean.
 * If given value is not a string, then it returns false.
 * 
 * @param value The value being checked.
 * @param target The target value to perform the check against.
 * @return True if the type of the value is the same as string and `isBoolean` passes.
 */
export function isBooleanString(value: string): boolean {
    return typeof value === "string" && isBoolean(value);
  }
  