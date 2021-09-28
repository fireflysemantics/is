import { isMongoId as vtsIsMongoId} from "@fireflysemantics/validatorts";

/**
 * Checks if the string is a valid hex-encoded representation of a MongoDB ObjectId.
 * If given value is not a string, then it returns false.
 * 
 * @param value The value being checked.
 * @returns True if the string is a valid hex-encoded representation of a MongoDB ObjectId, false otherwise.
 */
export function isMongoId(value: string): boolean {
    return typeof value === "string" && vtsIsMongoId(value);
  }
  
  