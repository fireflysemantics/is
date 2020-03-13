import { contains } from "@fireflysemantics/validatorts";

/**
 * Checks if the value is a substring of the seed.
 * If given value is not a string, then it returns false.
 * 
 * @param value The value being checked.
 * @param target The target value to perform the check against.
 * @return True if the value is a substring of the target, false otherwise.
 */
export function isSubString(value: string, target: string): boolean {
    return typeof value === "string" && contains(target, value);
  }
  