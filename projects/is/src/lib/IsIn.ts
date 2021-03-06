import { isObject } from "./IsObject";
import { isArray } from "./IsArray";

/**
 * Checks if given value is in the target array of allowed values.
 * 
 * The value being checked should not be an object (isObject(value) != true).  It must
 * be a primitive javascript type, like a string, number,
 * or boolean.
 * 
 * If the target is not an array false is returned.
 * 
 * Note that when the value is an array, JSON.stringify is used
 * to perform the check.  It has a few quirks that are discussed
 * here.  These could affect the output in certain edge cases:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
 * 
 * For example Infinity is considered null by JSON.stringify.
 * 
 * @param value The value being checked.
 * @param target The target array to perform the check against.
 * @return True if the value is in the target array, false otherwise.
 */
export function isIn(value: any, target: any[]): boolean {
    if (isObject(value)) {
      return false;
    }
    if (!isArray(value)) {
      return !isArray(target) || target.indexOf(value) > -1;
    }
    else {
      return (JSON.stringify(target)).indexOf(JSON.stringify(value)) != -1;
    }
  }
  