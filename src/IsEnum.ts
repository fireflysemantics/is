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
  