/**
 * Checks if the value is an instance of the specified object.
 * 
 * @param value The value array being checked.
 * @param target The target type constructor
 * @returns True if the value is an instance of the specified object, false otherwise.
 */
export function isInstanceOf(
    value: any,
    target: new (...args: any[]) => any
  ) {
    return (
      target &&
      typeof target === "function" &&
      value instanceof target
    );
  }
  