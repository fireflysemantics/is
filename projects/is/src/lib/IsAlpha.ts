import { isAlpha as vtsIsAlpha } from "@fireflysemantics/validatorts";

/**
 * Checks if the string contains only letters (a-zA-Z).
 * If given value is not a string, then it returns false.
 * 
 * @param value The value being checked.
 * @return True if the value contains only letters (a-zA-Z), false otherwise.
 */
export function isAlpha(value: string): boolean {
    return typeof value === "string" && vtsIsAlpha(value);
}
  