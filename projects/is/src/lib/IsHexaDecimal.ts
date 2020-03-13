import { isHexadecimal as vtsIsHexadecimal } from "@fireflysemantics/validatorts";

/**
 * Checks if the string is a hexadecimal number.
 * If given value is not a string, then it returns false.
 * 
 * @param value The value being checked.
 * @returns  True if the string is a hexadecimal number, false otherwise.
 */
export function isHexadecimal(value: string): boolean {
    return typeof value === "string" && vtsIsHexadecimal(value)
}
  