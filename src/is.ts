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
 * Checks if the argument is a real boolean.
 * @param value The value being checked.
 * @returns True if the argument is an instance of Boolean.
 */
export function isBoolean(value: any): boolean {
  return value instanceof Boolean || typeof value === "boolean";
}

/**
 * Checks if an array contains any items.
 * @param a The array being checked
 * @return True if the array is empty and false otherwise.
 */
export function isArrayEmpty(a: any[]) {
  return a.length == 0 ? true : false;
}

/**
 * @param value The value being checked.
 * @returns True if the value is not null or undefined, false otherwise.
 *
 * See https://stackoverflow.com/questions/51003292/exporting-utility-functions-in-typescript/51004236#51004236
 * for an implementation reference.
 */
export function isDefined<T>(value: T | null | undefined): value is T {
  return value != null; //This checks for undefined automatically.
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
 */
export function isString(value: any): boolean {
  return value instanceof String || typeof value === "string";
}

/**
 * Checks if argument is a ISOString date.
 */
export function isDateString(value: any): boolean {
  const regex = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d(?:\.\d+)?(?:Z|\+[0-2]\d(?:\:[0-5]\d)?)?/g;
  return isString(value) && regex.test(value);
}

/**
 * Checks if a argument is an array
 */
export function isArray(value: any): boolean {
  return value instanceof Array;
}

/**
 * Checks if a given value is an enum
 */
export function isEnum(value: any, entity: any): boolean {
  const enumValues = Object.keys(entity).map(k => entity[k]);
  return enumValues.indexOf(value) >= 0;
}

/**
 * Checks if a given value is a number.
 */
export function isNumber(value: any, options: IsNumberOptions = {}): boolean {
  if (value === Infinity || value === -Infinity) {
    return options.allowInfinity;
  }

  if (Number.isNaN(value)) {
    return options.allowNaN;
  }

  return Number.isFinite(value);
}

/**
 * Checks if value is an integer.
 */
export function isInt(val: number): boolean {
  return Number.isInteger(val);
}

/**
 * Checks if value using a ("===") the comparison.
 */
export function isEqualTo(value: any, comparison: any): boolean {
  return value === comparison;
}

/**
 * Checks if value does not match ("!==") the comparison.
 */
export function isNotEqualTo(value: any, comparison: any): boolean {
  return value !== comparison;
}

/**
 * Checks if given value is empty (=== '', === null, === undefined).
 */
export function isEmpty(value: any): boolean {
  return value === "" || value === null || value === undefined;
}

/**
 * Checks if given value is not empty (!== '', !== null, !== undefined).
 */
export function isNotEmpty(value: any): boolean {
  return value !== "" && value !== null && value !== undefined;
}

/**
 * Checks if given value is in a array of allowed values.
 */
export function isIn(value: any, possibleValues: any[]): boolean {
  return (
    !(possibleValues instanceof Array) ||
    possibleValues.some(possibleValue => possibleValue === value)
  );
}

/**
 * Checks if given value not in a array of allowed values.
 */
export function isNotIn(value: any, possibleValues: any[]): boolean {
  return (
    !(possibleValues instanceof Array) ||
    !possibleValues.some(possibleValue => possibleValue === value)
  );
}

/**
 * Checks if value is a number that is divisible by the second argument.
 */
export function isDivisibleBy(value: number, num: number): boolean {
  return (
    typeof value === "number" &&
    typeof num === "number" &&
    vjsIsDivisibleBy(String(value), num)
  );
}

/**
 * Checks if the value is a positive number.
 */
export function isPositive(value: number): boolean {
  return typeof value === "number" && value > 0;
}

/**
 * Checks if the value is a negative number.
 */
export function isNegative(value: number): boolean {
  return typeof value === "number" && value < 0;
}

/**
 * Checks if the first number is greater than second.
 */
export function isGreaterThan(num: number, min: number): boolean {
  return typeof num === "number" && typeof min === "number" && num >= min;
}

/**
 * Checks if the first number is less than second.
 */
export function isLessThan(num: number, max: number): boolean {
  return typeof num === "number" && typeof max === "number" && num <= max;
}

/**
 * Checks if the value is a date that's after the specified date.
 */
export function isAfterInstant(date: Date, minDate: Date): boolean {
  return date && date.getTime() >= minDate.getTime();
}

/**
 * Checks if the value is a date that's before the specified date.
 */
export function isBeforeInstant(date: Date, maxDate: Date): boolean {
  return date && date.getTime() <= maxDate.getTime();
}

/**
 * Checks if a string is a boolean.
 * If given value is not a string, then it returns false.
 */
export function isBooleanString(value: string): boolean {
  return typeof value === "string" && vjsIsBoolean(value);
}

/**
 * Checks if the string is numeric.
 * If given value is not a string, then it returns false.
 */
export function isNumberString(value: string): boolean {
  return typeof value === "string" && vjsIsNumeric(value);
}

/**
 * Checks if the value is a substring of the seed.
 * If given value is not a string, then it returns false.
 */
export function isSubString(value: string, seed: string): boolean {
  return typeof value === "string" && vjsContains(seed, value);
}

/**
 * Checks if the value is not a substring of the seed.
 * If given value is not a string, then it returns false.
 */
export function isNotSubString(value: string, seed: string): boolean {
  return typeof value === "string" && !vjsContains(seed, value);
}

/**
 * Checks if the string is contains the seed.
 * If given value is not a string, then it returns false.
 */
export function isSuperString(value: string, seed: string): boolean {
  return typeof value === "string" && vjsContains(value, seed);
}

/**
 * Checks if the string does not contain the seed.
 * If given value is not a string, then it returns false.
 */
export function isNotSuperString(value: string, seed: string): boolean {
  return typeof value === "string" && !vjsContains(value, seed);
}

/**
 * Checks if the string contains only letters (a-zA-Z).
 * If given value is not a string, then it returns false.
 */
export function isAlpha(value: string): boolean {
  return typeof value === "string" && vjsIsAlpha(value);
}

/**
 * Checks if the string contains only letters and numbers.
 * If given value is not a string, then it returns false.
 */
export function isAlphanumeric(value: string): boolean {
  return typeof value === "string" && vjsIsAlphaNumeric(value);
}

/**
 * Checks if the string contains ASCII chars only.
 * If given value is not a string, then it returns false.
 */
export function isAscii(value: string): boolean {
  return typeof value === "string" && vjsIsAscii(value);
}

/**
 * Checks if a string is base64 encoded.
 * If given value is not a string, then it returns false.
 */
export function isBase64(value: string): boolean {
  return typeof value === "string" && vjsIsBase64(value);
}

/**
 * Checks if the string's length (in bytes) falls in a range.
 * If given value is not a string, then it returns false.
 */
export function isByteLength(
  value: string,
  min: number,
  max?: number
): boolean {
  return typeof value === "string" && vjsIsByteLength(value, min, max);
}

/**
 * Checks if the string is a credit card.
 * If given value is not a string, then it returns false.
 */
export function isCreditCard(value: string): boolean {
  return typeof value === "string" && vjsIsCreditCard(value);
}

/**
 * Checks if the string is a valid currency amount.
 * If given value is not a string, then it returns false.
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
 */
export function isEmail(value: string, options?: IsEmailOptions): boolean {
  return typeof value === "string" && vjsIsEmail(value, options);
}

/**
 * Checks if the string is a fully qualified domain name (e.g. domain.com).
 * If given value is not a string, then it returns false.
 */
export function isFQDN(value: string, options?: IsFQDNOptions): boolean {
  return typeof value === "string" && vjsIsFQDN(value, options);
}

/**
 * Checks if the string contains any full-width chars.
 * If given value is not a string, then it returns false.
 * @param value The value being checked.
 * @returns  True if the string contains full-width charachters.  False if the value does not or is not a string.
 */
export function isFullWidth(value: string): boolean {
  return typeof value === "string" && vjsIsFullWidth(value);
}

/**
 * Checks if the string contains any half-width chars.
 * If given value is not a string, then it returns false.
 */
export function isHalfWidth(value: string): boolean {
  return typeof value === "string" && vjsIsHalfWidth(value);
}

/**
 * Checks if the string contains variable-width chars.
 * If given value is not a string, then it returns false.
 */
export function isVariableWidth(value: string): boolean {
  return typeof value === "string" && vjsIsVariableWidth(value);
}

/**
 * Checks if the string is a hexadecimal color.
 * If given value is not a string, then it returns false.
 */
export function isHexColor(value: string): boolean {
  return typeof value === "string" && vjsIsHexColor(value);
}

/**
 * Checks if the string is a hexadecimal number.
 * If given value is not a string, then it returns false.
 */
export function isHexadecimal(value: string): boolean {
  return typeof value === "string" && vjsIsHexadecimal(value);
}

/**
 * Checks if the string is an IP (version 4 or 6).
 * If given value is not a string, then it returns false.
 */
export function isIP(value: string, version?: 4 | 6): boolean {
  return typeof value === "string" && vjsIsIP(value, version);
}

      /**
       * Checks if the string is an ISBN (version 10 or 13).
       * If given value is not a string, then it returns false.
       */
      export function isISBN(value: string, version?: 10 | 13): boolean {
        return typeof value === "string" && vjsIsISBN(value, version);
      }

/**
 * Checks if the string is an ISIN (stock/security identifier).
 * If given value is not a string, then it returns false.
 */
export function isISIN(value: string): boolean {
  return typeof value === "string" && vjsIsISIN(value);
}

/**
 * Checks if the string is a valid ISO 8601 date.
 * If given value is not a string, then it returns false.
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
 */
export function isLowercase(value: string): boolean {
  return typeof value === "string" && vjsIsLowercase(value);
}

/**
 * Checks if the string is a mobile phone number (locale is one of ['zh-CN', 'zh-TW', 'en-ZA', 'en-AU', 'en-HK',
 * 'pt-PT', 'fr-FR', 'el-GR', 'en-GB', 'en-US', 'en-ZM', 'ru-RU', 'nb-NO', 'nn-NO', 'vi-VN', 'en-NZ']).
 * If given value is not a string, then it returns false.
 */
export function isMobilePhone(value: string, locale: ValidatorJS.MobilePhoneLocale): boolean {
  return (typeof value === "string" && vjsIsMobilePhone(value, locale));
}

/**
 * Checks if the string is a valid hex-encoded representation of a MongoDB ObjectId.
 * If given value is not a string, then it returns false.
 */
export function isMongoId(value: string): boolean {
  return typeof value === "string" && vjsIsMongoId(value);
}

/**
 * Checks if the string contains one or more multibyte chars.
 * If given value is not a string, then it returns false.
 */
export function isMultibyte(value: string): boolean {
  return typeof value === "string" && vjsIsMultibyte(value);
}

/**
 * Checks if the string contains any surrogate pairs chars.
 * If given value is not a string, then it returns false.
 */
export function isSurrogatePair(value: string): boolean {
  return typeof value === "string" && vjsIsSurrogatePair(value);
}

/**
 * Checks if the string is an url.
 * If given value is not a string, then it returns false.
 */
export function isURL(value: string, options?: ValidatorJS.IsURLOptions): boolean {
  return typeof value === "string" && vjsIsURL(value, options);
}

/**
 * Checks if the string is a UUID (version 3, 4 or 5).
 * If given value is not a string, then it returns false.
 */
export function isUUID(value: string, version?: 3 | 4 | 5): boolean {
  return typeof value === "string" && vjsIsUUID(value, version);
}

/**
 * Checks if the string is uppercase.
 * If given value is not a string, then it returns false.
 */
export function isUppercase(value: string): boolean {
  return typeof value === "string" && vjsIsUppercase(value);
}

/**
 * Checks if the string's length falls in a range. Note: this function takes into account surrogate pairs.
 * If given value is not a string, then it returns false.
 */
export function length(value: string, min: number, max?: number): boolean {
  return (
    typeof value === "string" && vjsIsLength(value, min, max)
  );
}

/**
 * Checks if the string's length is not less than given number. Note: this function takes into account surrogate pairs.
 * If given value is not a string, then it returns false.
 */
export function minLength(value: string, min: number) {
  return typeof value === "string" && length(value, min);
}

/**
 * Checks if the string's length is not more than given number. Note: this function takes into account surrogate pairs.
 * If given value is not a string, then it returns false.
 */
export function maxLength(value: string, max: number) {
  return typeof value === "string" && length(value, 0, max);
}

/**
 * Checks if string matches the pattern. Either matches('foo', /foo/i) or matches('foo', 'foo', 'i').
 * If given value is not a string, then it returns false.
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
 */
export function isMilitaryTime(value: string): boolean {
  return matches(value, /^([01]\d|2[0-3]):?([0-5]\d)$/);
}

// -------------------------------------------------------------------------
// Validation Methods: array checkers
// -------------------------------------------------------------------------
/**
 * Checks if array contains all values from the given array of values.
 * If null or undefined is given then this function returns false.
 */
export function arrayContains(array: any[], values: any[]) {
  if (!(array instanceof Array)) return false;

  return !array || values.every(value => array.indexOf(value) !== -1);
}

/**
 * Checks if array does not contain any of the given values.
 * If null or undefined is given then this function returns false.
 */
export function arrayNotContains(array: any[], values: any[]) {
  if (!(array instanceof Array)) return false;

  return !array || values.every(value => array.indexOf(value) === -1);
}

/**
 * Checks if given array is not empty.
 * If null or undefined is given then this function returns false.
 */
export function arrayNotEmpty(array: any[]) {
  if (!(array instanceof Array)) return false;

  return array instanceof Array && array.length > 0;
}

/**
 * Checks if array's length is as minimal this number.
 * If null or undefined is given then this function returns false.
 */
export function arrayMinSize(array: any[], min: number) {
  if (!(array instanceof Array)) return false;

  return array instanceof Array && array.length >= min;
}

/**
 * Checks if array's length is as maximal this number.
 * If null or undefined is given then this function returns false.
 */
export function arrayMaxSize(array: any[], max: number) {
  if (!(array instanceof Array)) return false;

  return array instanceof Array && array.length <= max;
}

/**
 * Checks if all array's values are unique. Comparison for objects is reference-based.
 * If null or undefined is given then this function returns false.
 */
export function arrayUnique(array: any[]) {
  if (!(array instanceof Array)) return false;

  const uniqueItems = array.filter((a, b, c) => c.indexOf(a) === b);
  return array.length === uniqueItems.length;
}

/**
 * Checks if the value is an instance of the specified object.
 */
export function isInstance(
  object: any,
  targetTypeConstructor: new (...args: any[]) => any
) {
  return (
    targetTypeConstructor &&
    typeof targetTypeConstructor === "function" &&
    object instanceof targetTypeConstructor
  );
}
