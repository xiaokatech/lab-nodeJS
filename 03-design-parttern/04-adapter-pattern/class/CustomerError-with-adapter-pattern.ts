import { INewError } from "../interface/INewError";
import { NewCustomerError } from "./NewCustomerError";

export class CustomeError_v2 implements INewError {
  message: string;

  constructor(message: string) {
    this.message = message;
  }

  serialize() {
    return new NewCustomerError(this.message).serialize();
  }
}
