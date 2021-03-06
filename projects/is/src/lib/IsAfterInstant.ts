/**
 * Checks if the value is a date that's after the specified date.
 * 
 * @param target The value being checked.
 * @param arg The target value to perform the check against.
 * @return True if the value date is after the target, false otherwise.
 */
export function isAfterInstant(target: Date, arg: Date): boolean {
  return target && target.getTime() > arg.getTime();
}
