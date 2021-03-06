/**
 * @param value The value being checked.
 * @returns True if the value is strictly `undefined`.not null or undefined, false otherwise.
 *
 * See https://stackoverflow.com/questions/51003292/exporting-utility-functions-in-typescript/51004236#51004236
 * for an implementation reference.
 */
export function isDefined<T>(value: T | null | undefined): value is T {
    return value != null; //This checks for undefined automatically.
}
