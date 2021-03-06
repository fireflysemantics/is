/**
 * Checks if the value is a date occurs at the exact same time
 * as the target date.
 * 
 * @param value The value being checked.
 * @param target The target value to perform the check against.
 * @return True if the value date occurs at the exact same time as the target date, false otherwise.
 */
export function isSameInstant(value: Date, target: Date): boolean {
    return value && value.getTime() === target.getTime();
  }
  