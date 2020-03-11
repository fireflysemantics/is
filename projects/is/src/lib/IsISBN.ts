import { isISBN as vtsIsISBN } from "@fireflysemantics/validatorts";

/**
 * Checks if the string is an ISBN (version 10 or 13).
 * If given value is not a string, then it returns false.
 * 
 * @param value The value being checked.
 * @returns  True if the string is an ISBN, false otherwise.
 */
export function isISBN(value: string, version?: "10" | "13"): boolean {
    return typeof value === "string" && vtsIsISBN(value, version);
}
  