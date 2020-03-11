import { isUppercase as vtsIsUppercase } from "@fireflysemantics/validatorts";

/**
 * Checks if the string is uppercase.
 * If given value is not a string, then it returns false.
 * 
 * @param value The value being checked.
 * @returns True if the string is uppercase, false otherwise. 
 */
export function isUppercase(value: string): boolean {
    return typeof value === "string" && vtsIsUppercase(value);
  }
  