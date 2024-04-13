import { INewError } from "../interface/INewError";

export class NewCustomerError implements INewError {
  message: string;

  constructor(message: string) {
    this.message = message;
  }

  serialize() {
    return {
      message: this.message,
    };
  }
}
