/**
 * Checks if the value is a date that's before the target date.
 * 
 * @param value The value being checked.
 * @param target The target value to perform the check against.
 * @return True if the value date comes before the target date, false otherwise.
 */
export function isBeforeInstant(value: Date, target: Date): boolean {
    return value && value.getTime() < target.getTime();
  }
  