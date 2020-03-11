import { isNumeric } from "@fireflysemantics/validatorts";
import { IsNumberOptions } from "./IsNumber";


/**
 * Checks if the string is numeric.
 * If given value is not a string, then it returns false.
 * 
 * @param value The value being checked.
 * @return True if the value is numeric, false otherwise.
 */
export function isNumberString(value: string, options: IsNumberOptions = {}): boolean {
    if (value === ('Infinity') || value === '-Infinity') {
      return !!options.allowInfinity;
    }
  
    if (value === ('NaN')) {
      return !!options.allowNaN;
    }
    return typeof value === "string" && isNumeric(value, options);
  }
  