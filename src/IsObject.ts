import { isArray } from './IsArray'
import { isDefined } from './IsDefined'

/**
 * Checks if the instance is defined, is not an array, and
 * an object (typeof value === 'object').  
 * @param value The value being checked.
 * @return True if the value is an instance of the enum, false otherwise.
 */
export function isObject(value: any): boolean {
  if (isArray(value)) {
    return false;
  }
  return isDefined(value) ? typeof value === 'object' : false;
}


