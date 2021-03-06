import { isArrayEmpty } from "./IsArrayEmpty";

/**
 * Checks if given array is not empty.
 * If null or undefined is given then this function returns false.
 * 
 * @param value The array being checked.
 * @returns True if given array is not empty, false otherwise.
 */
export function isArrayNotEmpty(value: any[]) {
  return !isArrayEmpty(value);
}
