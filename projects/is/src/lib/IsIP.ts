import { isIP as vtsIsIP } from "@fireflysemantics/validatorts";

/**
 * Checks if the string is an IP (version 4 or 6).
 * If given value is not a string, then it returns false.
 * 
 * @param value The value being checked.
 * @returns  True if the string is an IP (version 4 or 6), false otherwise.
 */
export function isIP(value: string, version?: "4" | "6" ): boolean {
  return typeof value === "string" && vtsIsIP(value, version);
}
