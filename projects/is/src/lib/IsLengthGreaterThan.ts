import { isLengthInRange } from "./IsLengthInRange";

/**
 * Checks if the string's length is not less than given target number. 
 * Note: this function takes into account surrogate pairs.
 * If given value is not a string, then it returns false.
 * 
 * @param value The value being checked.
 * @param target The minimum target length
 * @returns True if the string's length is not less than given target number, false otherwise.
 */
export function isLengthGreaterThan(value: string, target: number) {
  return typeof value === "string" && isLengthInRange(value, target);
}