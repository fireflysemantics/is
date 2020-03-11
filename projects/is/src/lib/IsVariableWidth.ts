import { isVariableWidth as vtsIsVariableWidth } from "@fireflysemantics/validatorts";

/**
 * Checks if the string contains variable-width chars.
 * If given value is not a string, then it returns false.
 * 
 * @param value The value being checked.
 * @returns  True if the string contains variable-width chars, false otherwise.
 */
export function isVariableWidth(value: string): boolean {
    return typeof value === "string" && vtsIsVariableWidth(value);
}
  