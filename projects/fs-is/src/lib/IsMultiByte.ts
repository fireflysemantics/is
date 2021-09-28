import { isMultibyte as vtsIsMultibyte} from "@fireflysemantics/validatorts";

/**
 * Checks if the string contains one or more multibyte chars.
 * If given value is not a string, then it returns false.
 * 
 * @param value The value being checked.
 * @returns True if the string contains one or more multibyte chars, false otherwise.
 */
export function isMultibyte(value: string): boolean {
    return typeof value === "string" && vtsIsMultibyte(value);
  }
  