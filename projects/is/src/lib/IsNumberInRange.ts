import { isNumberError } from "./IsNumber";
import { IsError } from "./IsError";
import { ValidationConstraintEnum } from "./ValidationConstraintEnum";
import { Types } from "./types";

/**
 * Checks if the argument is in the range of the min max parameters.
 * @param value The value being checked.
 * @param min The min parameter
 * @param max The max parameter
 * @throws {@link IsError} if min is not a number
 * @throws {@link IsError} if max is not a number
 * @returns True if the argument is in range.
 */
export function isNumberInRange(value: any, min: number, max: number): boolean {
    isNumberError(min, 'min')
    isNumberError(max, 'max')
    return (value >= min && value <= max);
  }
  
  
  export function isNumberInRangeError(value: number, min: number, max: number, field: string, code?: string): void {
  
    if (!isNumberInRange(value, min, max)) {
      const message: string = `The field ${field} is not in range [${min}, ${max}].  It is set to ${value}. `;
      throw new IsError(message, value, field, ValidationConstraintEnum.IS_NUMBER_IN_RANGE, Types.NUMBER, code);
    }
  }
  