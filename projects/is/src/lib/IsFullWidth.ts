import { isFullWidth as vtsIsFullWidth } from "@fireflysemantics/validatorts";

/**
 * Checks if the string contains any full-width chars.
 * If given value is not a string, then it returns false.
 * 
 * @param value The value being checked.
 * @returns  True if the string contains full-width characters, false otherwise.
 */
export function isFullWidth(value: string): boolean {
  return typeof value === "string" && vtsIsFullWidth(value);
}