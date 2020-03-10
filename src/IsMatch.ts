import { matches } from '@fireflysemantics/validatorts'

/**
 * Checks if string matches the pattern. 
 * Either matches('foo', /foo/i) or matches('foo', 'foo', 'i').
 * If given value is not a string, then it returns false.
 * 
 * @param value The value being checked.
 * @param pattern The match pattern
 * @param modifiers The modifiers
 * @returns True if string matches the pattern, false otherwise.
 */
export function isMatch(
    value: string,
    pattern: RegExp,
    modifiers?: string
  ): boolean {
    return (
      typeof value === "string" &&
      matches(value, pattern, modifiers)
    );
  }
  