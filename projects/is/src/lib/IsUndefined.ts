import { isDefined } from './IsDefined'
/**
 * @param value The value being checked.
 * @returns True if the value is null or undefined, false otherwise.
 */
export function isUndefined<T>(value: T | null | undefined): value is T {
    return !isDefined(value);
}