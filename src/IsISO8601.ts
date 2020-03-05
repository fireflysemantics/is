import { isISO8601 as vtsIsISO8601 } from "@fireflysemantics/validatorts";

/**
 * Checks if the string is a valid ISO 8601 date.
 * If given value is not a string, then it returns false.
 * 
 * @param value The value being checked.
 * @returns  True if the string a valid ISO 8601, false otherwise.
 */
export function isISO8601(value: string): boolean {
  return typeof value === "string" && vtsIsISO8601(value);
}
