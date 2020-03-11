import { isUUID as vtsIsUUID } from "@fireflysemantics/validatorts";

/**
 * Checks if the string is a UUID (version 3, 4 or 5).
 * If given value is not a string, then it returns false.
 * 
 * @param value The value being checked.
 * @param version The UUID version (3, 4 or 5)
 * @returns True if the string is a UUID, false otherwise.
 */
export function isUUID(value: string, version?: 3 | 4 | 5): boolean {
    return typeof value === "string" && vtsIsUUID(value, version);
}
  