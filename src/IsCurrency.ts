import { IsCurrencyOptions, isCurrency as vtsIsCurrency } from "@fireflysemantics/validatorts";

/**
 * Checks if the string is a valid currency amount.
 * If given value is not a string, then it returns false.
 * 
 * @param value The value being checked.
 * @param options The options configuration {@link IsCurrencyOptions}
 * @return True if the string is a valid currency amount, false otherwise.
 */
export function isCurrency(
    value: string,
    options?: IsCurrencyOptions
): boolean {
    return typeof value === "string" && vtsIsCurrency(value, options);
}