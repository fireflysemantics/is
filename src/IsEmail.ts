import { IsEmailOptions as vtsIsEmailOptions, isEmail as vtsIsEmail } from "@fireflysemantics/validatorts";

/**
 * Checks if the string is an email.
 * If given value is not a string, then it returns false.
 * 
 * @param value The value being checked.
 * @param options The options configuration {@link IsEmailOptions}
 * @return True if the string is an email, false otherwise.
 */
export function isEmail(value: string, options?: vtsIsEmailOptions): boolean {
    return typeof value === "string" && vtsIsEmail(value, options);
}

export type IsEmailOptions = vtsIsEmailOptions