/**
 * Checks if value array contains all values from the given target array.
 * If value is null, undefined, or not an array instance
 * then this function returns false.
 * 
 * The values check should be primitive javascript types (String, number, boolean, null, undefined, etc.).
 * and not Object instances.
 * 
 * Note that the check is value based.  For example the values 
 * in the array [2,3,4,2] are contained by [2,3,4] even though the latter
 * is shorter. 
 * 
 * @param value The value container array being checked.
 * @param target The array of target values
 * @returns True if array contains all values from the given target array, false otherwise.
 */
export function isArrayContainerOf(value: any[], target: any[]) {
    if (!(value instanceof Array)) return false;

    return !value || target.every(v => value.indexOf(v) !== -1);
}