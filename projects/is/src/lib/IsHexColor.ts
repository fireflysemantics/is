import { isHexColor as vtsIsHexColor } from "@fireflysemantics/validatorts";

/**
 * Checks if the string is a hexadecimal color.
 * If given value is not a string, then it returns false.
 * 
 * @param value The value being checked.
 * @returns  True if the string is a hexadecimal color, false otherwise.
 */
export function isHexColor(value: string): boolean {
  return typeof value === "string" && vtsIsHexColor(value)
}

