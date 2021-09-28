/**
 * Checks if given value is empty (=== '', === null, === undefined).
 * @param value The value being checked.
 * @return True if the value is empty, false otherwise.
 */
export function isEmpty(value: any): boolean {
    return value === "" || value === null || value === undefined;
}
