import { isISIN as vtsIsISIN } from "@fireflysemantics/validatorts";

/**
 * Checks if the string is an ISIN (stock/security identifier).
 * If given value is not a string, then it returns false.
 * 
 * @param value The value being checked.
 * @returns  True if the string is an ISIN, false otherwise.
 */
export function isISIN(value: string): boolean {
    return typeof value === "string" && vtsIsISIN(value);
}