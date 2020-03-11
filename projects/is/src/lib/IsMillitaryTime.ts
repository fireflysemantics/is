import { isMatch } from "./IsMatch";

/**
 * Checks if the string represents a time without a given timezone in the format HH:MM (military)
 * If the given value does not match the pattern HH:MM, then it returns false.
 * 
 * @param value The value being checked.
 * @returns True if the string represents a time without a given timezone in the format HH:MM (military), false otherwise.
 */
export function isMilitaryTime(value: string): boolean {
    return isMatch(value, /^([01]\d|2[0-3]):?([0-5]\d)$/);
}
