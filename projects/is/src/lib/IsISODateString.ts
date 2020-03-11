import { isString } from "./IsString"

/**
 * Checks if argument is a ISO 8601 Date String.
 * 
 * Such a string is 24 ((YYYY-MM-DDTHH:mm:ss.sssZ) 
 * or 
 * 27 (±YYYYYY-MM-DDTHH:mm:ss.sssZ) 
 * 
 * characters long.
 * 
 * @param value The value being checked.
 * @return True if the value is an instance of an ISOString date.
 */
export function isISODateString(value: any): boolean {
    const regex = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d(?:\.\d+)?(?:Z|\+[0-2]\d(?:\:[0-5]\d)?)?/g;
    return isString(value) && regex.test(value)
}
  