import { IError } from "../interface/IError";

export class CustomeError implements IError {
  message: string;

  constructor(message: string) {
    this.message = message;
  }

  serialize() {
    return this.message;
  }
}
