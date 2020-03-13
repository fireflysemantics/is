import { isHalfWidth as vtsIsHalfWidth } from "@fireflysemantics/validatorts";

/**
 * Checks if the string contains any half-width chars.
 * If given value is not a string, then it returns false.
 * 
 * @param value The value being checked.
 * @returns  True if the string contains any half-width chars, false otherwise.
 */
export function isHalfWidth(value: string): boolean {
    return typeof value === "string" && vtsIsHalfWidth(value);
  }
  