import { isLength } from "@fireflysemantics/validatorts";

/**
 * Checks if the string's length falls in a range. Note: this function takes into account surrogate pairs.
 * If given value is not a string, then it returns false.
 * 
 * @param value The value being checked.
 * @param min The min value to perform the check against.
 * @param max The max value to perform the check against.
 * @return True if the check passes, false otherwise.
 */
export function isLengthInRange(value: string, min: number, max?: number): boolean {
  return (
    typeof value === "string" && isLength(value, { min, max })
  );
}
