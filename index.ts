import { TicketManager } from "./ticketManager";
import { DatabaseService } from "./databaseService";
import { EmailService } from "./emailService";

const ticketManager = new TicketManager(3);
const emailService = new EmailService();
const databaseService = new DatabaseService();

ticketManager.on("buy", (email: string, price: number, timestamp: Date) => {
  emailService.send(email);
  databaseService.save(email, price, timestamp);
});

ticketManager.buy("test1.com", 100);
