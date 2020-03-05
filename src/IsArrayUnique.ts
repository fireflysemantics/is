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
  