import { IsError } from "./IsError";
import { ValidationConstraintEnum } from "./ValidationConstraintEnum";
import { Types } from "./types";

/**
 * @param value The value being checked.
 * @return True if the value is a number and is positive, false otherwise.
 */
export function isPositive(value: number): boolean {
    return typeof value === Types.NUMBER && value > 0;
}

/**
 * Throws an `IsError` if the value is not positive.
 * 
 * @param value The value being checked.
 * @param field The name of the field being checked.
 * @param code The application / module code assigned to this error.
 * @throws {@link IsError} if the value is not a number instance.
 */
export function isPositiveError(value: any, field: string, code?: string): void {

    if (!isPositive(value)) {
        const message: string = `The field ${field} should be positive.  It is set to ${value}. `;
        throw new IsError(
            message, 
            value, 
            field, 
            ValidationConstraintEnum.IS_POSITIVE, 
            Types.NUMBER, 
            code);
    }
}
