import { isBase64 as vtsIsBase64 } from "@fireflysemantics/validatorts";

/**
 * Checks if a string is base64 encoded.
 * If given value is not a string, then it returns false.
 * 
 * @param value The value being checked.
 * @return True a the value string is base64 encoded, false otherwise.
 */
export function isBase64(value: string): boolean {
  return typeof value === "string" && vtsIsBase64(value);
}