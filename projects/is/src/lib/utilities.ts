/**
 * Derive constraint name
 */
export function constraintName(name:string) {
    return name.charAt(0).toUpperCase() + name.slice(1).replace('Error', '');
}