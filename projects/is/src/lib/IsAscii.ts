import { isAscii as vtsIsAscii } from '@fireflysemantics/validatorts'
/**
 * Checks if the string contains ASCII chars only.
 * If given value is not a string, then it returns false.
 * 
 * @param value The value being checked.
 * @param target The target value to perform the check against.
 * @return True if the value contains only letters and numbers, false otherwise.
 */
export function isAscii(value: string): boolean {
    return typeof value === "string" && vtsIsAscii(value);
}
