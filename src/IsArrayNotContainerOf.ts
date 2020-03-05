import { isArrayContainerOf } from "./IsArrayContainerOf";


/**
 * Checks if value array does not contain any of the given target values.
 * If null or undefined is given then this function returns false.
 * 
 * @param value The value container array being checked.
 * @param target The array of target values
 * @returns True if value array does not contain any of the given target values, false otherwise.
 */

export function isArrayNotContainerOf(value: any[], target: any[]) {
  if (!(value instanceof Array)) return false;

  return !isArrayContainerOf(value, target);
}
