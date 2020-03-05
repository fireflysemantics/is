import { isArray } from './IsArray'

/**
 * Checks if an array contains any items.
 * @param value The array being checked
 * @return True if the array is empty and false otherwise.
 */
export function isArrayEmpty(value: any[]) {
    if (!isArray(value)) return false;

    return value.length == 0 ? true : false;
}
