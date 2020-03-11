import { IsError } from "./IsError";
import { ValidationConstraintEnum } from "./ValidationConstraintEnum";
import { Types } from "./types";

/**
 * Checks if the value is >= 0.
 * @param value The value being checked.
 * @return True if the value is a number not negative, false otherwise.
 */
export function isNotNegative(value: number): boolean {
    return typeof value === "number" && value >= 0;
}

/**
 * Throws an `IsError` if the value is negative.
 * @param value The value being checked.
 * @param field The name of the field being checked.
 * @param code The application / module code assigned to this error.
 * @throws IsError if the value is not a Boolean instance.
 */
export function isNotNegativeError(value: any, field: string, code?: string): void {

    if (!isNotNegative(value)) {
        const message: string = `The field ${field} should not be negative.  It is set to ${value}. `;
        throw new IsError(
            message,
            value,
            field,
            ValidationConstraintEnum.IS_NOT_NEGATIVE,
            Types.NUMBER,
            code);
    }
}