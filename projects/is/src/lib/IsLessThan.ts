/**
 * Checks if the first number is value < target.
 * @param value The value being checked.
 * @param target The target value to perform the check against.
 * @return True if the value is less than the target, false otherwise.
 */
export function isLessThan(value: number, target: number): boolean {
    return typeof value === "number" && typeof target === "number" && value < target;
  }
  