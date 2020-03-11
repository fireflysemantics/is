import { isLengthInRange as vtsIsLengthInRange } from "./IsLengthInRange";

/**
 * Checks if the string's length is not more than target number. 
 * Note: this function takes into account surrogate pairs.
 * If given value is not a string, then it returns false.
 * 
 * @param value The value being checked.
 * @param target The maximum target length
 * @returns True if the string's length is not less than given target number, false otherwise.
 */
export function isLengthLessThan(value: string, target: number) {
    return typeof value === "string" && vtsIsLengthInRange(value, 0, target);
}