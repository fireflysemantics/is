import { isPositive } from "./IsPositive";

/**
 * Checks if the value is a negative number.
 * @param value The value being checked.
 * @return True if the value is < 0, false otherwise.
 */
export function isNegative(value: number): boolean {
    return !isPositive(value);
}
