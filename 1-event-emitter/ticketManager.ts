import { EventEmitter } from "events";

/*
Encapsulation vs Simplicity
OOP vs Functional Style
Reusability vs Generic Events
*/
// const ticketManager = new EventEmitter();

export class TicketManager extends EventEmitter {
  supply: number;

  constructor(supply: number) {
    super();
    this.supply = supply;
  }

  buy(email: string, price: number) {
    if (this.supply > 0) {
      this.supply = this.supply - 1;
      this.emit("buy", email, price, Date.now());
      return;
    }

    this.emit("error", new Error("There are no more tickets left to purchase"));
  }
}
