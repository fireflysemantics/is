import { isJSON as vtsIsJSON} from "@fireflysemantics/validatorts";

/**
 * Checks if the string is valid JSON (note: uses JSON.parse).
 * If given value is not a string, then it returns false.
 */
export function isJSON(value: string): boolean {
    return typeof value === "string" && vtsIsJSON(value);
  }
  