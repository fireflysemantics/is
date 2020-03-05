import { isLowercase as vtsIsLowerCase } from "@fireflysemantics/validatorts";

/**
 * Checks if the string is lowercase.
 * If given value is not a string, then it returns false.
 * 
 * @param value The value being checked.
 * @returns  True if the string is lowercase, false otherwise.
 */
export function isLowercase(value: string): boolean {
    return typeof value === "string" && vtsIsLowerCase(value);
  }
  