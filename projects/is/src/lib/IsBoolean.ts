import { IsError } from './IsError'
import { Types } from './types'
import { ValidationConstraintEnum } from './ValidationConstraintEnum'

/**
 * Checks if the argument is a real boolean.
 * @param value The value being checked.
 * @returns True if the argument is an instance of Boolean.
 */
export function isBoolean(value: any): boolean {
    return value instanceof Boolean || typeof value === "boolean";
}

/**
 * Throws an `IsError` if the value does not pass the `isBoolean` check.
 * @param value The value being checked.
 * @param field The name of the field being checked.
 * @param code The application / module code assigned to this error.
 * @throws IsError if the value is not a Boolean instance.
 * @returns false if an {@link IsError} is not thrown
 */
export function isBooleanError(value: any, field: string, code?: string): boolean {
    if (!isBoolean(value)) {
        const message: string =
            `The ${value} valued field ${field} should be a boolean.`
        throw new IsError(
            message, 
            value, 
            field, 
            ValidationConstraintEnum.IS_BOOLEAN, 
            Types.BOOLEAN, 
            code)
    }
    return false
}