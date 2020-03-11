import { isAlphaNumeric as vtsIsAlphaNumeric} from "@fireflysemantics/validatorts";

/**
 * Checks if the string contains only letters and numbers.
 * If given value is not a string, then it returns false.
 * 
 * @param value The value being checked.
 * @return True if the value contains only letters and numbers, false otherwise.
 */
export function isAlphaNumeric(value: string): boolean {
    return typeof value === "string" && vtsIsAlphaNumeric(value);
}  