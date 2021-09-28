import { IsError } from './IsError'
import { Types } from './types'
import { ValidationConstraintEnum } from './ValidationConstraintEnum'

//TODO - This should probably be moved to @fireflysemantics/validatorts
/**
 * IsNumberOptions.
 */
export interface IsNumberOptions {
    allowNaN?: boolean;
    allowInfinity?: boolean;
}

/**
 * Default options for IsNumber
 */
export const IS_NUMBER_OPTIONS_DEFAULTS:IsNumberOptions = {
     allowNaN: false, 
     allowInfinity: true 
}

/**
 * Check if a given value is a number.
 * 
 * Default `IsNumberOptions` allow 
 * `-Infinity, Infinity` but disallow `NaN`.
 * 
 * @param target The value being checked.
 * @param options The optional configuration {@link IsNumberOptions}.
 * @return True if the value is a number, false otherwise.
 */
export function isNumber(target: any,
    options: IsNumberOptions = IS_NUMBER_OPTIONS_DEFAULTS): boolean {
    if (target === Infinity || target === -Infinity) {
      return !!options.allowInfinity;
    }
  
    if (Number.isNaN(target)) {
      return !!options.allowNaN;
    }
    return Number.isFinite(target);
  }

/**
 * Utility method for throwing an error if the {@link isNumber} test fails.
 * 
 * @param target The target value being checked
 * @param field The name of the field containing the number
 * @param code Optional nervous system code
 * @param options Optional {@link IsNumberOptions} instance.
 * @throws IsError if the target is not a number
 * @returns false if an {@link IsError} is not thrown
 */
export function isNumberError(target: number, field: string, code?: string, options?:IsNumberOptions): boolean {
    const o = options ? options : IS_NUMBER_OPTIONS_DEFAULTS
  
    if (!isNumber(target)) {
      const message: string = 
            `The field ${field} is not a number.  
             The options used to perform the check were ${JSON.stringify(o)}.`
      throw new IsError(message, target, field, ValidationConstraintEnum.IS_NUMBER, Types.NUMBER,  code)
    }
    return false
}