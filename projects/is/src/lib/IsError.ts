import { ValidationConstraintEnum } from "./ValidationConstraintEnum";
import { Types } from "./types";

/**
 * @param message The error message
 * @param value The value that violates the constraint
 * @param field The name of the field that triggered the constraint violation
 * @param constraint The name of the constraint violated
 * @param type The expected type for the field
 * @param code The application or module code for the error
 */
export class IsError extends Error {
    constructor(
      public message:string,
      public value: any, 
      public field?:string, 
      public constraint?: ValidationConstraintEnum,
      public type?: Types,
      public code?:string) {
        super(message);
        this.name = 'IsError';
        Object.setPrototypeOf(this, IsError.prototype);      
    }
}
  