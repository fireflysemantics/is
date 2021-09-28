import { isSurrogatePair as vtsIsSurrogatePair } from "@fireflysemantics/validatorts";

/**
 * Checks if the string contains any surrogate pairs chars.
 * If given value is not a string, then it returns false.
 * 
 * @param value The value being checked.
 * @returns True if the string contains any surrogate pairs chars, false otherwise.
 */
export function isSurrogatePair(value: string): boolean {
    return typeof value === "string" && vtsIsSurrogatePair(value);
  }
  