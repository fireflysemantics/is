import { isMobilePhoneLocales as vtsIsMobilePhoneLocales, IsMobilePhoneOptions as vtsIsMobilePhoneOptions, isMobilePhone as vtsIsMobilePhone } from "@fireflysemantics/validatorts"
export { MobilePhoneLocale } from "@fireflysemantics/validatorts"

/**
 * Checks if the string is a mobile phone number (locale is one of ['zh-CN', 'zh-TW', 'en-ZA', 'en-AU', 'en-HK',
 * 'pt-PT', 'fr-FR', 'el-GR', 'en-GB', 'en-US', 'en-ZM', 'ru-RU', 'nb-NO', 'nn-NO', 'vi-VN', 'en-NZ']).
 * If given value is not a string, then it returns false.
 * 
 * @param value The value being checked.
 * @param options The optional configuration {@link MobilePhoneLocale}.
 * @return True if the string is a mobile phone number, false otherwise.
 */
export function isMobilePhone(value: string, locale: string, options?: IsMobilePhoneOptions): boolean {
    return ( typeof value === "string" && vtsIsMobilePhone(value, locale, options));
}

/**
 * Rexport the options
 */
export type IsMobilePhoneOptions = vtsIsMobilePhoneOptions

export const IsMobilePhoneLocales = vtsIsMobilePhoneLocales