/**
 * Checks if given value is not empty (!== '', !== null, !== undefined).
 * @param value The value being checked.
 * @return True if the value is not empty, false otherwise.
 */
export function isNotEmpty(value: any): boolean {
    return value !== "" && value !== null && value !== undefined;
}
