import { isCreditCard as vtsIsCreditCard } from "@fireflysemantics/validatorts";

/**
 * Checks if the string is a credit card.
 * If given value is not a string, then it returns false.
 * 
 * @param value The value being checked.
 * @return True if the string is a credit card, false otherwise.
 */
export function isCreditCard(value: string): boolean {
  return typeof value === "string" && vtsIsCreditCard(value);
}

