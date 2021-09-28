import { IsFQDNOptions as vtsIsFQDNOptions, isFQDN as vtsIsFQDN } from '@fireflysemantics/validatorts'

/**
 * Checks if the string is a fully qualified domain name (e.g. domain.com).
 * If given value is not a string, then it returns false.
 * 
 * @param value The value being checked.
 * @param options The options configuration {@link IsFQDNOptions}
 * @return True if the string is a fully qualified domain name, false otherwise.
 */
export function isFQDN(value: string, options?: vtsIsFQDNOptions): boolean {
    return typeof value === "string" && vtsIsFQDN(value, options);
}

/**
 * Reexport the options
 */
export type IsFQDNOptions = vtsIsFQDNOptions