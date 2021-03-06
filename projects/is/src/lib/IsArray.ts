/**
 * Checks if a argument is an array
 * @param value The value being checked.
 * @return True if the value is an instance of an array, false otherwise.
 */
export function isArray(value: any): boolean {
    return value instanceof Array;
}