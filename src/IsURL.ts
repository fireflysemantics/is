import { IsURLOptions, isURL as vtsIsURL } from "@fireflysemantics/validatorts";

/**
 * Checks if the string is an url.
 * If given value is not a string, then it returns false.
 * 
 * @param value The value being checked.
 * @param options The optional configuration options {@link ValidatorJS.IsURLOptions}
 * @returns True if the string is an url, false otherwise.
 */
export function isURL(value: string, options?: IsURLOptions): boolean {
    return typeof value === "string" && vtsIsURL(value, options);
}

