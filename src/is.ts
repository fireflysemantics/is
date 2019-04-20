import { isDivisibleBy as vjsIsDivisibleBy } from "validator";
import { isFullWidth as vjsIsFullWidth } from "validator";
import { isBoolean as vjsIsBoolean } from "validator";
import { isNumeric as vjsIsNumeric } from "validator";
import { contains as vjsContains } from "validator";
import { isAlpha as vjsIsAlpha } from "validator";
import { isAlphanumeric as vjsIsAlphaNumeric } from "validator";
import { isAscii as vjsIsAscii } from "validator";
import { isBase64 as vjsIsBase64 } from "validator";
import { isByteLength as vjsIsByteLength } from "validator";
import { isCreditCard as vjsIsCreditCard } from "validator";
import { isCurrency as vjsIsCurrency } from "validator";
import { isEmail as vjsIsEmail } from "validator";
import { isFQDN as vjsIsFQDN } from "validator";
import { isHalfWidth as vjsIsHalfWidth } from "validator";
import { isVariableWidth as vjsIsVariableWidth } from "validator";
import { isHexColor as vjsIsHexColor } from "validator";
import { isHexadecimal as vjsIsHexadecimal } from "validator";
import { isIP as vjsIsIP } from "validator";
import { isISBN as vjsIsISBN } from "validator";
import { isISIN as vjsIsISIN } from "validator";
import { isISO8601 as vjsIsISO8601 } from "validator";
import { isJSON as vjsIsJSON } from "validator";
import { isLowercase as vjsIsLowercase } from "validator";
import { isMobilePhone as vjsIsMobilePhone } from "validator";
import { isMongoId as vjsIsMongoId } from "validator";
import { isMultibyte as vjsIsMultibyte } from "validator";
import { isSurrogatePair as vjsIsSurrogatePair } from "validator";
import { isURL as vjsIsURL } from "validator";
import { isUUID as vjsIsUUID } from "validator";
import { isUppercase as vjsIsUppercase } from "validator";
import { isLength as vjsIsLength } from "validator";
import { matches as vjsMatches } from "validator";
/**
 * Import / Reexport
 */
import { NUMBER_TYPE } from './types';
export { NUMBER_TYPE } from './types';
import { BOOLEAN_TYPE } from './types';
export { BOOLEAN_TYPE } from './types';

import { constraintName as cn} from './utilities';
export { constraintName } from './utilities';

/**
 * IsNumberOptions.
 */
export interface IsNumberOptions {
  allowNaN?: boolean;
  allowInfinity?: boolean;
}

/**
 * IsCurrencyOptions.
 */
export interface IsCurrencyOptions {
  symbol?: string;
  require_symbol?: boolean;
  allow_space_after_symbol?: boolean;
  symbol_after_digits?: boolean;
  allow_negatives?: boolean;
  parens_for_negatives?: boolean;
  negative_sign_before_digits?: boolean;
  negative_sign_after_digits?: boolean;
  allow_negative_sign_placeholder?: boolean;
  thousands_separator?: string;
  decimal_separator?: string;
  allow_space_after_digits?: boolean;
}

/**
 * IsURLOptions.
 */
export interface IsURLOptions {
  protocols?: string[];
  require_tld?: boolean;
  require_protocol?: boolean;
  require_valid_protocol?: boolean;
  allow_underscores?: boolean;
  host_whitelist?: false | string[];
  host_blacklist?: false | string[];
  allow_trailing_dot?: boolean;
  allow_protocol_relative_urls?: boolean;
}

/**
 * IsEmailOptions.
 */
export interface IsEmailOptions {
  allow_display_name?: boolean;
  allow_utf8_local_part?: boolean;
  require_tld?: boolean;
}

/**
 *  IsFQDNOptions
 */
export interface IsFQDNOptions {
  require_tld?: boolean;
  allow_underscores?: boolean;
  allow_trailing_dot?: boolean;
}

/**
 * @param message The error message
 * @param value The value that violates the constraint
 * @param field The name of the field
 * @param type The expected type for the field
 * @param constraint The name of the constraint violated
 * @param code The application or module code for the error
 */
export class IsError extends Error {
  constructor(
    public message:string,
    public value: any, 
    public field?:string, 
    public type?: string,
    public constraint?: string,
    public code?:string) {
      super(message);
      this.name = 'IsError';
      Object.setPrototypeOf(this, IsError.prototype);      
  }
}

/**
 * Checks if the argument is in the range of the min max parameters.
 * @param value The value being checked.
 * @param min The min parameter
 * @param max The max parameter
 * @returns True if the argument is in range.
 * @throws Error if the min is not a number
 * @throws Error if the max is not a number
 */
export function isNumberInRange(value: any, min:number, max:number): boolean {
  if (!isNumber(min)) {
    throw new Error(`The min argument must be an number. It is set to ${min}.`);
  }
  if (!isNumber(max)) {
    throw new Error(`The max argument must be an number. It is set to ${min}.`);
  }

  return (value >= min && value <= max);
}

export function isNumberInRangeError(value: number, min:number, max:number, field:string, code?: string):void {
  const CONSTRAINT = cn(arguments.callee.name);
 
  if (!isNumberInRange(value, min, max)) {
    const message:string = `The field ${field} is not in range [${min}, ${max}].  It is set to ${value}. `;
    throw new IsError(message, value, field, NUMBER_TYPE, CONSTRAINT, code);
  }
}

/**
 * Checks if the argument is a real boolean.
 * @param value The value being checked.
 * @returns True if the argument is an instance of Boolean.
 */
export function isBoolean(value: any): boolean {
  return value instanceof Boolean || typeof value === "boolean";
}

/**
 * Throws an `IsError` if the value is not a `Boolean` instance.
 * @param value The value being checked.
 * @param field The name of the field being checked.
 * @param code The application / module code assigned to this error.
 * @throws IsError if the value is not a Boolean instance.
 */
export function isBooleanError(value: any, field:string, code?: string): void {
  const CONSTRAINT = cn(arguments.callee.name);
  if (!isBoolean(value)) {
    const message:string = `The field ${field} should be a boolean valued.  It is set to ${value}. `;
    throw new IsError(message, value, field, BOOLEAN_TYPE, CONSTRAINT, code);
  }
}


/**
 * Checks if a argument is an array
 * @param value The value being checked.
 * @return True if the value is an instance of an array, false otherwise.
 */
export function isArray(value: any): boolean {
  return value instanceof Array;
}

/**
 * Checks if an array contains any items.
 * @param value The array being checked
 * @return True if the array is empty and false otherwise.
 */
export function isArrayEmpty(value: any[]) {
  if (!isArray(value)) return false;

  return value.length == 0 ? true : false;
}

/**
 * @param value The value being checked.
 * @returns True if the value is strictly `undefined`.not null or undefined, false otherwise.
 *
 * See https://stackoverflow.com/questions/51003292/exporting-utility-functions-in-typescript/51004236#51004236
 * for an implementation reference.
 */
export function isDefined<T>(value: T | null | undefined): value is T {
  return value != null; //This checks for undefined automatically.
}

/**
 * @param value The value being checked.
 * @returns True if the value is null or undefined, false otherwise.
 */
export function isUndefined<T>(value: T | null | undefined): value is T {
  return !isDefined(value);
}


/**
 * Checks if argument is date.
 * @param value The date being checked.
 * @return True if the date value is a real date, false otherwise.
 */
export function isDate(value: any): boolean {
  return value instanceof Date && !isNaN(value.getTime());
}

/**
 * Checks if argument is a real string.
 * @param value The value being checked.
 * @return True if the value is a string, false otherwise.
 * 
 */
export function isString(value: any): boolean {
  return value instanceof String || typeof value === "string";
}

/**
 * Checks if argument is a ISO 8601 Date String.
 * 
 * Such a string is 24 ((YYYY-MM-DDTHH:mm:ss.sssZ) 
 * or 
 * 27 (±YYYYYY-MM-DDTHH:mm:ss.sssZ) 
 * 
 * characters long.
 * 
 * @param value The value being checked.
 * @return True if the value is an instance of an ISOString date.
 */
export function isISODateString(value: any): boolean {
  const regex = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d(?:\.\d+)?(?:Z|\+[0-2]\d(?:\:[0-5]\d)?)?/g;
  return isString(value) && regex.test(value);
}


/**
 * Checks if a given value is an enum 
 * (The value is contained in a property on the target object).
 * @param value The value being checked.
 * @param target The enum instance
 * @return True if the value is an instance of the enum, false otherwise.
 */
export function isEnum(value: any, target: any): boolean {
  return Object.values(target).indexOf(value) >= 0;
}

/**
 * Checks if the instance is defined, is not an array, and
 * an object (typeof value === 'object').  
 * @param value The value being checked.
 * @return True if the value is an instance of the enum, false otherwise.
 */
export function isObject(value: any): boolean {
  if (isArray(value)) {
    return false;
  }
  return isDefined(value) ? typeof value === 'object' : false;
}

/**
 * Checks if a given value is a number.
 * 
 * Default `IsNumberOptions` allow `-Infinity, Infinity` but disallow `NaN`.
 * 
 * @param value The value being checked.
 * @param options The optional configuration {@link IsNumberOptions}.
 * @return True if the value is a number, false otherwise.
 */
export function isNumber(value: any, 
                         options: IsNumberOptions = {  allowNaN:false, allowInfinity: true}): boolean {
  if (value === Infinity || value === -Infinity) {
    return !!options.allowInfinity;
  }

  if (Number.isNaN(value)) {
    return !!options.allowNaN;
  }
  return Number.isFinite(value);
}

/**
 * Checks if value is an integer.
 * @param value The value being checked.
 * @return True if the value is an integer, false otherwise.
 */
export function isInt(val: number): boolean {
  return Number.isInteger(val);
}

/**
 * Checks if value using a ("===") the comparison.
 * @param value The value being checked.
 * @param target The target value to perform the check against.
 * @return True if the value equals the target, false otherwise.
 */
export function isEqualTo(value: any, target: any): boolean {
  return value === target;
}

/**
 * Checks if value does not match ("!==") the comparison.
 * @param value The value being checked.
 * @param target The target value to perform the check against.
 * @return True if the value does not equal the target, false otherwise.
 */
export function isNotEqualTo(value: any, target: any): boolean {
  return value !== target;
}

/**
 * Checks if given value is empty (=== '', === null, === undefined).
 * @param value The value being checked.
 * @return True if the value is empty, false otherwise.
 */
export function isEmpty(value: any): boolean {
  return value === "" || value === null || value === undefined;
}

/**
 * Checks if given value is not empty (!== '', !== null, !== undefined).
 * @param value The value being checked.
 * @return True if the value is not empty, false otherwise.
 */
export function isNotEmpty(value: any): boolean {
  return value !== "" && value !== null && value !== undefined;
}

/**
 * Checks if given value is in the target array of allowed values.
 * 
 * The value being checked should not be an object (isObject(value) != true).  It must
 * be a primitive javascript type, like a string, number,
 * or boolean.
 * 
 * If the target is not an array false is returned.
 * 
 * Note that when the value is an array, JSON.stringify is used
 * to perform the check.  It has a few quirks that are discussed
 * here.  These could affect the output in certain edge cases:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
 * 
 * For example Infinity is considered null by JSON.stringify.
 * 
 * @param value The value being checked.
 * @param target The target array to perform the check against.
 * @return True if the value is in the target array, false otherwise.
 */
export function isIn(value: any, target: any[]): boolean {
  if (isObject(value)) {
    return false;
  }
  if (!isArray(value)) {
    return !isArray(target) || target.indexOf(value)>-1;
  }
  else {
    return (JSON.stringify(target)).indexOf(JSON.stringify(value)) != -1;
  }
}

/**
 * Checks if given value is in the target array of allowed values.
 * 
 * @param value The value being checked.
 * @param target The target value to perform the check against.
 * @return True if the value is not in the target array, false otherwise.
 */
export function isNotIn(value: any, target: any[]): boolean {
  return !isArray(target) || !isIn(value, target);
}

/**
 * Checks if the value is the value that is divisible by the target
 * without producing a remainder.
 * 
 * @param value The value being checked.
 * @param target The target value to perform the check against.
 * @return True if the value is divisible by the target, false otherwise.
 */
export function isDivisibleBy(value: number, target: number): boolean {
  return (
    typeof value === "number" &&
    typeof target === "number" &&
    vjsIsDivisibleBy(String(value), target)
  );
}

/**
 * Checks if the value is > 0.
 * @param value The value being checked.
 * @return True if the value is a number and is positive, false otherwise.
 */
export function isPositive(value: number): boolean {
  return typeof value === "number" && value > 0;
}

/**
 * Throws an `IsError` if the value is not positive.
 * @param value The value being checked.
 * @param field The name of the field being checked.
 * @param code The application / module code assigned to this error.
 * @throws IsError if the value is not a Boolean instance.
 */
export function isPositiveError(value: any, field:string, code?: string): void {
  const CONSTRAINT = cn(arguments.callee.name);

  if (!isPositive(value)) {
    const message:string = `The field ${field} should be positive.  It is set to ${value}. `;
    throw new IsError(message, value, field, NUMBER_TYPE, CONSTRAINT, code);
  }
}

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
export function isNotNegativeError(value: any, field:string, code?: string): void {
  const CONSTRAINT = cn(arguments.callee.name);

  if (!isNotNegative(value)) {
    const message:string = `The field ${field} should not be negative.  It is set to ${value}. `;
    throw new IsError(message, value, field, NUMBER_TYPE, CONSTRAINT, code);
  }
}

/**
 * Checks if the value is a negative number.
 * @param value The value being checked.
 * @return True if the value is < 0, false otherwise.
 */
export function isNegative(value: number): boolean {
  return !isPositive(value);
}

/**
 * Checks if value > target.
 * @param value The value being checked.
 * @param target The target value to perform the check against.
 * @return True if the value is greater than the target, false otherwise.
 */
export function isGreaterThan(value: number, target: number): boolean {
  return typeof value === "number" && typeof target === "number" && value > target;
}

export function isGreaterThanError(value: number, target: number, field:string, code?: string):void {
  const CONSTRAINT = cn(arguments.callee.name);
 
  if (!isGreaterThan(value, target)) {
    const message:string = `The value (${value}) of the field ${field} should be greater ${target}.`;
    throw new IsError(message, value, field, NUMBER_TYPE, CONSTRAINT, code);
  }
}



/**
 * Checks if the first number is value < target.
 * @param value The value being checked.
 * @param target The target value to perform the check against.
 * @return True if the value is less than the target, false otherwise.
 */
export function isLessThan(value: number, target: number): boolean {
  return typeof value === "number" && typeof target === "number" && value < target;
}

/**
 * Checks if the value is a date that's after the specified date.
 * 
 * @param value The value being checked.
 * @param target The target value to perform the check against.
 * @return True if the value date is after the target, false otherwise.
 */
export function isAfterInstant(value: Date, target: Date): boolean {
  return value && value.getTime() > target.getTime();
}

/**
 * Checks if the value is a date that's before the target date.
 * 
 * @param value The value being checked.
 * @param target The target value to perform the check against.
 * @return True if the value date comes before the target date, false otherwise.
 */
export function isBeforeInstant(value: Date, target: Date): boolean {
  return value && value.getTime() < target.getTime();
}

/**
 * Checks if the value is a date occurs at the exact same time
 * as the target date.
 * 
 * @param value The value being checked.
 * @param target The target value to perform the check against.
 * @return True if the value date occurs at the exact same time as the target date, false otherwise.
 */
export function isSameInstant(value: Date, target: Date): boolean {
    return value && value.getTime() === target.getTime();
}
  

/**
 * Checks if a string is a boolean.
 * If given value is not a string, then it returns false.
 * 
 * @param value The value being checked.
 * @param target The target value to perform the check against.
 * @return True if the value date comes before the target date, false otherwise.
 */
export function isBooleanString(value: string): boolean {
  return typeof value === "string" && vjsIsBoolean(value);
}

/**
 * Checks if the string is numeric.
 * If given value is not a string, then it returns false.
 * 
 * @param value The value being checked.
 * @return True if the value is numeric, false otherwise.
 */
export function isNumberString(value: string, options: IsNumberOptions = {}): boolean {
  if (value === ('Infinity')  || value === '-Infinity') {
    return !!options.allowInfinity;
  }

  if (value === ('NaN')) {
    return !!options.allowNaN;
  }
  return typeof value === "string" && vjsIsNumeric(value);
}

/**
 * Checks if the value is a substring of the seed.
 * If given value is not a string, then it returns false.
 * 
 * @param value The value being checked.
 * @param target The target value to perform the check against.
 * @return True if the value is a substring of the target, false otherwise.
 */
export function isSubString(value: string, target: string): boolean {
  return typeof value === "string" && vjsContains(target, value);
}

/**
 * Checks if the value is not a substring of the target.
 * If given value is not a string, then it returns false.
 * 
 * @param value The value being checked.
 * @param target The target value to perform the check against.
 * @return True if the value is a not a substring of the target, false otherwise.
 */
export function isNotSubString(value: string, target: string): boolean {
  return typeof value === "string" && !vjsContains(target, value);
}

/**
 * Checks if the string value contains the target.
 * If given value is not a string, then it returns false.
 * 
 * @param value The value being checked.
 * @param target The target value to perform the check against.
 * @return True if the value is a super string of the target, false otherwise.
 */
export function isSuperString(value: string, target: string): boolean {
  return typeof value === "string" && vjsContains(value, target);
}

/**
 * Checks if the string value does not contain the target.
 * If given value is not a string, then it returns false.
 * 
 * @param value The value being checked.
 * @param target The target value to perform the check against.
 * @return True if the value is a not super string of the target, false otherwise.
 */
export function isNotSuperString(value: string, target: string): boolean {
  return typeof value === "string" && !vjsContains(value, target);
}

/**
 * Checks if the string contains only letters (a-zA-Z).
 * If given value is not a string, then it returns false.
 * 
 * @param value The value being checked.
 * @return True if the value contains only letters (a-zA-Z), false otherwise.
 */
export function isAlpha(value: string): boolean {
  return typeof value === "string" && vjsIsAlpha(value);
}

/**
 * Checks if the string contains only letters and numbers.
 * If given value is not a string, then it returns false.
 * 
 * @param value The value being checked.
 * @return True if the value contains only letters and numbers, false otherwise.
 */
export function isAlphanumeric(value: string): boolean {
  return typeof value === "string" && vjsIsAlphaNumeric(value);
}

/**
 * Checks if the string contains ASCII chars only.
 * If given value is not a string, then it returns false.
 * 
 * @param value The value being checked.
 * @param target The target value to perform the check against.
 * @return True if the value contains only letters and numbers, false otherwise.
 */
export function isAscii(value: string): boolean {
  return typeof value === "string" && vjsIsAscii(value);
}

/**
 * Checks if a string is base64 encoded.
 * If given value is not a string, then it returns false.
 * 
 * @param value The value being checked.
 * @return True a the value string is base64 encoded, false otherwise.
 */
export function isBase64(value: string): boolean {
  return typeof value === "string" && vjsIsBase64(value);
}

/**
 * Checks if the string's length (in bytes) falls in a range.
 * If given value is not a string, then it returns false.
 * 
 * @param value The value being checked.
 * @param min The min value to perform the check against.
 * @param max The max value to perform the check against.
 * @return True if the check passes, false otherwise.
 */
export function isByteLength(value: string, min: number, max?: number): boolean {
  return typeof value === "string" && vjsIsByteLength(value, min, max);
}

/**
 * Checks if the string is a credit card.
 * If given value is not a string, then it returns false.
 * 
 * @param value The value being checked.
 * @return True if the string is a credit card, false otherwise.
 */
export function isCreditCard(value: string): boolean {
  return typeof value === "string" && vjsIsCreditCard(value);
}

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
  return typeof value === "string" && vjsIsCurrency(value, options);
}

/**
 * Checks if the string is an email.
 * If given value is not a string, then it returns false.
 * 
 * @param value The value being checked.
 * @param options The options configuration {@link IsEmailOptions}
 * @return True if the string is an email, false otherwise.
 */
export function isEmail(value: string, options?: IsEmailOptions): boolean {
  return typeof value === "string" && vjsIsEmail(value, options);
}

/**
 * Checks if the string is a fully qualified domain name (e.g. domain.com).
 * If given value is not a string, then it returns false.
 * 
 * @param value The value being checked.
 * @param options The options configuration {@link IsFQDNOptions}
 * @return True if the string is a fully qualified domain name, false otherwise.
 */
export function isFQDN(value: string, options?: IsFQDNOptions): boolean {
  return typeof value === "string" && vjsIsFQDN(value, options);
}

/**
 * Checks if the string contains any full-width chars.
 * If given value is not a string, then it returns false.
 * 
 * @param value The value being checked.
 * @returns  True if the string contains full-width characters, false otherwise.
 */
export function isFullWidth(value: string): boolean {
  return typeof value === "string" && vjsIsFullWidth(value);
}

/**
 * Checks if the string contains any half-width chars.
 * If given value is not a string, then it returns false.
 * 
 * @param value The value being checked.
 * @returns  True if the string contains any half-width chars, false otherwise.
 */
export function isHalfWidth(value: string): boolean {
  return typeof value === "string" && vjsIsHalfWidth(value);
}

/**
 * Checks if the string contains variable-width chars.
 * If given value is not a string, then it returns false.
 * 
 * @param value The value being checked.
 * @returns  True if the string contains variable-width chars, false otherwise.
 */
export function isVariableWidth(value: string): boolean {
  return typeof value === "string" && vjsIsVariableWidth(value);
}

/**
 * Checks if the string is a hexadecimal color.
 * If given value is not a string, then it returns false.
 * 
 * @param value The value being checked.
 * @returns  True if the string is a hexadecimal color, false otherwise.
 */
export function isHexColor(value: string): boolean {
  return typeof value === "string" && vjsIsHexColor(value);
}

/**
 * Checks if the string is a hexadecimal number.
 * If given value is not a string, then it returns false.
 * 
 * @param value The value being checked.
 * @returns  True if the string is a hexadecimal number, false otherwise.
 */
export function isHexadecimal(value: string): boolean {
  return typeof value === "string" && vjsIsHexadecimal(value);
}

/**
 * Checks if the string is an IP (version 4 or 6).
 * If given value is not a string, then it returns false.
 * 
 * @param value The value being checked.
 * @returns  True if the string is an IP (version 4 or 6), false otherwise.
 */
export function isIP(value: string, version?: 4 | 6): boolean {
  return typeof value === "string" && vjsIsIP(value, version);
}

/**
 * Checks if the string is an ISBN (version 10 or 13).
 * If given value is not a string, then it returns false.
 * 
 * @param value The value being checked.
 * @returns  True if the string is an ISBN, false otherwise.
 */
export function isISBN(value: string, version?: 10 | 13): boolean {
  return typeof value === "string" && vjsIsISBN(value, version);
}

/**
 * Checks if the string is an ISIN (stock/security identifier).
 * If given value is not a string, then it returns false.
 * 
 * @param value The value being checked.
 * @returns  True if the string is an ISIN, false otherwise.
 */
export function isISIN(value: string): boolean {
  return typeof value === "string" && vjsIsISIN(value);
}

/**
 * Checks if the string is a valid ISO 8601 date.
 * If given value is not a string, then it returns false.
 * 
 * @param value The value being checked.
 * @returns  True if the string a valid ISO 8601, false otherwise.
 */
export function isISO8601(value: string): boolean {
  return typeof value === "string" && vjsIsISO8601(value);
}

/**
 * Checks if the string is valid JSON (note: uses JSON.parse).
 * If given value is not a string, then it returns false.
 */
export function isJSON(value: string): boolean {
  return typeof value === "string" && vjsIsJSON(value);
}

/**
 * Checks if the string is lowercase.
 * If given value is not a string, then it returns false.
 * 
 * @param value The value being checked.
 * @returns  True if the string is lowercase, false otherwise.
 */
export function isLowercase(value: string): boolean {
  return typeof value === "string" && vjsIsLowercase(value);
}

/**
 * Checks if the string is a mobile phone number (locale is one of ['zh-CN', 'zh-TW', 'en-ZA', 'en-AU', 'en-HK',
 * 'pt-PT', 'fr-FR', 'el-GR', 'en-GB', 'en-US', 'en-ZM', 'ru-RU', 'nb-NO', 'nn-NO', 'vi-VN', 'en-NZ']).
 * If given value is not a string, then it returns false.
 * 
 * @param value The value being checked.
 * @param options The optional configuration {@link ValidatorJS.MobilePhoneLocale}.
 * @return True if the string is a mobile phone number, false otherwise.
 */
export function isMobilePhone(value: string, locale: ValidatorJS.MobilePhoneLocale): boolean {
  return (typeof value === "string" && vjsIsMobilePhone(value, locale));
}

/**
 * Checks if the string is a valid hex-encoded representation of a MongoDB ObjectId.
 * If given value is not a string, then it returns false.
 * 
 * @param value The value being checked.
 * @returns True if the string is a valid hex-encoded representation of a MongoDB ObjectId, false otherwise.
 */
export function isMongoId(value: string): boolean {
  return typeof value === "string" && vjsIsMongoId(value);
}

/**
 * Checks if the string contains one or more multibyte chars.
 * If given value is not a string, then it returns false.
 * 
 * @param value The value being checked.
 * @returns True if the string contains one or more multibyte chars, false otherwise.
 */
export function isMultibyte(value: string): boolean {
  return typeof value === "string" && vjsIsMultibyte(value);
}

/**
 * Checks if the string contains any surrogate pairs chars.
 * If given value is not a string, then it returns false.
 * 
 * @param value The value being checked.
 * @returns True if the string contains any surrogate pairs chars, false otherwise.
 */
export function isSurrogatePair(value: string): boolean {
  return typeof value === "string" && vjsIsSurrogatePair(value);
}

/**
 * Checks if the string is an url.
 * If given value is not a string, then it returns false.
 * 
 * @param value The value being checked.
 * @param options The optional configuration options {@link ValidatorJS.IsURLOptions}
 * @returns True if the string is an url, false otherwise.
 */
export function isURL(value: string, options?: ValidatorJS.IsURLOptions): boolean {
  return typeof value === "string" && vjsIsURL(value, options);
}

/**
 * Checks if the string is a UUID (version 3, 4 or 5).
 * If given value is not a string, then it returns false.
 * 
 * @param value The value being checked.
 * @param version The UUID version (3, 4 or 5)
 * @returns True if the string is a UUID, false otherwise.
 */
export function isUUID(value: string, version?: 3 | 4 | 5): boolean {
  return typeof value === "string" && vjsIsUUID(value, version);
}

/**
 * Checks if the string is uppercase.
 * If given value is not a string, then it returns false.
 * 
 * @param value The value being checked.
 * @returns True if the string is uppercase, false otherwise. 
 */
export function isUppercase(value: string): boolean {
  return typeof value === "string" && vjsIsUppercase(value);
}

/**
 * Checks if the string's length falls in a range. Note: this function takes into account surrogate pairs.
 * If given value is not a string, then it returns false.
 * 
 * @param value The value being checked.
 * @param min The min value to perform the check against.
 * @param max The max value to perform the check against.
 * @return True if the check passes, false otherwise.
 */
export function isLengthInRange(value: string, min: number, max?: number): boolean {
  return (
    typeof value === "string" && vjsIsLength(value, min, max)
  );
}

/**
 * Checks if the string's length is not less than given target number. 
 * Note: this function takes into account surrogate pairs.
 * If given value is not a string, then it returns false.
 * 
 * @param value The value being checked.
 * @param target The minimum target length
 * @returns True if the string's length is not less than given target number, false otherwise.
 */
export function isLengthGreaterThan(value: string, target: number) {
  return typeof value === "string" && isLengthInRange(value, target);
}

/**
 * Checks if the string's length is not more than target number. 
 * Note: this function takes into account surrogate pairs.
 * If given value is not a string, then it returns false.
 * 
 * @param value The value being checked.
 * @param target The maximum target length
 * @returns True if the string's length is not less than given target number, false otherwise.
 */
export function isLengthLessThan(value: string, target: number) {
  return typeof value === "string" && isLengthInRange(value, 0, target);
}

/**
 * Checks if string matches the pattern. Either matches('foo', /foo/i) or matches('foo', 'foo', 'i').
 * If given value is not a string, then it returns false.
 * 
 * @param value The value being checked.
 * @param pattern The match pattern
 * @param modifiers The modifiers
 * @returns True if string matches the pattern, false otherwise.
 */
export function matches(
  value: string,
  pattern: RegExp,
  modifiers?: string
): boolean {
  return (
    typeof value === "string" &&
    vjsMatches(value, pattern, modifiers)
  );
}

/**
 * Checks if the string represents a time without a given timezone in the format HH:MM (military)
 * If the given value does not match the pattern HH:MM, then it returns false.
 * 
 * @param value The value being checked.
 * @returns True if the string represents a time without a given timezone in the format HH:MM (military), false otherwise.
 */
export function isMilitaryTime(value: string): boolean {
  return matches(value, /^([01]\d|2[0-3]):?([0-5]\d)$/);
}

/**
 * Checks if value array contains all values from the given target array.
 * If value is null, undefined, or not an array instance
 * then this function returns false.
 * 
 * The values check should be primitive javascript types (String, number, boolean, null, undefined, etc.).
 * and not Object instances.
 * 
 * Note that the check is value based.  For example the values 
 * in the array [2,3,4,2] are contained by [2,3,4] even though the latter
 * is shorter. 
 * 
 * @param value The value container array being checked.
 * @param target The array of target values
 * @returns True if array contains all values from the given target array, false otherwise.
 */

 export function isArrayContainerOf(value: any[], target: any[]) {
  if (!(value instanceof Array)) return false;

  return !value || target.every(v => value.indexOf(v) !== -1);
}

/**
 * Checks if value array does not contain any of the given target values.
 * If null or undefined is given then this function returns false.
 * 
 * @param value The value container array being checked.
 * @param target The array of target values
 * @returns True if value array does not contain any of the given target values, false otherwise.
 */

export function isNotArrayContainerOf(value: any[], target: any[]) {
  if (!(value instanceof Array)) return false;

  return !isArrayContainerOf(value, target);
}

/**
 * Checks if given array is not empty.
 * If null or undefined is given then this function returns false.
 * 
 * @param value The array being checked.
 * @returns True if given array is not empty, false otherwise.
 */
export function isArrayNotEmpty(value: any[]) {
  return !isArrayEmpty(value);
}

/**
 * Checks if array's length is greater than the target number.
 * If null or undefined is given then this function returns false.
 * 
 * @param value The value array being checked.
 * @param target The minimum size of the array
 * @returns True if array's length is greater than the target number, false otherwise.
 */
export function isArraySizeGreaterThan(value: any[], target: number) {
  return isArray(value) ? value.length > target : false;
}

/**
 * Checks if array's length is less than the target number.
 * If null or undefined is given then this function returns false.
 * 
 * @param value The value array being checked.
 * @param target The maximum size of the array
 * @returns True if array's length is less than the target number, false otherwise.
 */
export function isArraySizeLessThan(value: any[], target: number) {
  return isArray(value) ? value.length < target : false;
}

/**
 * Checks if all array's values are unique. Comparison for objects is reference-based.
 * If null or undefined is given then this function returns false.
 * 
 * @param value The array being checked.
 * @returns True if all array's values are unique, false otherwise.
 */
export function isArrayUnique(array: any[]) {
  if (!(array instanceof Array)) return false;

  const uniqueItems = array.filter((a, b, c) => c.indexOf(a) === b);
  return array.length === uniqueItems.length;
}

/**
 * Checks if the value is an instance of the specified object.
 * 
 * @param value The value array being checked.
 * @param target The target type constructor
 * @returns True if the value is an instance of the specified object, false otherwise.
 */
export function isInstanceOf(
  value: any,
  target: new (...args: any[]) => any
) {
  return (
    target &&
    typeof target === "function" &&
    value instanceof target
  );
}
