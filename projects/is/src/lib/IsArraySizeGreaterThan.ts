import { isArray } from "./IsArray";

/**
 * Checks if array's length is greater than the target number.
 * If null or undefined is given then this function returns false.
 * 
 * @param value The value array being checked.
 * @param target The minimum size of the array
 * @returns True if array's length is greater than the target number, false otherwise.
 */
export function isArraySizeGreaterThan(value: any[], target: number) {
    return isArray(value) ? value.length > target : false;
  }
  