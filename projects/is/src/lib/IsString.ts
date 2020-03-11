
/**
 * Checks if argument is a real string.
 * @param value The value being checked.
 * @return True if the value is a string, false otherwise.
 * 
 */
export function isString(value: any): boolean {
    return value instanceof String || typeof value === "string";
}
