import { isDivisibleBy as vjsIsDivisibleBy } from '@fireflysemantics/validatorts'
import { isNumberError } from './IsNumber';
/**
 * Checks if the value is the value that is divisible by the target
 * without producing a remainder.
 * 
 * @param target The value being checked.
 * @param arg The target value to perform the check against.
 * @return True if the value is divisible by the target, false otherwise.
 */
export function isDivisibleBy(target: number, arg: number): boolean {
    isNumberError(target, 'target')
    isNumberError(arg, 'arg')
  return (
    vjsIsDivisibleBy(String(target), String(arg))
  );
}