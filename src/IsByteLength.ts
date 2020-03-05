import { isByteLength as vtsIsByteLength } from "@fireflysemantics/validatorts";

/**
 * Checks if the string's length (in bytes) falls in a range.
 * If given value is not a string, then it returns false.
 * 
 * @param value The value being checked.
 * @param min The min value to perform the check against.
 * @param max The max value to perform the check against.
 * @return True if the check passes, false otherwise.
 */
export function isByteLength(value: string, min: number, max?: number): boolean {
  return typeof value === "string" && vtsIsByteLength(value, { min, max });
}
